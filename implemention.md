# 1. Project Initialization & Folder Structure

## Project Setup

Created the frontend application using Vite and React.

### Commands Used

```bash
mkdir frontend
cd frontend

npm create vite@latest .

npm install
npm run dev
```

## Vite Boilerplate Cleanup

Removed default Vite files and assets:

- src/assets/react.svg
- src/App.css
- public/vite.svg

Created a clean starting point for development.

## Main Entry Configuration

Configured:

- main.jsx
- App.jsx

Application renders successfully using ReactDOM.

## Folder Structure

```text
src
│
├── assets
│   ├── images
│   └── icons
│
├── components
│   ├── common
│   ├── video
│   ├── channel
│   └── auth
│
├── hooks
│
├── layouts
│   └── MainLayout.jsx
│
├── pages
│   ├── Home
│   ├── Login
│   ├── Register
│   ├── Dashboard
│   ├── VideoPlayer
│   ├── Channel
│   ├── CreateChannel
│   └── NotFound
│
├── redux
│   ├── store.js
│   └── slices
│
├── routes
│   └── router.jsx
│
├── services
├── styles
├── utils
│
├── App.jsx
└── main.jsx
```

### Outcome

- React application initialized successfully.
- Vite boilerplate removed.
- Clean project structure created.
- Ready for routing and feature development.

## 2. Routing Setup

### React Router Installation

```bash
npm install react-router-dom
```

### Router Configuration

Configured routing using `createBrowserRouter` and `RouterProvider`.

### Available Routes

| Route | Page |
|---------|---------|
| / | Home |
| /login | Login |
| /register | Register |
| /dashboard | Dashboard |
| /video/:videoId | Video Player |
| /channel/:channelId | Channel |
| /create-channel | Create Channel |
| * | Not Found |

### Layout Structure

A reusable `MainLayout` component was created using React Router's `Outlet` component to render nested routes.

### Outcome

- React Router configured successfully.
- Nested routing implemented.
- Dynamic route parameters added.
- Not Found page configured.
- Project ready for UI development.

## 3. Layout Architecture

### Components Created

- Navbar
- Sidebar
- MainLayout

### Layout Flow

```text
MainLayout
│
├── Navbar
│
├── Sidebar
│
└── Outlet
    └── Route Pages
```

### Features Prepared

- Header Section
- Search Bar Placeholder
- Hamburger Menu Placeholder
- Sidebar Navigation
- Nested Route Rendering

### Outcome

Reusable application layout established for all pages using React Router's Outlet component.

## 4. Tailwind CSS & Design System Setup

### Installation

```bash
npm install tailwindcss @tailwindcss/vite
```

### Configuration

Integrated Tailwind CSS using the official Vite plugin and imported Tailwind globally through the application's main stylesheet.

### Files Updated

- vite.config.js
- src/styles/index.css
- src/main.jsx

### Design System Configuration

Established a centralized design system using CSS custom properties (variables) for consistent styling across the application.

#### Theme Support

Implemented support for:

- Dark Theme (Default)
- Light Theme
- Theme Toggle Utilities

#### Global Variables

Configured reusable variables for:

- Brand Colors
- Background Colors
- Text Colors
- Border Colors
- Shadows
- Navbar Height
- Sidebar Width

#### Reusable Utility Classes

Created common utility classes for:

- Layout Containers
- Flex Utilities
- Buttons
- Input Fields
- Cards
- Video Grid Layout
- Typography
- Scrollbar Styling
- Filter Buttons
- Responsive Layouts

### Styling Features

- Global CSS Reset
- Custom Scrollbar Design
- YouTube-inspired Color Palette
- Responsive Grid System
- Reusable Button Variants
- Reusable Input Components
- Card Components
- Smooth Transitions
- Dark/Light Theme Support

### Theme Utility

Created theme helper functions for:

- Enable Dark Theme
- Enable Light Theme
- Toggle Theme

### Verification

Verified Tailwind functionality by applying utility classes to sample components and confirming proper rendering.

### Outcome

- Tailwind CSS integrated successfully.
- Centralized design system established.
- Dark and Light theme support implemented.
- Reusable styling utilities created.
- Consistent UI foundation prepared for future development.
- Ready for responsive YouTube Clone interface implementation.


## 5. Axios Configuration & API Setup

### Installation

```bash
npm install axios
```

### Environment Configuration

Configured environment variables for API endpoint management.

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

### Axios Instance

Created a centralized Axios instance with:

- Base URL configuration
- Request timeout
- Default JSON headers

### JWT Authentication Interceptor

Implemented request interceptors to:

- Automatically retrieve JWT tokens from local storage
- Attach Authorization headers to protected API requests

```http
Authorization: Bearer <token>
```

### Response Interceptor

Implemented response interceptors to:

- Handle unauthorized requests (401)
- Clear expired authentication data
- Maintain secure user sessions

### Utility Files

Created:

```text
src
├── services
│   └── api.js
│
├── utils
│   ├── axiosInterceptor.js
│   └── constants.js
```

### Outcome

