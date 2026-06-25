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




---
---
BACKEND DEVELOPMENT
---
---

# Implementation.md

# YouTube Clone (MERN Stack) - Backend Implementation Progress

## Project Overview

This project is a full-stack YouTube Clone built using the MERN Stack.

### Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- BcryptJS
- Zod Validation
- Cookie Parser
- CORS

---

# Step 1: Initialize Backend Project

Create backend folder:

```bash
mkdir backend
cd backend
```

Initialize Node Project:

```bash
npm init -y
```

---

# Step 2: Install Dependencies

### Production Dependencies

```bash
npm install express mongoose dotenv cors cookie-parser bcryptjs jsonwebtoken zod
```

### Development Dependencies

```bash
npm install -D nodemon
```

---

# Step 3: Configure Package.json

```json
{
  "type": "module",
  "scripts": {
    "dev": "nodemon src/server.js",
    "start": "node src/server.js"
  }
}
```

---

# Step 4: Create Folder Structure

```txt
backend/
│
├── src/
│
├── config/
│   └── db.js
│
├── controllers/
│
├── middlewares/
│
├── models/
│
├── routes/
│
├── validators/
│
├── utils/
│
├── app.js
│
└── server.js
│
├── .env
├── package.json
└── README.md
```

---

# Step 5: Environment Variables

Create `.env`

```env
PORT=5000

MONGODB_URI=mongodb://localhost:27017/youtube_clone

ACCESS_TOKEN_SECRET=your_access_secret

REFRESH_TOKEN_SECRET=your_refresh_secret

NODE_ENV=development
```

---

# Step 6: Configure MongoDB Connection

Create:

```txt
src/config/db.js
```

Responsibilities:

- Connect MongoDB
- Handle connection errors
- Export database connection function

---

# Step 7: Create Express App

Create:

```txt
src/app.js
```

Setup:

- express.json()
- cors()
- cookieParser()
- route mounting

Example:

```js
app.use(express.json());

app.use(cors());

app.use(cookieParser());

app.use("/api/v1", routes);
```

---

# Step 8: Create Server

Create:

```txt
src/server.js
```

Responsibilities:

- Load environment variables
- Connect database
- Start server

---

# Step 9: Design Backend Architecture

Instead of storing everything inside a single collection, create separate collections.

Collections:

```txt
Users
Channels
Videos
Comments
Reactions
Subscriptions
Playlists
WatchHistory
```

---

# Step 10: Create User Schema

File:

```txt
src/models/user.model.js
```

Fields:

```js
username
email
password
avatar
role
refreshToken
channel
```

Indexes:

```js
email
username
```

---

# Step 11: Create Channel Schema

File:

```txt
src/models/channel.model.js
```

Fields:

```js
owner
name
handle
description
logo
banner
subscribersCount
videosCount
totalViews
```

---

# Step 12: Create Video Schema

File:

```txt
src/models/video.model.js
```

Fields:

```js
title
description
category
tags
thumbnailUrl
videoUrl
duration
channel
owner
views
likesCount
dislikesCount
commentsCount
visibility
```

Indexes:

```js
title
category
channel
createdAt
```

---

# Step 13: Create Comment Schema

File:

```txt
src/models/comment.model.js
```

Fields:

```js
video
user
content
isEdited
```

---

# Step 14: Create Reaction Schema

Purpose:

Store Like and Dislike information.

Fields:

```js
video
user
reaction
```

Reaction:

```js
like
dislike
```

Compound Index:

```js
video + user
```

Prevents duplicate reactions.

---

# Step 15: Create Subscription Schema

Purpose:

Store channel subscriptions.

Fields:

```js
subscriber
channel
```

---

# Step 16: Create Playlist Schema

Purpose:

Store user playlists.

Fields:

```js
owner
title
description
videos
```

---

# Step 17: Create Watch History Schema

Purpose:

Store recently watched videos.

Fields:

```js
user
video
watchedAt
```

---

# Step 18: Create API Route Structure

```txt
src/routes/
│
├── index.js
├── auth.routes.js
├── channel.routes.js
├── video.routes.js
├── comment.routes.js
├── reaction.routes.js
├── subscription.routes.js
├── playlist.routes.js
└── history.routes.js
```

---

# Step 19: Create Main Router

File:

```txt
src/routes/index.js
```

Mount Routes:

```js
/auth
/channels
/videos
/comments
/reactions
/subscriptions
/playlists
/history
```

---

# Step 20: Create Authentication Routes

