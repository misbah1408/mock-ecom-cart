# 🛍️ Mock E-Commerce Cart — Vibe Commerce Internship Assignment

This is a **Full Stack Shopping Cart Application** built using the **MERN Stack (MongoDB, Express, React, Node.js)** for the **Vibe Commerce Internship Screening Task**.

It demonstrates core e-commerce functionalities like product listing, cart management, and mock checkout — fully integrated through REST APIs.

---

## 🚀 Live Demo / Video

🎥 **Demo Video:** [Watch Demo Video](https://drive.google.com/file/d/1gbge42EKXe8zXLscaeOphX91c5M2t64S/view?usp=sharing)

📂 **GitHub Repository:** [misbah1408/mock-ecom-cart](https://github.com/misbah1408/mock-ecom-cart)

---

## 🧠 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React + Vite + Tailwind CSS |
| **Backend** | Node.js + Express |
| **Database** | MongoDB (Local / Atlas) |
| **API Communication** | RESTful APIs |
| **Styling** | Tailwind CSS (Responsive) |

---

## ⚙️ Features

✅ Product grid with “Add to Cart” functionality  
✅ Real-time cart with quantity updates & item removal  
✅ Dynamic total price calculation  
✅ Mock checkout (Name + Email → Receipt Modal)  
✅ Fully responsive design (mobile & desktop)  
✅ MongoDB persistence for products & cart  
✅ Clean REST API architecture between frontend and backend  

---

## 🧩 Folder Structure


mock-ecom-cart/
│
├── backend/
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── seed/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── vite.config.mjs
│   ├── tailwind.config.cjs
│   └── postcss.config.cjs
│
└── README.md

````

---

## 🛠️ Setup Instructions

### 🧮 Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
   npm install
````

2. Create a `.env` file:

   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/mock-ecom
   ```
3. Seed mock products:

   ```bash
   npm run seed
   ```
4. Start the server:

   ```bash
   npm run dev
   ```

✅ Backend runs on: **[http://localhost:5000](http://localhost:5000)**

---

### 🖥️ Frontend Setup

1. Navigate to the frontend folder:

   ```bash
   cd frontend
   npm install
   ```
2. Create a `.env` file:

   ```
   VITE_API_URL=http://localhost:5000/api
   ```
3. Start the React app:

   ```bash
   npm run dev
   ```

✅ Frontend runs on: **[http://localhost:5173](http://localhost:5173)**

---

## 📡 API Routes

| Method     | Endpoint        | Description                              |
| ---------- | --------------- | ---------------------------------------- |
| **GET**    | `/api/products` | Fetch all products                       |
| **POST**   | `/api/cart`     | Add product to cart `{ productId, qty }` |
| **GET**    | `/api/cart`     | Fetch current cart and total             |
| **PATCH**  | `/api/cart/:id` | Update product quantity                  |
| **DELETE** | `/api/cart/:id` | Remove item from cart                    |
| **POST**   | `/api/checkout` | Mock checkout → returns receipt          |

---

## 🖼️ Screenshots

### 🏠 Home Page (Product Grid)

![Product Grid](./screenshots/home.png)

### 🛒 Cart Section

![Cart Section](./screenshots/cart.png)

### 💳 Checkout Modal (Mock Receipt)

![Checkout Modal](./screenshots/checkout.png)

---

## 🧾 Demo Flow

1. Open the app — view product list fetched from backend.
2. Click **“Add to Cart”** — items appear in cart instantly.
3. Update item quantities or remove items as needed.
4. Enter **Name** and **Email**, then click **Checkout**.
5. A **receipt modal** appears showing:

   * Ordered items
   * Total amount
   * Timestamp

---

## 🔐 Bonus Features (Optional Enhancements)

* ✅ Cart persistence per mock user (`x-user-id`)
* ✅ Backend error handling with response messages
* ⚙️ Optional integration with FakeStore API
* ⚙️ Ready for real payment gateway (Stripe / Razorpay)

---

## 👨‍💻 Developer

**Mohammed Misbah**
📧 [misbahmohammed00008@gmail.com](mailto:misbahmohammed00008@gmail.com)
🌐 [https://github.com/misbah1408](https://github.com/misbah1408)
💼 Aspiring Full Stack Developer | MERN | Python | Java