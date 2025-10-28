// Paystack service - using direct integration for now
const PAYSTACK_PUBLIC_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

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
    this.baseURL = '';
  }

  // Get public key directly from environment
  async getPublicKey(): Promise<string> {
    if (!PAYSTACK_PUBLIC_KEY) {
      throw new Error('Paystack public key not configured');
    }
    return PAYSTACK_PUBLIC_KEY;
  }

  // Initialize payment - simplified for direct integration
  async initializePayment(paymentData: InitializePaymentData): Promise<PaymentResponse> {
    // For now, return a mock response since we're using direct Paystack integration
    return {
      success: true,
      data: {
        authorization_url: '',
        access_code: '',
        reference: paymentData.reference
      }
    };
  }

  // Verify payment - simplified for direct integration
  async verifyPayment(reference: string): Promise<VerifyPaymentResponse> {
    // For now, return a mock success response
    return {
      success: true,
      data: {
        id: 1,
        domain: 'test',
        status: 'success',
        reference: reference,
        amount: 0,
        message: 'Payment successful',
        gateway_response: 'Successful',
        paid_at: new Date().toISOString(),
        created_at: new Date().toISOString(),
        channel: 'card',
        currency: 'GHS',
        ip_address: '127.0.0.1',
        metadata: {},
        log: null,
        fees: 0,
        fees_split: null,
        authorization: null,
        customer: null,
        plan: null,
        split: null,
        order_id: null,
        paidAt: new Date().toISOString(),
        createdAt: new Date().toISOString(),
        requested_amount: 0,
        pos_transaction_data: null,
        source: null,
        fees_breakdown: null
      }
    };
  }

  // Get transaction details - simplified
  async getTransactionDetails(reference: string): Promise<VerifyPaymentResponse> {
    return this.verifyPayment(reference);
  }

  // Health check - always return true for direct integration
  async healthCheck(): Promise<boolean> {
    return true;
  }
}

export const paystackService = new PaystackService();
export default paystackService;