File:

```txt
auth.routes.js
```

Endpoints:

```http
POST /register

POST /login

POST /logout

POST /refresh-token

GET /me
```


# Step 25: Create Authentication Validation

Library:

```txt
Zod
```

File:

```txt
validators/auth.validation.js
```

Schemas:

### Register Schema

```js
name
email
password
```

### Login Schema

```js
email
password
```

Responsibilities:

- Validate input
- Return proper error messages
- Prevent invalid requests

---

# Step 26: Create Register Controller

Responsibilities:

### Validate Input

```js
registerSchema.parse(req.body)
```

### Check Existing User

```js
User.findOne()
```

### Hash Password

```js
bcrypt.hash(password, 10)
```

### Save User

```js
User.create()
```

### Return Success Response

```json
{
  "success": true,
  "message": "User registered successfully"
}
```

---

# Step 27: Create Login Controller

Responsibilities:

### Validate Input

```js
loginSchema.parse(req.body)
```

### Find User

```js
User.findOne({ email })
```

### Compare Password

```js
bcrypt.compare()
```

### Generate Access Token

```js
jwt.sign()
```

Expiry:

```txt
15 Minutes
```

### Generate Refresh Token

```js
jwt.sign()
```

Expiry:

```txt
7 Days
```

### Save Refresh Token

```js
user.refreshToken = refreshToken
```

### Set HttpOnly Cookie

```js
res.cookie()
```

### Return Access Token

```json
{
  "success": true,
  "accessToken": "..."
}
```

---

# Step 28: JWT Authentication Strategy

### Access Token

Purpose:

```txt
Authorize API Requests
```

Expiry:

```txt
15 Minutes
```

---

### Refresh Token

Purpose:

```txt
Generate New Access Tokens
```

Expiry:

```txt
7 Days
```

Stored:

```txt
Database
HttpOnly Cookie
```

---

# Authentication Flow

```txt
Login
 │
 ▼
Generate Access Token
 │
 ▼
Generate Refresh Token
 │
 ▼
Save Refresh Token
 │
 ▼
Set Cookie
 │
 ▼
Send Access Token
```

---

# Refresh Flow

```txt
Access Token Expired
        │
        ▼
POST /refresh-token
        │
        ▼
Verify Refresh Token
        │
        ▼
Generate New Access Token
        │
        ▼
Return New Access Token
```

---

# Step 21: Create Channel Routes

Endpoints:

```http
POST /channels

GET /channels/:handle

PATCH /channels/:channelId

DELETE /channels/:channelId

GET /channels/:channelId/videos
```

---

# Step 22: Create Video Routes

Endpoints:

```http
GET /videos

GET /videos/:videoId

POST /videos

PATCH /videos/:videoId

DELETE /videos/:videoId
```

---

# Step 23: Create Comment Routes

Endpoints:

```http
GET /comments/video/:videoId

POST /comments/video/:videoId

PATCH /comments/:commentId

DELETE /comments/:commentId
```

---

# Step 24: Create Reaction Routes

Endpoints:

```http
POST /reactions/like/:videoId

POST /reactions/dislike/:videoId

DELETE /reactions/:videoId
```

---


---

# Features Completed Till Now

✅ Project Initialization

✅ Folder Structure

✅ MongoDB Setup Design

✅ User Schema

✅ Channel Schema

✅ Video Schema

✅ Comment Schema

✅ Reaction Schema

✅ Watch History Schema

✅ Route Architecture

✅ Authentication Route Design

✅ JWT Authentication Design

✅ Refresh Token Workflow

✅ Register Controller

✅ Login Controller

✅ Zod Validation Setup

---

# Next Implementation Steps

### Authentication

- Logout Controller
- Refresh Token Controller
- Get Current User Controller
- JWT Middleware

### Channel Module

- Create Channel
- Update Channel
- Delete Channel
- Get Channel Details

### Video Module

- Upload Video
- Update Video
- Delete Video
- Video Pagination
- Search Videos
- Filter By Category

### Comments Module

- Add Comment
- Edit Comment
- Delete Comment
- Get Comments

### Reactions Module

- Like Video
- Dislike Video
- Remove Reaction

### Subscription Module

- Subscribe Channel
- Unsubscribe Channel

### File Uploads

- Multer
- Cloudinary Integration

### Production Enhancements

- Centralized Error Handling
- API Response Utility
- Async Handler Utility
- Rate Limiting
- Security Headers
- Logging


