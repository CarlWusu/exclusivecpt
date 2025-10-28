# Paystack Integration Setup

## Overview

This project now uses a secure backend API to handle Paystack payments. The secret key is stored on the backend and never exposed to the frontend.

## Backend Setup

1. **Install backend dependencies:**

   ```bash
   cd backend
   npm install
   ```

2. **Create environment file:**
   Create a `.env` file in the `backend` directory with your Paystack credentials:

   ```env
   # Paystack Configuration
   PAYSTACK_SECRET_KEY=sk_live_your_secret_key_here
   PAYSTACK_PUBLIC_KEY=pk_live_your_public_key_here

   # Server Configuration
   PORT=3001
   NODE_ENV=development

   # CORS Configuration
   FRONTEND_URL=http://localhost:5173
   ```

3. **Start the backend server:**

   ```bash
   npm run dev
   ```

## Frontend Setup

1. **Create environment file:**
   Create a `.env` file in the root directory:

   ```env
   # Frontend Environment Variables
   VITE_API_BASE_URL=http://localhost:3001
   ```

2. **Start the frontend:**

   ```bash
   npm run dev
   ```

## Security Features

- ✅ Secret key stored securely on backend
- ✅ Public key loaded dynamically from backend
- ✅ Payment verification through backend API
- ✅ CORS protection configured
- ✅ Error handling and validation
- ✅ Environment variable protection

## API Endpoints

- `GET /health` - Health check
- `GET /api/paystack/public-key` - Get public key
- `POST /api/paystack/initialize` - Initialize payment
- `GET /api/paystack/verify/:reference` - Verify payment
- `GET /api/paystack/transaction/:reference` - Get transaction details

## Production Deployment

For production, update the environment variables:

- Set `NODE_ENV=production`
- Use your live Paystack keys (sk*live*... and pk*live*...)
- Update `FRONTEND_URL` to your production domain
- Update `VITE_API_BASE_URL` to your production backend URL

## Testing

1. Start both backend and frontend servers
2. Add items to cart
3. Proceed to checkout
4. Use Paystack test credentials for payment testing
