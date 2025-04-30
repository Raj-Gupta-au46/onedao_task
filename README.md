# ecommerce_ONEDAO

A full-stack e-commerce application built with Node.js, Express, PostgreSQL, and React.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [API Documentation](#api-documentation)
  - [Authentication Endpoints](#authentication-endpoints)
  - [Product Endpoints](#product-endpoints)
  - [Health Check](#health-check)
- [Environment Variables](#environment-variables)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)
- [License](#license)

## Overview

ecommerce_ONEDAO is a modern e-commerce platform featuring user authentication with OTP verification, product management, and more. The application follows a RESTful architecture and incorporates best practices for security and performance.

## Features

- User authentication with JWT
- Email verification with OTP
- Product management (CRUD operations)
- Role-based access control (admin/user)
- Pagination, sorting, and filtering
- Health check endpoint

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/ecommerce_ONEDAO.git
cd ecommerce_ONEDAO
```

2. Install backend dependencies:

```bash
npm install
```

3. Install frontend dependencies:

```bash
cd onedao
npm install
```

4. Configure your environment variables (see [Environment Variables](#environment-variables))

## Usage

### Backend

To start the backend server in development mode:

```bash
npm run dev
```

The server will be running at http://localhost:3000 by default.

### Frontend

To start the frontend development server:

```bash
cd onedao
npm run dev
```

The frontend will be available at http://localhost:5173 (or the port specified by your React configuration).

## API Documentation

### Authentication Endpoints

#### Register User
- **URL**: `/api/v1/auth/register`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "phone": "1234567890"
  }
  ```

#### Verify OTP
- **URL**: `/api/v1/auth/verify-otp`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "userId": 1,
    "otp": "123456"
  }
  ```

#### Login
- **URL**: `/api/v1/auth/login`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```

#### Resend OTP
- **URL**: `/api/v1/auth/resend-otp`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "userId": 1
  }
  ```

### Product Endpoints

#### Get All Products
- **URL**: `/api/v1/products`
- **Method**: `GET`
- **Headers**: `Authorization: Bearer <token>`
- **Query Parameters**:
  - `page`: Page number (default: 1)
  - `limit`: Items per page (default: 10)
  - `sortBy`: Field to sort by (default: created_at)
  - `sortOrder`: Sort order (ASC/DESC, default: DESC)

#### Create Product
- **URL**: `/api/v1/products`
- **Method**: `POST`
- **Headers**: `Authorization: Bearer <token>`
- **Body**:
  ```json
  {
    "name": "Premium Coffee",
    "description": "Arabica coffee beans",
    "price": 12.99
  }
  ```

#### Get Single Product
- **URL**: `/api/v1/products/:id`
- **Method**: `GET`
- **Headers**: `Authorization: Bearer <token>`

#### Update Product
- **URL**: `/api/v1/products/:id`
- **Method**: `PUT`
- **Headers**: `Authorization: Bearer <token>`
- **Body**:
  ```json
  {
    "name": "Premium Coffee Updated",
    "description": "Arabica coffee beans from Ethiopia",
    "price": 14.99
  }
  ```

#### Delete Product
- **URL**: `/api/v1/products/:id`
- **Method**: `DELETE`
- **Headers**: `Authorization: Bearer <token>`

### Health Check

#### Health Check
- **URL**: `/health`
- **Method**: `GET`

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Server
PORT=3000
NODE_ENV=development

# Database
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=onedao_ecommerce
DB_PORT=5432

# JWT
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=24h

# Email (for OTP delivery)
EMAIL_SERVICE=smtp
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=your_email@example.com
EMAIL_PASSWORD=your_email_password
EMAIL_FROM=noreply@onedao.com
```

## Tech Stack

- **Backend**:
  - Node.js
  - Express
  - PostgreSQL
  - Sequelize ORM
  - JSON Web Tokens (JWT)
  - Nodemailer

- **Frontend**:
  - React.js
  - React Router
  - Axios
  - React Context API

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
