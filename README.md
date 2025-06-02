# 🛍️ Product API – Express.js Project

A modular RESTful API built with **Express.js**, designed for managing a simple in-memory product store. It features organized route handling, middleware for logging and authentication, centralized error management, and environment variable support.

---

## 📁 Project Structure

```
project-root/
├── server.js                     # Main server entry point
├── routes/
│   └── products.js              # Routes for product-related endpoints
├── middleware/
│   ├── logger.js                # Logs requests with timestamps
│   ├── auth.js                  # API key authentication middleware
│   └── errorHandler.js          # Centralized error handling middleware
├── data/
│   └── products.js              # In-memory product data source
├── utils/
│   └── errors.js                # Utility functions for custom error creation
├── .env.example                 # Sample environment variables file
├── package.json                 # Project metadata and dependencies
└── README.md                    # You’re here!
```

---

## 🔧 Setup Instructions

1. **Clone the project and install dependencies:**

   ```bash
   npm install
   ```

2. **Create a .env file based on .env.example:**

   ```env
   PORT=3000
   API_KEY=my-secret-key
   ```

3. **Run the server:**

   ```bash
   node server.js
   ```

4. **Access the API:**

   ```bash
   http://localhost:3000/api/products
   ```

---

## 🔐 Authentication

All requests to the `/api/products` endpoints require an API key header:

```
x-api-key: your-api-key-here
```

Replace `your-api-key-here` with the value in your `.env`.

---

## 📬 API Endpoints

| Method | Endpoint              | Description              |
|--------|-----------------------|--------------------------|
| GET    | /api/products         | Retrieve all products    |
| GET    | /api/products/:id     | Retrieve a product by ID |
| POST   | /api/products         | Add a new product        |
| PUT    | /api/products/:id     | Update a product by ID   |
| DELETE | /api/products/:id     | Delete a product by ID   |

---

## 🧪 Sample Product Format

```json
{
  "name": "Bluetooth Speaker",
  "description": "Portable speaker with deep bass",
  "price": 99,
  "category": "electronics",
  "inStock": true
}
```

---

## 📌 Notes

- No database is used — the API uses a temporary in-memory data store from `data/products.js`.
- Great foundation for future integration with MongoDB, Mongoose, and user auth.

---

## 👨‍💻 Author

**Wayne Chibeu**  
MERN Stack Dev in Progress @ PLP Africa
