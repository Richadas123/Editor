# Compiler

A simple MERN-based code editor that allows users to write and execute code in various programming languages using the Judge0 API. Includes user authentication and protected editor access.

## Live Links

- **Frontend (React - GitHub Pages)**: [https://richadas123.github.io/Editor/](https://richadas123.github.io/Editor/)
- **Backend (Express API)**: [https://editor-vrh3.onrender.com](https://editor-vrh3.onrender.com)
- **Judge0 Proxy Server**: [https://editor-1-ehgx.onrender.com](https://editor-1-ehgx.onrender.com)

---

## Features

- User Signup & Login (JWT-based authentication)
- Monaco Editor 
- Supports multiple languages via Judge0 (C, C++, Python, etc.)
- Custom input and output console
- Protected `/editor` route (only accessible after login)

---

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Axios, React Router
- **Backend**: Node.js, Express, MongoDB (Atlas), JWT
- **Code Execution**: Judge0 API (via proxy server)

---

## Authentication Flow

- Users sign up or log in.
- A JWT token is issued and stored locally.
- Access to `/editor` is restricted based on authentication.
- If not authenticated, the user is redirected to login.

---

## How to Run Locally

### 1. Clone the repo
```bash
git clone https://github.com/Richadas123/Editor.git
cd Editor

### 2. Set up Frontend
cd frontend
npm install
npm run dev

### 3. Set up Backend
cd ../backend
npm install
npm run dev

