import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://etynasgoddiarcrkkjjw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV0eW5hc2dvZGRpYXJjcmtramp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxMTYyNDksImV4cCI6MjA1NzY5MjI0OX0.VQBwh9di5BUHbguIBu00MO_E_UyC6PV0Rp8GuyynU9A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
