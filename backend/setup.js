#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Setting up Exclusive Backend...\n');

// Check if .env file exists
const envPath = path.join(__dirname, '.env');
const envExamplePath = path.join(__dirname, 'env.example');

if (!fs.existsSync(envPath)) {
  if (fs.existsSync(envExamplePath)) {
    // Copy example to .env
    fs.copyFileSync(envExamplePath, envPath);
    console.log('✅ Created .env file from example');
    console.log('📝 Please edit .env file with your Paystack credentials\n');
  } else {
    // Create basic .env file
    const envContent = `# Paystack Configuration
PAYSTACK_SECRET_KEY=sk_live_your_secret_key_here
PAYSTACK_PUBLIC_KEY=pk_live_your_public_key_here

# Server Configuration
PORT=3001
NODE_ENV=development

# CORS Configuration
FRONTEND_URL=http://localhost:5173
`;
    fs.writeFileSync(envPath, envContent);
    console.log('✅ Created .env file');
    console.log('📝 Please edit .env file with your Paystack credentials\n');
  }
} else {
  console.log('✅ .env file already exists\n');
}

console.log('📋 Next steps:');
console.log('1. Edit .env file with your Paystack credentials');
console.log('2. Run: npm install');
console.log('3. Run: npm run dev');
console.log('\n🔑 Get your Paystack keys from: https://dashboard.paystack.com/#/settings/developers');
console.log('📖 For more details, see PAYSTACK_SETUP.md in the root directory');
