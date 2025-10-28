// Vercel serverless function for Paystack initialization
const axios = require('axios');

module.exports = async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

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
    if (amount < 100) {
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
      callback_url: `${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'}/payment/callback`
    };

    // Make request to Paystack
    const response = await axios.post(
      'https://api.paystack.co/transaction/initialize',
      paystackData,
      {
        headers: {
          'Authorization': `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
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
}
