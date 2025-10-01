import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import PaystackButton from '@/components/PaystackButton';

const Cart = () => {
  const { state, updateQuantity, removeItem, getTotalPrice } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [showDelivery, setShowDelivery] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [deliveryInfo, setDeliveryInfo] = useState({
    address: '',
    city: '',
    region: '',
    postalCode: '',
    deliveryPhone: '',
    deliveryInstructions: '',
  });

  const handleProceedToCheckout = () => {
    setShowCheckout(true);
  };

  const handleProceedToDelivery = () => {
    setShowDelivery(true);
  };

  const handleBackToCustomer = () => {
    setShowDelivery(false);
  };

  const isCustomerFormValid = customerInfo.email && customerInfo.firstName && customerInfo.phone;
  const isDeliveryFormValid = deliveryInfo.address && deliveryInfo.city && deliveryInfo.region && deliveryInfo.deliveryPhone;

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
                <Card key={`${item.id}-${item.size || 'default'}-${item.color || 'default'}`} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-6">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
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
                        {item.color && (
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-muted-foreground text-sm">Color:</span>
                            <div 
                              className={`w-4 h-4 rounded-full border ${
                                item.color === 'white' ? 'bg-white border-gray-300' : 'bg-black border-gray-600'
                              }`}
                            />
                            <span className="text-muted-foreground text-sm capitalize">{item.color}</span>
                          </div>
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
                          onClick={() => updateQuantity(item.id, item.quantity - 1, item.size, item.color)}
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
                          onClick={() => updateQuantity(item.id, item.quantity + 1, item.size, item.color)}
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

          {/* Order Summary & Checkout */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h2 className="font-heading text-2xl font-semibold mb-6 text-foreground">
                  {showDelivery ? 'Delivery Information' : showCheckout ? 'Customer Information' : 'Order Summary'}
                </h2>
                
                {!showCheckout && !showDelivery ? (
                  <>
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
                      className="w-full bg-black text-white hover:bg-black/90 font-heading font-semibold mb-4"
                      onClick={handleProceedToCheckout}
                    >
                      PROCEED TO CHECKOUT
                    </Button>

                    <Link to="/shop">
                      <Button variant="outline" size="lg" className="w-full">
                        CONTINUE SHOPPING
                      </Button>
                    </Link>

                    <div className="mt-6 text-center text-sm text-muted-foreground">
                      <p>Free shipping on all orders</p>
                      <p>Secure checkout with Paystack</p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Customer Information Form */}
                    <div className="space-y-4 mb-6">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          placeholder="Enter your first name"
                          value={customerInfo.firstName}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, firstName: e.target.value })}
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Enter your last name"
                          value={customerInfo.lastName}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, lastName: e.target.value })}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={customerInfo.email}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="0244123456"
                          value={customerInfo.phone}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                          required
                        />
                      </div>

                      <hr className="border-border my-4" />
                      
                      <div className="flex justify-between text-lg">
                        <span className="font-semibold">Total to Pay</span>
                        <span className="font-bold text-foreground">₵{getTotalPrice().toFixed(2)}</span>
                      </div>
                    </div>

                    {/* Proceed to Delivery Button */}
                    <Button
                      size="lg"
                      className="w-full bg-black text-white hover:bg-black/90 font-heading font-semibold"
                      onClick={handleProceedToDelivery}
                      disabled={!isCustomerFormValid}
                    >
                      PROCEED TO DELIVERY
                    </Button>

                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full mt-3"
                      onClick={() => setShowCheckout(false)}
                    >
                      BACK TO CART
                    </Button>

                    <div className="mt-6 text-center text-sm text-muted-foreground">
                      <p className="mb-1">🔒 Secure payment powered by Paystack</p>
                      <p>Accepted: Mobile Money, Cards, Bank Transfer</p>
                    </div>
                  </>
                ) : showDelivery ? (
                  <>
                    {/* Delivery Information Form */}
                    <div className="space-y-4 mb-6">
                      <div>
                        <Label htmlFor="address">Delivery Address *</Label>
                        <Input
                          id="address"
                          placeholder="Enter your full address"
                          value={deliveryInfo.address}
                          onChange={(e) => setDeliveryInfo({ ...deliveryInfo, address: e.target.value })}
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            placeholder="e.g., Accra"
                            value={deliveryInfo.city}
                            onChange={(e) => setDeliveryInfo({ ...deliveryInfo, city: e.target.value })}
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="region">Region *</Label>
                          <Input
                            id="region"
                            placeholder="e.g., Greater Accra"
                            value={deliveryInfo.region}
                            onChange={(e) => setDeliveryInfo({ ...deliveryInfo, region: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="postalCode">Postal Code</Label>
                          <Input
                            id="postalCode"
                            placeholder="e.g., GA-123-4567"
                            value={deliveryInfo.postalCode}
                            onChange={(e) => setDeliveryInfo({ ...deliveryInfo, postalCode: e.target.value })}
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="deliveryPhone">Delivery Phone *</Label>
                          <Input
                            id="deliveryPhone"
                            type="tel"
                            placeholder="0249295595"
                            value={deliveryInfo.deliveryPhone}
                            onChange={(e) => setDeliveryInfo({ ...deliveryInfo, deliveryPhone: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="deliveryInstructions">Delivery Instructions</Label>
                        <Input
                          id="deliveryInstructions"
                          placeholder="Any special instructions for delivery..."
                          value={deliveryInfo.deliveryInstructions}
                          onChange={(e) => setDeliveryInfo({ ...deliveryInfo, deliveryInstructions: e.target.value })}
                        />
                      </div>

                      <hr className="border-border my-4" />
                      
                      <div className="flex justify-between text-lg">
                        <span className="font-semibold">Total to Pay</span>
                        <span className="font-bold text-foreground">₵{getTotalPrice().toFixed(2)}</span>
                      </div>
                    </div>

                    {/* Paystack Payment Button */}
                    <PaystackButton
                      email={customerInfo.email}
                      phone={deliveryInfo.deliveryPhone}
                      firstName={customerInfo.firstName}
                      lastName={customerInfo.lastName}
                      deliveryInfo={deliveryInfo}
                    />

                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full mt-3"
                      onClick={handleBackToCustomer}
                    >
                      BACK TO CUSTOMER INFO
                    </Button>

                    <div className="mt-6 text-center text-sm text-muted-foreground">
                      <p className="mb-1">🔒 Secure payment powered by Paystack</p>
                      <p>Accepted: Mobile Money, Cards, Bank Transfer</p>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;