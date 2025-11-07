# Mock E-Com Cart (MERN) — Vibe Commerce screening

## Overview
A simple MERN stack shopping cart app that supports product listing, cart management, and a mock checkout (receipt). Useful for screening/testing full-stack skills.

## Repo layout
- /backend — Express + Mongoose API
- /frontend — React + Vite + Tailwind frontend

## Requirements
- Node >= 18
- MongoDB (local or Atlas)

## Setup — Backend
1. cd backend
2. copy `.env.example` to `.env` and set `MONGO_URI` if using Atlas.
3. `npm install`
4. `npm run seed` — inserts mock products
5. `npm run dev` — starts backend on port 5000 (by default)

APIs:
- `GET /api/products`
- `GET /api/cart`
- `POST /api/cart` { productId, qty }
- `PATCH /api/cart/:id` { qty }
- `DELETE /api/cart/:id`
- `POST /api/checkout` { name, email }

Note: For demo purposes requests must include header `x-user-id: demo-user` (frontend sets this automatically).

## Setup — Frontend
1. cd frontend
2. `npm install`
3. create `.env` with `VITE_API_URL=http://localhost:5000/api` (or your backend URL)
4. `npm run dev` — open displayed URL (default: http://localhost:5173)

## Quick curl tests
- List products:
  `curl http://localhost:5000/api/products`

- Add to cart:
  `curl -X POST http://localhost:5000/api/cart -H "Content-Type: application/json" -H "x-user-id: demo-user" -d '{"productId":"<PRODUCT_ID>","qty":1}'`

- Get cart:
  `curl http://localhost:5000/api/cart -H "x-user-id: demo-user"`

- Checkout:
  `curl -X POST http://localhost:5000/api/checkout -H "Content-Type: application/json" -H "x-user-id: demo-user" -d '{"name":"Test","email":"a@b.com"}'`


## Notes & Bonus
- Cart is persisted in MongoDB per `x-user-id`.
- Error handling present for missing payloads.
- Can be extended: authentication, Stripe payments, more validations, tests.
