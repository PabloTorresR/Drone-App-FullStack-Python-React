# Project Overview

## Backend (FastAPI)

This project features a minimalist FastAPI backend designed for handling user sessions and drone-related data. The use of WebSockets allows user session data to be managed without relying on a database.

### Architecture

The project aims for modularity, with a shared `Flight` class between the backend and frontend. However, due to asynchronous requirements, there are some differences in implementation.

### Setup and Commands

To run the backend:

1. Navigate to the server root folder.

2. Install dependencies:
   pipenv install

3. Activate the virtual environment:
   pipenv shell

4. Start the application:
   python main.py

## Frontend (React)

The frontend is designed for scalability, using a feature-based folder structure. It leverages context for state management and optimizes component re-renders using the "use-context-selector" library.

### Folder Structure

The frontend follows a feature-based folder structure to enhance modularity and maintainability.

### State Management

Contexts are used for global state management, and the "use-context-selector" library is employed to optimize component re-renders.

### Technologies

- Vite: A fast build tool that enhances development experience.
- TypeScript (TS): Provides static type checking for better code quality.
- SCSS: A powerful CSS preprocessor for styling.

### Setup and Commands

To run the frontend:

1. Navigate to the `drone-fe` root folder.

2. Install dependencies:
   npm install

3. Start the development server and the app:
   npm run dev

## Features Yet to be Implemented

Some features, such as displaying flight history or implementing landing/takeoff actions, are not yet developed
