import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  CartItem, 
  FoodItem, 
  Coupon, 
  Order, 
  UserProfile, 
  SelectedOption, 
  Address, 
  PaymentMethod,
  OrderStatus
} from '../types';
import { MOCK_COUPONS, MOCK_FOOD_ITEMS, MOCK_ORDERS, MOCK_RESTAURANTS, MOCK_USER } from '../data/mockData';

interface ToastInfo {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface AppContextType {
  // Navigation & View
  currentView: string;
  setCurrentView: (view: string) => void;
  selectedRestaurantId: string | null;
  setSelectedRestaurantId: (id: string | null) => void;
  selectedOrderId: string | null;
  setSelectedOrderId: (id: string | null) => void;
  
  // Location & Search
  deliveryLocation: string;
  setDeliveryLocation: (location: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;

  // Cart
  cart: CartItem[];
  addToCart: (foodItem: FoodItem, quantity?: number, selectedOptions?: SelectedOption[], specialInstructions?: string) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, newQuantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  appliedCoupon: Coupon | null;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  
  // Cart Financials
  subtotal: number;
  discount: number;
  deliveryFee: number;
  taxes: number;
  finalTotal: number;

  // Wishlist
  wishlistIds: string[];
  toggleWishlist: (foodId: string) => void;
  isInWishlist: (foodId: string) => boolean;

  // Food Customization Modal
  customizingFood: FoodItem | null;
  openCustomizationModal: (foodItem: FoodItem) => void;
  closeCustomizationModal: () => void;

  // User & Auth
  user: UserProfile | null;
  isAuthOpen: boolean;
  setIsAuthOpen: (open: boolean) => void;
  loginUser: (email: string, name?: string) => void;
  logoutUser: () => void;
  addAddress: (address: Omit<Address, 'id'>) => void;

  // Orders
  orders: Order[];
  activeOrder: Order | null;
  placeOrder: (address: Address, paymentMethod: PaymentMethod) => Order;
  reorder: (orderId: string) => void;

  // Toast
  toasts: ToastInfo[];
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  removeToast: (id: string) => void;

  // Helper
  navigateToRestaurant: (restaurantId: string) => void;
  navigateToOrderTracking: (orderId: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const LOCAL_STORAGE_CART = 'food_area_cart_v1';
const LOCAL_STORAGE_WISHLIST = 'food_area_wishlist_v1';
const LOCAL_STORAGE_ORDERS = 'food_area_orders_v1';
const LOCAL_STORAGE_USER = 'food_area_user_v1';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navigation
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedRestaurantId, setSelectedRestaurantId] = useState<string | null>(null);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>('FA-893201');

  // Location & Search
  const [deliveryLocation, setDeliveryLocation] = useState<string>('Connaught Place, New Delhi');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Cart
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_CART);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);

