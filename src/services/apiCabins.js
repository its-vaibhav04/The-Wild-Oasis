// import supabase, { supabaseUrl } from "./supabase";

// export async function getCabins() {
//   const { data, error } = await supabase.from("Cabins").select("*");
//   if (error) {
//     console.log(error);
//     throw new Error("Cabins could not be laoded");
//   }

//   return data;
// }

// export async function createEditCabin(newCabin, id) {
//   const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
//   const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
//     "/",
//     ""
//   );

//   const imagePath = hasImagePath
//     ? newCabin.image
//     : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

//   let query = supabase.from("Cabins");
//   if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

//   if (id)
//     query = query
//       .update({ ...newCabin, image: imagePath })
//       .eq("id", id)
//       .select();

//   const { data, error } = await query.select().single();

//   if (error) {
//     throw new Error("Cabin could not be created");
//   }

//   if (hasImagePath) return data;

//   const { error: storageError } = await supabase.storage
//     .from("cabin-images")
//     .upload(imageName, newCabin.image);

//   if (storageError) {
//     await supabase.from("Cabins").delete().eq("id", data.id);
//     console.log(storageError);
//     throw new Error(
//       "Cabin image could not be uploaded and cabin was not created "
//     );
//   }

//   return data;
// }

// export async function deleteCabins(id) {
//   const { data, error } = await supabase.from("Cabins").delete().eq("id", id);
//   if (error) {
//     console.log(error);
//     throw new Error("Cabin could not be deleted");
//   }

//   return data;
// }
import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("Cabins").select("*");
  if (error) {
    console.log(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function createEditCabin(newCabin, id) {
  // Handle the case when no image is provided or when it's a string path
  const hasImagePath =
    typeof newCabin.image === "string" &&
    newCabin.image.startsWith(supabaseUrl);

  let imagePath;
  let imageName;

  // If image is already a path from supabase, use it directly
  if (hasImagePath) {
    imagePath = newCabin.image;
  }
  // If it's a new file being uploaded
  else if (newCabin.image instanceof File) {
    imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");
    imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  }
  // If no image is provided
  else {
    throw new Error("Invalid image format");
  }

  // Prepare the cabin data
  const cabinData = { ...newCabin, image: imagePath };

  let query = supabase.from("Cabins");

  // Insert new cabin
  if (!id) {
    query = query.insert([cabinData]);
  }
  // Update existing cabin
  else {
    query = query.update(cabinData).eq("id", id);
  }

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error(
      id ? "Cabin could not be updated" : "Cabin could not be created"
    );
  }

  // If we're using an existing image, we're done
  if (hasImagePath) return data;

  // Upload the new image file to storage
  if (newCabin.image instanceof File) {
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image);

    if (storageError) {
      // Delete the cabin if the image upload fails
      await supabase.from("Cabins").delete().eq("id", data.id);
      console.error(storageError);
      throw new Error(
        "Cabin image could not be uploaded and cabin was not created"
      );
    }
  }

  return data;
}

export async function deleteCabins(id) {
  const { data, error } = await supabase.from("Cabins").delete().eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}
