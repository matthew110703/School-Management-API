
# School Management API

Welcome to the School Management API, a RESTful API service built with Express.js to manage the school database.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Features](#features)

## Introduction

The School Management API is designed to handle various schools across Bangalore. This API allows to list as well as to add new Schools to the database.

## Installation

To get started with the School Management API, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/matthew110703/School-Management-API.git
    ```

2. Navigate to the project directory:
    ```bash
    cd School-Management-API
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Set up your environment variables by creating a `.env` file in the root directory and adding the necessary configuration:
    ```env
    NODE_ENV=development
    PORT=3000
    MYSQL_URI=your-database-connection-string
    ```

5. Start the server:
    ```bash
    npm start
    ```

## Usage

Once the server is running, you can access the API at `http://localhost:3000`.

### Example Request

To test the API, you can use tools like Postman or curl. Here's an example curl request to get started:

```bash
curl http://localhost:3000/api/your-endpoint
```

## API Endpoints
#### Postman Collection (JSON file) - [Click Here to download](https://drive.google.com/file/d/1pWcmFyWO0gZQncn94DP2f3re9DTz3B52/view?usp=sharing)
The following endpoints are available in the School Management API:

- `GET /`: Welcome message.
- `POST /api/addSchool`: Create a new school.
- `POST /api/addBulkSchools`: Create multiple schools.
- `GET /api/listSchools`: Get the list of schools by the user's latitude and longitude.

Additional routes for managing students, teachers, classes, etc., can be found in the `routes` directory.

## Features

- **Express.js**: A fast, unopinionated, minimalist web framework for Node.js.
- **CORS**: Cross-Origin Resource Sharing enabled.
- **Logging**: HTTP request logger middleware using Morgan.
- **Error Handling**: Centralized error handling for the API.
- **Environment Configuration**: Support for environment variables using dotenv.
