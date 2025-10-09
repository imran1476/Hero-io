# 🦸‍♂️ Hero IO — App Marketplace

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📌 Overview

**Hero IO** is a modern, responsive web application that showcases trending mobile applications. Users can browse, search, sort, install apps, and view detailed app information with ratings and reviews. Built with **React**, **Tailwind CSS**, and **Recharts**, Hero IO ensures smooth user experience across all devices.

---

## 🚀 Live Demo

[Your Deployed Link Here]  

---

## 🛠️ Features

### 🏠 Home Page
- Banner with center-aligned heading, description, and buttons linking to App Store & Play Store.
- Three state cards with unique styles.
- Top 8 apps displayed in a four-column responsive layout.
- "Show All" button navigates to **All Apps Page**.

### 📱 All Apps Page
- Displays all apps with search and filter functionality.
- Live search: filters apps by title while typing.
- Sort apps by downloads using a dropdown (High-Low / Low-High).
- Responsive app cards showing:
  - App title
  - Image
  - Download count
  - Average rating
- “No App Found” message for unmatched search queries.

### 📊 App Details Page
- Shows detailed app information: title, rating, downloads, reviews.
- Install button with localStorage support:
  - Installed apps are saved and button gets disabled with text “Installed”.
- Responsive chart visualizing app reviews (using **Recharts**).
- App description section.

### 💾 My Installation Page
- Displays all installed apps.
- Uninstall button removes app from UI and localStorage.
- Toast notifications for install/uninstall actions.
- Sort installed apps by downloads (High-Low / Low-High).

### ⚡ Challenge Features
- Loading animation during page navigation and search operations.
- Fully responsive design for all devices (mobile, tablet, desktop).
- Custom 404/Error page for invalid routes.

---

## 🧱 Tech Stack

- **Frontend:** React, Tailwind CSS
- **Routing:** React Router DOM
- **State Management:** React useState & useMemo
- **Charts:** Recharts
- **Notifications:** React Toastify
- **Icons:** React Icons
- **Storage:** Browser localStorage

---

## 📂 Data Structure

The app data is stored in a JSON array with objects containing:

```js
{
  image: string;
  title: string;
  companyName: string;
  id: number;
  description: string;
  size: number;
  reviews: number;
  ratingAvg: number;
  downloads: number;
  ratings: [
    { name: "1 star"; count: number },
    { name: "2 star"; count: number },
    { name: "3 star"; count: number },
    { name: "4 star"; count: number },
    { name: "5 star"; count: number }
  ];
}
src/
├─ assets/           # Images and icons
├─ components/       # Header, Footer, AppCard, LoadingSpinner
├─ data/             # appData.js (JSON array)
├─ hooks/            # Custom hooks (useLocalStorage)
├─ pages/            # Home, AllApps, AppDetails, Installation
├─ App.jsx
└─ index.js