- Centralized API communication established.
- Automatic JWT token handling implemented.
- Environment-based API configuration enabled.
- Secure and scalable API architecture prepared for authentication and data management.

````markdown
## 5. React Router Setup

### Installation

```bash
npm install react-router-dom
```

### Router Configuration

Configured application routing using `createBrowserRouter` and `RouterProvider`.

### Routes Implemented

| Route | Description |
|---------|---------|
| / | Home Page |
| /login | Login Page |
| /register | Register Page |
| /dashboard | Dashboard |
| /video/:videoId | Video Player Page |
| /channel/:channelId | Channel Page |
| /create-channel | Create Channel Page |
| * | Not Found Page |

### Features

- Nested Routing
- Dynamic Route Parameters
- Centralized Router Configuration
- Reusable Layout Support
- Custom 404 Page

### Outcome

- Routing architecture established.
- Dynamic routes prepared for videos and channels.
- Navigation structure ready for future features.

---

## 6. Application Layout Architecture

### Components Created

```text
src
├── layouts
│   └── MainLayout.jsx
│
├── components
│   └── common
│       ├── Navbar.jsx
│       └── Sidebar.jsx
```

### Layout Structure

```text
MainLayout
│
├── Navbar
├── Sidebar
└── Outlet
```

### Features

- Reusable Layout Component
- Persistent Navbar
- Persistent Sidebar
- Route-based Content Rendering
- Scalable Component Structure

### Outcome

- Application shell created.
- Consistent UI structure established.
- Prepared for YouTube-style interface development.

---

## 7. Axios Configuration & API Setup

### Installation

```bash
npm install axios
```

### Environment Configuration

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

### Axios Instance

Created a centralized Axios instance for all API communication.

### Features

- Base URL Configuration
- JSON Request Headers
- Request Timeout Handling
- Environment-Based Configuration

### JWT Interceptor

Implemented request interceptors to:

- Automatically retrieve JWT tokens
- Attach Authorization headers
- Support protected API requests

```http
Authorization: Bearer <token>
```

### Response Handling

Implemented response interceptors to:

- Handle Unauthorized Requests
- Remove Expired Authentication Data
- Support Global Error Handling

### Utility Files

```text
src
├── services
│   └── api.js
│
├── utils
│   ├── axiosInterceptor.js
│   └── constants.js
```

### Outcome

- Centralized API communication established.
- JWT-ready architecture implemented.
- Backend integration prepared.

---

## 8. Redux Toolkit State Management

### Installation

```bash
npm install @reduxjs/toolkit react-redux
```

### Store Configuration

Created a centralized Redux store using Redux Toolkit.

### Store Structure

```text
src
├── redux
│   ├── store.js
│
│   └── slices
│       ├── authSlice.js
│       ├── videoSlice.js
│       ├── searchSlice.js
│       └── categorySlice.js
```

### Redux Provider

Wrapped the entire application using:

```jsx
<Provider store={store}>
  <App />
</Provider>
```

### Outcome

- Global state management established.
- Application-wide data sharing enabled.
- Redux DevTools support configured.

---

## 9. Authentication Slice

### Purpose

Manage user authentication state throughout the application.

### State Managed

```javascript
{
  user: null,
  token: null,
  isAuthenticated: false
}
```

### Actions

- login
- logout

### Features

- User Session Management
- JWT Token Storage
- Authentication Status Tracking

### Outcome

Authentication state architecture prepared for login and registration features.

---

## 10. Video Slice

### Purpose

Manage video-related application state.

### State Managed

```javascript
{
  videos: [],
  loading: false,
  error: null
}
```

### Actions

- setVideos
- setLoading
- setError

### Features

- Video Data Storage
- Loading State Management
- Error Handling

### Outcome

Prepared centralized state management for homepage videos and channel videos.

---

## 11. Search Slice

### Purpose

Manage video search functionality.

### State Managed

```javascript
{
  query: ""
}
```

### Actions

- setSearchQuery
- clearSearchQuery

### Features

- Global Search Query Storage
- Search State Persistence
- Cross-Component Search Access

### Outcome

Prepared search functionality for filtering videos across the application.

---

## 12. Category Slice

### Purpose

Manage selected video category filters.

### State Managed

```javascript
{
  selectedCategory: "All"
}
```

### Actions

- setCategory

### Features

- Category Filter Management
- Global Filter State
- Dynamic Video Filtering Support

### Outcome

Prepared category-based filtering system for the homepage.

---

## Current Project Progress

### Completed

- Project Initialization
- Vite Setup
- Folder Structure
- React Router Setup
- Layout Architecture
- Tailwind CSS Setup
- Design System
- Dark Theme Support
- Axios Configuration
- JWT Interceptors
- Redux Toolkit Setup
- Auth Slice
- Video Slice
- Search Slice
- Category Slice

### Next Development Phase

- Navbar UI
- Sidebar UI
- Category Filter Bar
- Video Card Component
- Home Page Layout
- Authentication Pages
- Video Player Page
- Channel Management
- Backend API Integration
````
