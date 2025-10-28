// Vercel serverless function to get public key
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

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const publicKey = process.env.PAYSTACK_PUBLIC_KEY;
    
    if (!publicKey) {
      return res.status(500).json({
        success: false,
        message: 'Public key not configured'
      });
    }

    res.json({ 
      publicKey: publicKey
    });

  } catch (error) {
    console.error('Error getting public key:', error);
    
    res.status(500).json({
      success: false,
      message: 'Failed to get public key',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}