  // Wishlist
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_WISHLIST);
      return saved ? JSON.parse(saved) : ['food-1', 'food-3'];
    } catch {
      return ['food-1', 'food-3'];
    }
  });

  // Food Customization Modal
  const [customizingFood, setCustomizingFood] = useState<FoodItem | null>(null);

  // User & Auth
  const [user, setUser] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_USER);
      return saved ? JSON.parse(saved) : MOCK_USER;
    } catch {
      return MOCK_USER;
    }
  });
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);

  // Orders
  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_ORDERS);
      return saved ? JSON.parse(saved) : MOCK_ORDERS;
    } catch {
      return MOCK_ORDERS;
    }
  });

  // Toast
  const [toasts, setToasts] = useState<ToastInfo[]>([]);

  // Persist State
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_CART, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_WISHLIST, JSON.stringify(wishlistIds));
  }, [wishlistIds]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_ORDERS, JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(user));
    } else {
      localStorage.removeItem(LOCAL_STORAGE_USER);
    }
  }, [user]);

  // Toast Notifications
  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 3500);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Cart Operations
  const addToCart = (
    foodItem: FoodItem, 
    quantity: number = 1, 
    selectedOptions: SelectedOption[] = [],
    specialInstructions: string = ''
  ) => {
    // Generate unique ID for cart item considering customization
    const optionsHash = selectedOptions.map(o => o.optionId).sort().join('-');
    const cartItemId = `${foodItem.id}_${optionsHash}`;

    const optionsExtraPrice = selectedOptions.reduce((acc, opt) => acc + opt.price, 0);
    const totalUnitPrice = foodItem.price + optionsExtraPrice;

    setCart(prevCart => {
      const existingIndex = prevCart.findIndex(item => item.cartItemId === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prevCart,
          {
            cartItemId,
            foodItem,
            quantity,
            selectedOptions,
            specialInstructions,
            totalUnitPrice
          }
        ];
      }
    });

    showToast(`Added ${foodItem.name} to cart!`, 'success');
  };

  const removeFromCart = (cartItemId: string) => {
    setCart(prev => prev.filter(item => item.cartItemId !== cartItemId));
    showToast('Item removed from cart', 'info');
  };

  const updateQuantity = (cartItemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart(prev => prev.map(item => {
      if (item.cartItemId === cartItemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const clearCart = () => {
    setCart([]);
    setAppliedCoupon(null);
  };

  // Calculations
  const subtotal = cart.reduce((acc, item) => acc + (item.totalUnitPrice * item.quantity), 0);
  
  let discount = 0;
  if (appliedCoupon && subtotal >= appliedCoupon.minOrderAmount) {
    const rawDiscount = (subtotal * appliedCoupon.discountPercentage) / 100;
    discount = Math.min(rawDiscount, appliedCoupon.maxDiscount);
  }

  const deliveryFee = subtotal === 0 ? 0 : subtotal > 499 ? 0 : 35;
  const taxes = Math.round((subtotal - discount) * 0.05); // 5% GST
  const finalTotal = Math.max(0, subtotal - discount + deliveryFee + taxes);

  const applyCoupon = (code: string) => {
    const found = MOCK_COUPONS.find(c => c.code.toUpperCase() === code.trim().toUpperCase());
    if (!found) {
      showToast('Invalid coupon code. Try FOOD30', 'error');
      return { success: false, message: 'Invalid coupon code' };
    }
    if (subtotal < found.minOrderAmount) {
      const msg = `Add items worth ₹${found.minOrderAmount - subtotal} more to apply ${found.code}`;
      showToast(msg, 'error');
      return { success: false, message: msg };
    }
    setAppliedCoupon(found);
    showToast(`Coupon ${found.code} applied successfully! Saved ₹${Math.min((subtotal * found.discountPercentage) / 100, found.maxDiscount)}`, 'success');
    return { success: true, message: 'Coupon applied successfully!' };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    showToast('Coupon removed', 'info');
  };

  // Wishlist Operations
  const toggleWishlist = (foodId: string) => {
    setWishlistIds(prev => {
      const exists = prev.includes(foodId);
      if (exists) {
        showToast('Removed from wishlist', 'info');
        return prev.filter(id => id !== foodId);
      } else {
        showToast('Added to wishlist ❤️', 'success');
        return [...prev, foodId];
      }
    });
  };

  const isInWishlist = (foodId: string) => wishlistIds.includes(foodId);

  // Customization Modal
  const openCustomizationModal = (foodItem: FoodItem) => {
    setCustomizingFood(foodItem);
  };

  const closeCustomizationModal = () => {
    setCustomizingFood(null);
  };

  // User Auth
  const loginUser = (email: string, name: string = 'Rahul Sharma') => {
    setUser({
      ...MOCK_USER,
      email,
      name,
    });
    setIsAuthOpen(false);
    showToast(`Welcome back, ${name}!`, 'success');
  };

  const logoutUser = () => {
    setUser(null);
    showToast('Logged out successfully', 'info');
  };

  const addAddress = (newAddr: Omit<Address, 'id'>) => {
    if (!user) return;
    const created: Address = {
      ...newAddr,
      id: `addr-${Date.now()}`
    };
    setUser({
      ...user,
      addresses: [...user.addresses, created]
    });
    showToast('New delivery address saved', 'success');
  };

  // Orders
  const placeOrder = (address: Address, paymentMethod: PaymentMethod): Order => {
    const restaurantId = cart[0]?.foodItem.restaurantId || 'rest-1';
    const restaurantName = cart[0]?.foodItem.restaurantName || 'Spice Garden';
    const foundRest = MOCK_RESTAURANTS.find(r => r.id === restaurantId);

    const newOrder: Order = {
      id: `FA-${Math.floor(100000 + Math.random() * 900000)}`,
      userId: user?.id || 'guest',
      items: [...cart],
      restaurantId,
      restaurantName,
      restaurantAddress: foundRest?.address || 'Connaught Place, Delhi',
      subtotal,
      discount,
      deliveryFee,
      taxes,
      total: finalTotal,
      couponApplied: appliedCoupon?.code,
      address,
      paymentMethod,
      paymentStatus: paymentMethod === 'cod' ? 'pending' : 'paid',
      status: 'confirmed',
      placedAt: new Date().toISOString(),
      estimatedDeliveryTime: '25-30 min',
      driverName: 'Vikram Singh',
      driverPhone: '+91 98765 12345',
      driverRating: 4.8,
      timeline: [
        { status: 'placed', label: 'Order Placed', description: 'We have received your order.', timestamp: 'Just now', completed: true, current: false },
        { status: 'confirmed', label: 'Order Confirmed', description: `${restaurantName} accepted your order.`, timestamp: 'Just now', completed: true, current: true },
        { status: 'preparing', label: 'Restaurant Preparing', description: 'Chef is cooking your fresh food.', timestamp: 'Est 5 min', completed: false, current: false },
        { status: 'picked_up', label: 'Order Picked Up', description: 'Delivery partner on the way to restaurant.', timestamp: 'Est 15 min', completed: false, current: false },
        { status: 'out_for_delivery', label: 'Out for Delivery', description: 'Driver is on the way to your door.', timestamp: 'Est 20 min', completed: false, current: false },
        { status: 'delivered', label: 'Delivered', description: 'Enjoy your delicious meal!', timestamp: 'Est 30 min', completed: false, current: false }
      ]
    };

    setOrders(prev => [newOrder, ...prev]);
    clearCart();
    setSelectedOrderId(newOrder.id);
    showToast('🎉 Order placed successfully!', 'success');
    return newOrder;
  };

  const reorder = (orderId: string) => {
    const foundOrder = orders.find(o => o.id === orderId);
    if (!foundOrder) return;

    foundOrder.items.forEach(item => {
      addToCart(item.foodItem, item.quantity, item.selectedOptions, item.specialInstructions);
    });

    setIsCartOpen(true);
    showToast('Items added back to cart!', 'success');
  };

  const navigateToRestaurant = (restaurantId: string) => {
    setSelectedRestaurantId(restaurantId);
    setCurrentView('restaurant-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToOrderTracking = (orderId: string) => {
    setSelectedOrderId(orderId);
    setCurrentView('order-tracking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeOrder = orders.find(o => o.id === selectedOrderId) || orders[0] || null;

  return (
    <AppContext.Provider
      value={{
        currentView,
        setCurrentView,
        selectedRestaurantId,
        setSelectedRestaurantId,
        selectedOrderId,
        setSelectedOrderId,
        deliveryLocation,
        setDeliveryLocation,
        searchQuery,
        setSearchQuery,
        isSearchOpen,
        setIsSearchOpen,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        subtotal,
        discount,
        deliveryFee,
        taxes,
        finalTotal,
        wishlistIds,
        toggleWishlist,
        isInWishlist,
        customizingFood,
        openCustomizationModal,
        closeCustomizationModal,
        user,
        isAuthOpen,
        setIsAuthOpen,
        loginUser,
        logoutUser,
        addAddress,
        orders,
        activeOrder,
        placeOrder,
        reorder,
        toasts,
        showToast,
        removeToast,
        navigateToRestaurant,
        navigateToOrderTracking
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
