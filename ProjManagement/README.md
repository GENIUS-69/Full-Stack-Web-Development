# ProjManagement

A project management backend application built with Node.js and Express.js. This project is designed to provide APIs for user authentication, project management, and other backend functionalities. It is a great starting point for beginners to learn backend development.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- User authentication (Sign up, Login, Logout)
- Token-based authentication using JWT
- Middleware for request validation and authentication
- MongoDB integration with Mongoose
- Error handling and response standardization
- Environment variable configuration using `dotenv`
- Email generation using `nodemailer` and `mailgen`

---

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Validation**: Express Validator
- **Environment Management**: dotenv
- **Email**: Nodemailer, Mailgen

---

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/projmanagement.git
   ```

2. Navigate to the project directory:

   ```bash
   cd projmanagement
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. For production, use:

   ```bash
   npm start
   ```

---

## Environment Variables

Create a `.env` file in the root directory and configure the following variables:

### Example `.env` File Format

```env
# Server Configuration
PORT=
CORS_ORIGIN = 

# MongoDB Connection String
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority

# JWT Secret Key
ACCESS_TOKEN_SECRET=
ACCESS_TOKEN_EXPIRY=

REFRESH_TOKEN_SECRET=
REFRESH_TOKEN_EXPIRY=

# Email Configuration
MAILTRAP_SMTP_HOST= 
MAILTRAP_SMTP_PORT= 
MAILTRAP_SMTP_USER= 
MAILTRAP_SMTP_PASS= 

FORGOT_PASSWORD_REDIRECT_URL=
```

Replace `<username>`, `<password>`, `<dbname>`, `your_jwt_secret`, `your_email@example.com`, and `your_email_password` with your actual credentials.

---

## Usage

1. Start the server using the commands mentioned in the [Installation](#installation) section.
2. Use tools like [Postman](https://www.postman.com/) or [cURL](https://curl.se/) to test the API endpoints.
3. Integrate the backend with your frontend or mobile application.

---

## API Endpoints

### Authentication

- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - Login a user
- **POST** `/api/auth/logout` - Logout a user

### Health Check

- **GET** `/api/healthcheck` - Check server health

---

## Folder Structure

```
src/
├── app.js                 # Main application file
├── index.js               # Entry point
├── controllers/           # Controllers for handling requests
│   ├── auth.controller.js
│   └── healthcheck.controller.js
├── db/                    # Database connection
│   └── index.js
├── middlewares/           # Custom middlewares
│   ├── auth.middleware.js
│   └── validator.middleware.js
├── models/                # Database models
│   └── user.model.js
├── routes/                # API routes
│   ├── auth.routes.js
│   └── healthcheck.routes.js
├── utils/                 # Utility functions
│   ├── api-error.js
│   ├── api-response.js
│   ├── async-handler.js
│   ├── constants.js
│   └── mail.js
└── validators/            # Request validators
    └── index.js
```

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

---

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

---

## Author

**GENIUS**

If you have any questions, feel free to reach out at [sarthakhota30@gmail.com](mailto:your-email@example.com).

---

Happy coding! 🚀