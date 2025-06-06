# 🍕 Pizza Store - React Application

A fully functional online pizza store built using **React**, **Redux Toolkit**, **React Router**, **Tailwind CSS**, and **Vite**. This project simulates a real-world e-commerce app with features like a dynamic menu, cart system, address detection using geolocation, and async data fetching with Redux Thunks.

---

## 🚀 Features

- 🛒 Complete online pizza ordering experience
- 📦 Global state management using **Redux Toolkit** and **Thunk**
- ⚡ Super-fast development and build setup with **Vite**
- 🧭 Page routing and navigation with **React Router**
- ⏳ Data fetched using **fetch-before-render** via React Router's `loader`
- 🌐 Reverse geocoding to get user's address from geolocation
- 📱 Fully responsive and modern UI styled with **Tailwind CSS**

---

## 🛠 Tech Stack

| Technology      | Purpose                          |
| --------------- | -------------------------------- |
| React           | UI Library                       |
| Vite            | Lightning-fast build tool        |
| Redux Toolkit   | State management                 |
| Redux Thunk     | Asynchronous logic               |
| React Router    | Client-side routing              |
| Tailwind CSS    | Utility-first CSS framework      |
| Geolocation API | To fetch user's current location |

---

## 📂 Project Structure

pizza-store/
│
├── public/ # Static assets
├── src/
│ ├── features/
│ │ ├── cart/ # Cart component and slice
│ │ └── user/ # User component and slice
│ │ └── order/ # Order components
│ │ └── menu/ # menu components
│ ├── ui/ # Presentational UI components
│ ├── utilities/ # helper functions
│ ├── services/ # API calls
│ ├── App.jsx # Handling routing
│ ├── main.jsx # App entry point
│ └── index.css # Tailwind setup
│ └── store.js # Redux store
├── tailwind.config.js # Tailwind configuration
├── vite.config.js # Vite configuration
└── package.json

## 🙋‍♂️ Author

Mayank Rohilla
GitHub: @MayankRohilla17299 & @ohilla09mayank
