import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import axios from 'axios';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Paystack configuration
const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;
const PAYSTACK_PUBLIC_KEY = process.env.PAYSTACK_PUBLIC_KEY;

if (!PAYSTACK_SECRET_KEY) {
  console.error('❌ PAYSTACK_SECRET_KEY is required in environment variables');
  process.exit(1);
}

if (!PAYSTACK_PUBLIC_KEY) {
  console.error('❌ PAYSTACK_PUBLIC_KEY is required in environment variables');
  process.exit(1);
}

// Paystack API base URL
const PAYSTACK_BASE_URL = 'https://api.paystack.co';

// Routes

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Exclusive Backend API is running',
    timestamp: new Date().toISOString()
  });
});

// Get public key (safe to expose to frontend)
app.get('/api/paystack/public-key', (req, res) => {
  res.json({ 
    publicKey: PAYSTACK_PUBLIC_KEY 
  });
});

// Initialize Paystack transaction
app.post('/api/paystack/initialize', async (req, res) => {
  try {
    const { 
      email, 
      amount, 
      reference, 
      currency = 'GHS',
      metadata = {} 
    } = req.body;

    // Validate required fields
    if (!email || !amount || !reference) {
      return res.status(400).json({
        success: false,
        message: 'Email, amount, and reference are required'
      });
    }

    // Validate amount (should be in pesewas)
    if (amount < 100) { // Minimum 1 GHS
      return res.status(400).json({
        success: false,
        message: 'Amount must be at least 1 GHS (100 pesewas)'
      });
    }

    // Prepare Paystack request
    const paystackData = {
      email,
      amount,
      reference,
      currency,
      metadata,
      callback_url: `${process.env.FRONTEND_URL}/payment/callback`
    };

    // Make request to Paystack
    const response = await axios.post(
      `${PAYSTACK_BASE_URL}/transaction/initialize`,
      paystackData,
      {
        headers: {
          'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (response.data.status) {
      res.json({
        success: true,
        data: response.data.data
      });
    } else {
      throw new Error(response.data.message || 'Failed to initialize transaction');
    }

  } catch (error) {
    console.error('Error initializing Paystack transaction:', error.response?.data || error.message);
    
    res.status(500).json({
      success: false,
      message: error.response?.data?.message || 'Failed to initialize payment',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Verify Paystack transaction
app.get('/api/paystack/verify/:reference', async (req, res) => {
  try {
    const { reference } = req.params;

    if (!reference) {
      return res.status(400).json({
        success: false,
        message: 'Transaction reference is required'
      });
    }

    // Verify transaction with Paystack
    const response = await axios.get(
      `${PAYSTACK_BASE_URL}/transaction/verify/${reference}`,
      {
        headers: {
          'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`
        }
      }
    );

    if (response.data.status) {
      res.json({
        success: true,
        data: response.data.data
      });
    } else {
      res.status(400).json({
        success: false,
        message: response.data.message || 'Transaction verification failed'
      });
    }

  } catch (error) {
    console.error('Error verifying Paystack transaction:', error.response?.data || error.message);
    
    res.status(500).json({
      success: false,
      message: error.response?.data?.message || 'Failed to verify payment',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Get transaction details
app.get('/api/paystack/transaction/:reference', async (req, res) => {
  try {
    const { reference } = req.params;

    if (!reference) {
      return res.status(400).json({
        success: false,
        message: 'Transaction reference is required'
      });
    }

    // Get transaction details from Paystack
    const response = await axios.get(
      `${PAYSTACK_BASE_URL}/transaction/${reference}`,
      {
        headers: {
          'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`
        }
      }
    );

    if (response.data.status) {
      res.json({
        success: true,
        data: response.data.data
      });
    } else {
      res.status(400).json({
        success: false,
        message: response.data.message || 'Failed to fetch transaction details'
      });
    }

  } catch (error) {
    console.error('Error fetching transaction details:', error.response?.data || error.message);
    
    res.status(500).json({
      success: false,
      message: error.response?.data?.message || 'Failed to fetch transaction details',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Exclusive Backend API running on port ${PORT}`);
  console.log(`📱 Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:5173'}`);
  console.log(`🔑 Paystack configured: ${PAYSTACK_SECRET_KEY ? '✅' : '❌'}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});

export default app;
