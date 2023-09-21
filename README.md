# Fullstack Project

This repository contains a fullstack application with a React frontend and a Node.js backend using Sequelize.

## Prerequisites

1. Node.js and npm installed.
2. MySQL (or relevant SQL database) instance running.
3. Git for cloning the repository.

## Project Structure

The project structure of the backend is as follows:

- `src`: This folder contains the actual source code of the project, excluding tests. You may consider creating a separate `tests` folder for your tests.

Let's take a closer look inside the `src` folder:

- `config`: This folder is used for configuring and setting up various libraries or modules. For example, you can set up `dotenv` to use environment variables in a cleaner way. The configuration for logging libraries or other modules can also be done here.

- `routes`: In this folder, you register routes along with their corresponding middleware and controllers.

- `middlewares`: Middlewares intercept incoming requests and can be used for tasks such as request validation, authentication, etc.

- `migrations`: The migrations folder is responsible for managing database schema changes over time. It contains files that define the changes to be applied to the database schema. Migrations help in keeping the database structure in sync with the application code.

- `models`: The models folder contains the database models or schemas. These models define the structure of the data stored in the database and provide an interface for interacting with the data. They typically represent tables or collections in the database.

- `seeders`: The seeders folder is used for seeding the database with initial or test data. Seeders provide a way to populate the database with predefined data, making it easier to set up a development or testing environment.

- `controllers`: Controllers act as the last layer of middleware. They receive incoming requests and data, pass them to the business layer for executing the logic, and structure the API response before sending it back.

- `repositories`: This folder contains the logic for interacting with the database using raw queries or ORM queries. It is responsible for handling database operations.

- `services`: Services contain the business logic of your application and interact with repositories to fetch or modify data from the database.

- `utils`: This folder contains helper methods, error classes, and other utility functions that can be used across the project.

## Getting Started

### 1. Clone the Repository:

```bash
git clone [your-repo-url]
```

### 2. Install Dependencies:

Navigate to both the frontend and backend directories to install their respective dependencies:

```bash
cd frontend
npm install
cd ../backend
npm install
```

Or using the root-level script:

```bash
npm run install:all
```

### 3. Set up the Database:

Ensure you have a running MySQL instance. Create a new database for this project.

### 4. Configure Sequelize:

Copy the `config.json.example` (provided below) to `config.json` and fill with your specific database details:

```bash
cd backend
cp config/config.json.example config/config.json
```

Edit `config/config.json` with the appropriate database details.

### 5. Run Sequelize Migrations and Seeds (if any):

Once the database and config are set up, run any migrations and seed data:

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

### 6. Configure Environment Variables:

Copy the provided `.env.example` file and fill it with the necessary values:

```bash
cd backend
cp .env.example .env
```

### Important: After copying the content and setting up config.json and .env, it's recommended to delete the example files
```bash
rm config/config.json.example
rm .env.example
```

### 7. Start the Services:

To start both the frontend and backend simultaneously:

```bash
npm start
```

For individual services:

```bash
# For frontend:
cd frontend
npm start

# For backend:
cd backend
npm run dev
```

## License

This project is licensed under the ISC License.
