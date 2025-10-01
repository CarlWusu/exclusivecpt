import { usePaystackPayment } from 'react-paystack';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

interface PaystackButtonProps {
  email: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
}

const PaystackButton = ({ email, phone, firstName, lastName }: PaystackButtonProps) => {
  const { getTotalPrice, clearCart, state } = useCart();
  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

  // Convert total price to pesewas (Paystack uses smallest currency unit)
  const amount = getTotalPrice() * 100;

  const config = {
    reference: `EXCL-${new Date().getTime()}`,
    email,
    amount,
    publicKey,
    currency: 'GHS', // Ghana Cedis
    metadata: {
      custom_fields: [
        {
          display_name: 'Customer Name',
          variable_name: 'customer_name',
          value: `${firstName || ''} ${lastName || ''}`.trim() || 'Customer',
        },
        {
          display_name: 'Phone Number',
          variable_name: 'phone_number',
          value: phone || 'Not provided',
        },
        {
          display_name: 'Cart Items',
          variable_name: 'cart_items',
          value: JSON.stringify(state.items.map(item => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            color: item.color,
          }))),
        },
      ],
    },
  };

  const onSuccess = (reference: any) => {
    toast.success('Payment Successful!', {
      description: `Thank you for your purchase. Reference: ${reference.reference}`,
    });
    clearCart();
    console.log('Payment successful:', reference);
    // Here you can send the reference to your backend to verify the payment
  };

  const onClose = () => {
    toast.info('Payment Cancelled', {
      description: 'You cancelled the payment. Your cart is still saved.',
    });
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <Button
      onClick={() => {
        initializePayment({ onSuccess, onClose });
      }}
      size="lg"
      className="w-full bg-black text-white hover:bg-black/90 font-heading font-semibold"
      disabled={!email || amount <= 0}
    >
      Pay ₵{getTotalPrice().toFixed(2)} with Paystack
    </Button>
  );
};

export default PaystackButton;

