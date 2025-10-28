// Paystack service for communicating with backend API
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

export interface InitializePaymentData {
  email: string;
  amount: number; // in pesewas
  reference: string;
  currency?: string;
  metadata?: Record<string, any>;
}

export interface PaymentResponse {
  success: boolean;
  data?: {
    authorization_url: string;
    access_code: string;
    reference: string;
  };
  message?: string;
}

export interface VerifyPaymentResponse {
  success: boolean;
  data?: {
    id: number;
    domain: string;
    status: string;
    reference: string;
    amount: number;
    message: string;
    gateway_response: string;
    paid_at: string;
    created_at: string;
    channel: string;
    currency: string;
    ip_address: string;
    metadata: Record<string, any>;
    log: any;
    fees: number;
    fees_split: any;
    authorization: any;
    customer: any;
    plan: any;
    split: any;
    order_id: any;
    paidAt: string;
    createdAt: string;
    requested_amount: number;
    pos_transaction_data: any;
    source: any;
    fees_breakdown: any;
  };
  message?: string;
}

class PaystackService {
  private baseURL: string;

  constructor() {
    this.baseURL = API_BASE_URL;
  }

  // Get public key from backend
  async getPublicKey(): Promise<string> {
    try {
      const response = await fetch(`${this.baseURL}/paystack/public-key`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to get public key');
      }
      
      return data.publicKey;
    } catch (error) {
      console.error('Error getting public key:', error);
      throw error;
    }
  }

  // Initialize payment with backend
  async initializePayment(paymentData: InitializePaymentData): Promise<PaymentResponse> {
    try {
      const response = await fetch(`${this.baseURL}/paystack/initialize`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to initialize payment');
      }

      return data;
    } catch (error) {
      console.error('Error initializing payment:', error);
      throw error;
    }
  }

  // Verify payment with backend
  async verifyPayment(reference: string): Promise<VerifyPaymentResponse> {
    try {
      const response = await fetch(`${this.baseURL}/paystack/verify?reference=${reference}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to verify payment');
      }

      return data;
    } catch (error) {
      console.error('Error verifying payment:', error);
      throw error;
    }
  }

  // Get transaction details
  async getTransactionDetails(reference: string): Promise<VerifyPaymentResponse> {
    try {
      const response = await fetch(`${this.baseURL}/paystack/transaction?reference=${reference}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to get transaction details');
      }

      return data;
    } catch (error) {
      console.error('Error getting transaction details:', error);
      throw error;
    }
  }

  // Check if backend is healthy
  async healthCheck(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseURL}/health`);
      const data = await response.json();
      return response.ok && data.status === 'OK';
    } catch (error) {
      console.error('Backend health check failed:', error);
      return false;
    }
  }
}

export const paystackService = new PaystackService();
export default paystackService;
