<h1 align="center" id="title">The Wild Oasis</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active-brightgreen" alt="Status Badge">
  <img src="https://img.shields.io/github/repo-size/its-vaibhav04/The-Wild-Oasis" alt="Repo Size Badge">
  <img src="https://img.shields.io/github/last-commit/its-vaibhav04/The-Wild-Oasis" alt="Last Commit Badge">
  <img src="https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel" alt="Vercel Badge">
</p>


<p align="center"><img src="https://socialify.git.ci/its-vaibhav04/The-Wild-Oasis/image?custom_language=JavaScript&amp;font=Source+Code+Pro&amp;language=1&amp;name=1&amp;owner=1&amp;pattern=Solid&amp;stargazers=1&amp;theme=Auto" alt="project-image"></p>

## 👋🏼 About :
<p id="description">This is a full-stack hotel management dashboard designed to help staff members handle guest bookings cabin listings check-ins and revenue tracking with ease. </p>
 <p> It features real-time booking updates automated status changes and a responsive user-friendly interface, all built to streamline daily hotel operations.</p>

---
<h2>🚀 Live Demo</h2>

[https://the-wild-oasis-vaibhav.vercel.app/](https://the-wild-oasis-vaibhav.vercel.app/)

---

## ✨ Features

- 🔐 Secure login system with role-based access for staff
- 🏕️ Create, update, and delete cabin listings with photo uploads
- 📆 Manage bookings with real-time status updates and check-in/out workflows
- 📊 Visual dashboard to monitor occupancy rates, revenue, and stay metrics
- ⚙️ Settings panel to configure pricing, availability, and operational rules
- 🔔 Automated reminders and booking status indicators for smooth workflow

---

<h2>📸 Project Screenshots:</h2>

<table>
  <tr>
    <td>
      <img src="https://i.postimg.cc/D0kM95Fk/Screenshot-2025-07-13-at-12-24-14-PM.png" alt="Dashboard" width="100%" />
    </td>
    <td>
      <img src="https://i.postimg.cc/vmKjzbNm/Screenshot-2025-07-13-at-12-15-15-PM.png" alt="Bookings Table" width="100%" />
    </td>
  </tr>
  <tr>
    <td>
      <img src="https://i.postimg.cc/tJ3MpPC1/Screenshot-2025-07-13-at-12-15-38-PM.png" alt="Cabins Management" width="100%" />
    </td>
    <td>
      <img src="https://i.postimg.cc/hj7YZ6k1/Screenshot-2025-07-13-at-12-16-40-PM.png" alt="Fourth Feature" width="100%" />
    </td>
  </tr>
</table>


---
## 🛠 Tech Stack

<p align="left">
  <img src="https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=supabase&logoColor=white" alt="Supabase">
  <img src="https://img.shields.io/badge/React_Query-FF4154?style=flat&logo=react-query&logoColor=white" alt="React Query">
</p>

| **Category** 	| **Tools Used** 	|
|:---:	|:---:	|
| Frontend 	| React, Vite, Tailwind CSS 	|
| Backend & Auth 	| Supabase (Database, Auth, Storage) 	|
| State & Forms 	| React Query, React Hook Form 	|
| Data Visualization 	| Recharts 	|
| Notifications 	| React Hot Toast 	|

---
| **Folder / File**             | **Purpose & Key Implementations**                                                                                                  |
|------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| `src/components/`            | Reusable UI elements like `Sidebar`, `Form`, and `Toaster`. <br>• `Form.jsx`: Uses **React Hook Form** for input handling.<br>• `Toaster.jsx`: Centralized **react-hot-toast** config. |
| `src/features/bookings/`     | Booking logic using **React Query**.<br>• Fetch, mutate, and cache bookings.<br>• Status filtering with dynamic queries.<br>• Toasts for check-in/out actions. |
| `src/features/cabins/`       | Cabin CRUD operations with image handling.<br>• **Supabase Storage** for file uploads.<br>• Form validation via **React Hook Form**.<br>• Mutation hooks with optimistic UI updates. |
| `src/features/dashboard/`    | Displays hotel KPIs using **Recharts**.<br>• Aggregates bookings/cabins via dependent **React Query**.<br>• Responsive layout using **Tailwind Grid**. |
| `src/features/check-in-out/` | Logic for booking status transitions.<br>• Business rules (e.g. payment check before check-in).<br>• Toast notifications for all state changes. |
| `src/hooks/`                 | Custom hooks like `useCabins()` and `useBookings()` built with **React Query**.<br>• Clean separation of data fetching and UI logic.<br>• Manual cache invalidation for smooth UX. |
| `src/services/`              | API layer with Supabase calls.<br>• `apiCabins.js`, `apiBookings.js`: Async wrappers for DB/storage ops.<br>• Centralized error handling and cleaner components. |
| `src/context/AuthContext.jsx`| Global auth state manager.<br>• Listens to **Supabase onAuthStateChange**.<br>• Provides `login()`, `logout()`, `user` via custom `useAuth()` hook. |
| `src/styles/`                | Tailwind setup and global styles.<br>• Organizes custom utility classes and base styles.                                           |


---
## 👨‍💻 Author

**Vaibhav Tyagi**  
[LinkedIn](https://linkedin.com/in/vaibhavtyagi05) · [Email](mailto:tyagi.vaibhav4814@gmail.com)


