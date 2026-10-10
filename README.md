# Pixel Shop (ProShop)

A full-stack eCommerce web application built with the MERN stack (MongoDB, Express, React, Node.js) and Redux Toolkit.

---

## 🌟 Features

- **Product Catalog**: Full product browsing, keyword search, pagination, top rated carousel, and customer ratings/reviews.
- **Cart & Checkout**: Interactive shopping cart, shipping address management, and order summary.
- **Dual Data Mode (Local Mock & MongoDB)**:
  - **Local Mode (Default Fallback)**: Runs out of the box using local mock data from `backend/data/products.js` and `backend/data/users.js`. No database setup required to preview and test the store!
  - **MongoDB Mode**: Automatically connects and switches to MongoDB when a valid MongoDB Atlas or local connection is detected.
- **PayPal & Test Checkout**:
  - Sandbox/Live PayPal integration.
  - **Test Pay Order button**: Easily test and complete orders even if PayPal credentials are not configured.
- **User Authentication**: Secure JWT stored in HTTP-only cookies with bcrypt password hashing.
- **Admin Dashboard**:
  - Product management (create, update, delete, upload images).
  - User management (view users, edit permissions, delete users).
  - Order management (view all orders, mark as delivered).

---

## 🚀 Quick Start

### 1. Install Dependencies

Install root (backend) and frontend dependencies:

```bash
npm install
npm install --prefix frontend
```

### 2. Environment Configuration (`.env`)

Create a `.env` file in the root directory (or use `example.env` as reference):

```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/pixel-shop?retryWrites=true&w=majority
JWT_SECRET=your_secret_key_here
PAYPAL_CLIENT_ID=
```

> **Note on PayPal**: If `PAYPAL_CLIENT_ID` is left empty, the application defaults to sandbox mode and displays the **Test Pay Order** button on order details pages so you can simulate completed payments without needing PayPal credentials.

### 3. Run the Development Server

Start both the backend server (port 5000) and frontend client (port 3000) concurrently:

```bash
npm run dev
```

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:5000](http://localhost:5000)

---

## 💾 Local Data Mode vs. MongoDB Atlas

### Running with Local Data (Offline / Without MongoDB)
If your MongoDB connection is not set up or times out, the server **gracefully falls back to Local Data Mode**:
- Products are served directly from `backend/data/products.js`.
- Default login credentials for local testing:
  - **Admin Account**: `admin@email.com` / `123456`
  - **Customer Account**: `john@email.com` / `123456`
  - **Customer Account**: `jane@email.com` / `123456`

### Connecting to MongoDB Atlas
If you want to use MongoDB Atlas:
1. Log into your [MongoDB Atlas Dashboard](https://cloud.mongodb.com/).
2. Navigate to **Security > Network Access**.
3. Add your current public IP or add `0.0.0.0/0` (allow from anywhere) to prevent TLS/SSL alert errors (`SSL alert number 80`).
4. Set your `MONGO_URI` in `.env`.
5. *(Optional)* Seed initial data into the database:
   ```bash
   npm run data:import
   ```
   To wipe the database:
   ```bash
   npm run data:destroy
   ```

---

## 🛠️ Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Runs backend (nodemon) and frontend concurrently |
| `npm run server` | Runs the Express backend server with nodemon |
| `npm run client` | Runs the React frontend client |
| `npm run data:import` | Seeds local users and products into MongoDB |
| `npm run data:destroy` | Clears all data from MongoDB |
| `npm run build --prefix frontend` | Compiles production-ready frontend build |

---

## 📦 Tech Stack

- **Frontend**: React 19, Redux Toolkit, RTK Query, React Router v7, React Bootstrap, React Icons, React Toastify.
- **Backend**: Node.js, Express, Mongoose, JWT (JSON Web Tokens), Cookie-Parser, Multer, Bcryptjs.
