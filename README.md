# CRUDify

[https://crudify-4i9s.onrender.com](https://crudify-4i9s.onrender.com)

This is a web application that allows users to create, view, update, and delete tasks. The application includes frontend, backend, database, and API components. Users can register, and manage their tasks effectively.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Main Workflows](#main-workflows)
- [Code Structure](#code-structure)
- [Contributing](#contributing)

## Features
- User registration
- CRUD operations on tasks
- Responsive and user-friendly interface
- Error handling and validation
- Secure data storage

## Prerequisites
- React Js
- Node.js
- MongoDB
- Git

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/harsh0565/CRUDify.git
   cd CRUDify
   ```

2. **Install backend dependencies:**

   ```sh
   cd server
   npm install
   ```

3. **Install frontend dependencies:**

   ```sh
   cd ../client
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the `server` directory with the following content:

   ```env
   PORT=8000
   MONGOURL=your_mongodb_connection_string
   ```

## Running the Application

1. **Start the backend server:**

   ```sh
   cd server
   npm run dev
   ```

   The server will run on `http://localhost:8000`.

2. **Start the frontend development server:**

   ```sh
   cd ../client
   npm run dev
   ```

   The client will run on `http://localhost:5173`.

## Main Workflows

### User Registration
1. **User Interface**: Navigate to the registration page.
2. **Form Submission**: Fill out the registration form with first name, last name, email, and password.
3. **Backend Processing**: 
   - The frontend sends a POST request to the backend API at `/api/create`.
   - The backend validates the input, creates a new user in the MongoDB database, and responds with a success message.
4. **Frontend Handling**: The user is redirected to the login page with a success notification.

### User Login
1. **User Interface**: Navigate to the login page.
2. **Form Submission**: Fill out the login form with email and password.
3. **Backend Processing**: 
   - The frontend sends a POST request to the backend API at `/api/login`.
   - The backend validates the credentials, generates a JWT token, and responds with the token and user information.
4. **Frontend Handling**: The token is stored locally (e.g., in localStorage), and the user is redirected to the task management page.

### Task Management
#### Create Task
1. **User Interface**: Navigate to the task creation page.
2. **Form Submission**: Fill out the task creation form with task details (e.g., title, description).
3. **Backend Processing**: 
   - The frontend sends a POST request to the backend API at `/api/createTask`.
   - The backend validates the input, creates a new task in the MongoDB database, and responds with a success message.
4. **Frontend Handling**: The new task is added to the task list with a success notification.

#### View Tasks
1. **User Interface**: Navigate to the task list page.
2. **Data Retrieval**: 
   - The frontend sends a GET request to the backend API at `/api/getTasks`.
   - The backend retrieves the tasks from the MongoDB database and responds with the task data.
3. **Frontend Handling**: The tasks are displayed in a list format on the frontend.

#### Update Task
1. **User Interface**: Navigate to the task update page.
2. **Form Submission**: Update the task details in the form.
3. **Backend Processing**: 
   - The frontend sends a PUT request to the backend API at `/api/updateTask/:id`.
   - The backend validates the input, updates the task in the MongoDB database, and responds with a success message.
4. **Frontend Handling**: The updated task is reflected in the task list with a success notification.

#### Delete Task
1. **User Interface**: Click the delete button for the task.
2. **Backend Processing**: 
   - The frontend sends a DELETE request to the backend API at `/api/deleteTask/:id`.
   - The backend deletes the task from the MongoDB database and responds with a success message.
3. **Frontend Handling**: The task is removed from the task list with a success notification.

## Code Structure

### Backend (server)
- **server.js**: Main entry point for the backend server.
- **router/userRoute.js**: Defines API routes for user operations.
- **controller/userController.js**: Contains functions for handling API requests.
- **model/userModel.js**: Defines the MongoDB schema for user data.

### Frontend (client)
- **src/main.jsx**: Main entry point for the React application.
- **src/App.jsx**: Defines the main application component and routes.
- **src/components**: Contains React components for user and task management.
  - **Auth.js**: Component for user registration and login.
  - **Tasks.js**: Component for displaying and managing tasks.
  - **Add.js**: Component for adding a new user.
  - **Edit.js**: Component for editing an existing user.
  - **User.js**: Component for displaying the user list.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.


---

Replace `your_mongodb_connection_string` with your actual MongoDB connection string and `yourusername` with your GitHub username. This README provides clear setup and run instructions, main workflows, and code 

