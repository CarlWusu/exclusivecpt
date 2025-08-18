import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { state, updateQuantity, removeItem, getTotalPrice } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    // Simulate checkout process
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsCheckingOut(false);
    // In a real app, this would integrate with payment processors
    alert('Checkout complete! Thank you for your purchase.');
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center bg-background">
        <div className="text-center max-w-md mx-auto px-4">
          <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
          <h1 className="font-heading text-3xl font-bold mb-4 text-foreground">
            Your Cart is Empty
          </h1>
          <p className="text-muted-foreground mb-8">
            Looks like you haven't added any items to your cart yet. Start shopping to fill it up!
          </p>
          <Link to="/shop">
            <Button 
              size="lg"
              className="bg-gold hover:bg-gold/90 text-gold-foreground font-heading font-semibold px-8"
            >
              START SHOPPING
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="font-heading text-4xl font-bold mb-2 text-foreground">
            Shopping Cart
          </h1>
          <p className="text-muted-foreground">
            {state.items.length} {state.items.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {state.items.map((item) => (
                <Card key={`${item.id}-${item.size || 'default'}`} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-6">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                          {item.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-2">
                          {item.category}
                        </p>
                        {item.size && (
                          <p className="text-muted-foreground text-sm mb-2">
                            Size: {item.size}
                          </p>
                        )}
                        <p className="font-semibold text-lg text-foreground">
                          ₵{item.price}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1, item.size)}
                          className="h-8 w-8"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="font-medium text-lg w-8 text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1, item.size)}
                          className="h-8 w-8"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Item Total & Remove */}
                      <div className="text-right">
                        <p className="font-semibold text-lg text-foreground mb-2">
                          ₵{(item.price * item.quantity).toFixed(2)}
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h2 className="font-heading text-2xl font-semibold mb-6 text-foreground">
                  Order Summary
                </h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">₵{getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="font-medium">₵0.00</span>
                  </div>
                  <hr className="border-border" />
                  <div className="flex justify-between text-lg">
                    <span className="font-semibold">Total</span>
                    <span className="font-bold text-foreground">₵{getTotalPrice().toFixed(2)}</span>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-gold hover:bg-gold/90 text-gold-foreground font-heading font-semibold mb-4"
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                >
                  {isCheckingOut ? 'Processing...' : 'PROCEED TO CHECKOUT'}
                </Button>

                <Link to="/shop">
                  <Button variant="outline" size="lg" className="w-full">
                    CONTINUE SHOPPING
                  </Button>
                </Link>

                <div className="mt-6 text-center text-sm text-muted-foreground">
                  <p>Free shipping on all orders</p>
                  <p>Secure checkout with 256-bit SSL</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;