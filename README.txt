MySQL Authentication System

This repository contains a secure user authentication system that leverages Node.js, Express, and MySQL technologies, with Tailwind CSS providing modern styling capabilities.

Project Overview

We have developed a comprehensive authentication system that handles user registration, login functionality, and protected route management. The system utilizes MySQL for data persistence, implements bcrypt for secure password hashing, and employs express-session for robust session management. The user interface is crafted using Tailwind CSS for a responsive and polished experience.

Key Features

The system includes essential authentication capabilities such as user registration with email, username, and password support, as well as secure login functionality with session management. Password security is ensured through bcrypt hashing, while role-based access control governs user permissions. The system implements protected routes that require authentication and features a responsive interface styled with Tailwind CSS. MySQL database integration provides reliable data storage and retrieval.

Project Structure

The codebase follows a clear organizational structure:

The main application entry point is app.js, supported by environment configuration in .env. The config directory contains database setup, while middleware handles authentication logic. Models define database operations, and the public directory houses CSS and JavaScript assets. Routes manage authentication and protected endpoints, with utils providing password hashing functionality. Views contain the HTML templates, and configuration files manage project dependencies and styling.

Getting Started

Prerequisites:
- Node.js version 14 or higher
- MySQL server installation
- npm or yarn package manager

Installation Steps:

1. Obtain the source code by cloning the repository or downloading directly

2. Install required dependencies:
   npm install

3. Set up environment variables in a .env file:
   DB_HOST=localhost
   DB_USER=your_mysql_username
   DB_PASSWORD=your_mysql_password
   DB_NAME=auth_system
   SESSION_SECRET=your_session_secret
   PORT=3000

4. Launch the application:
   npm run dev

Application Usage

Development Environment:
Run with automatic file change detection using:
npm run dev

Production Environment:
Launch in production mode with:
npm start

Access Points:
- Login: http://localhost:3000/
- Registration: http://localhost:3000/register
- Dashboard: http://localhost:3000/dashboard (authenticated users only)

API Documentation

Authentication Endpoints:
- POST /api/auth/register - Create new user accounts
- POST /api/auth/login - Authenticate existing users
- POST /api/auth/logout - End user sessions
- GET /api/auth/me - Retrieve current user data

Protected Resources:
- GET /api/protected - Example of authentication-required endpoint

Security Implementation

The system implements multiple security measures including bcrypt password hashing, HTTP-only session cookies, CSRF protection, role-based access control, comprehensive input validation, and secure database query handling.

Styling with Tailwind CSS

Tailwind CSS provides the styling foundation, with compiled styles in public/css/style.css. To rebuild CSS after configuration changes:
npm run build:css

Licensing

This project is licensed under ISC.

Contact Information

For support or inquiries, please submit an issue through the repository or contact the development team directly.
