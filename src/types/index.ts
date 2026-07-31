export type VegType = 'veg' | 'non-veg' | 'egg';

export interface CustomizationOption {
  id: string;
  name: string;
  price: number;
}

export interface CustomizationGroup {
  id: string;
  title: string;
  required: boolean;
  type: 'radio' | 'checkbox';
  options: CustomizationOption[];
}

export interface FoodItem {
  id: string;
  restaurantId: string;
  restaurantName: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  image: string;
  category: string;
  rating: number;
  ratingCount: number;
  isVeg: VegType;
  isBestSeller?: boolean;
  isAvailable?: boolean;
  customizationGroups?: CustomizationGroup[];
  prepTime?: string;
  calories?: number;
}

export interface Restaurant {
  id: string;
  name: string;
  slug: string;
  logo: string;
  coverImage: string;
  cuisines: string[];
  rating: number;
  ratingCount: number;
  deliveryTime: string;
  deliveryFee: number;
  freeDeliveryThreshold?: number;
  distance: string;
  isOpen: boolean;
  priceRange: '₹' | '₹₹' | '₹₹₹' | '₹₹₹₹';
  address: string;
  area: string;
  featured?: boolean;
  offerBadge?: string;
  tags?: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string; // Emoji or SVG name
  image: string;
  itemCount: number;
}

export interface SelectedOption {
  groupId: string;
  groupTitle: string;
  optionId: string;
  optionName: string;
  price: number;
}

export interface CartItem {
  cartItemId: string; // Unique string including customization hash
  foodItem: FoodItem;
  quantity: number;
  selectedOptions: SelectedOption[];
  specialInstructions?: string;
  totalUnitPrice: number; // Base price + options price
}

export interface Coupon {
  code: string;
  discountPercentage: number;
  maxDiscount: number;
  minOrderAmount: number;
  description: string;
}

export interface Address {
  id: string;
  type: 'Home' | 'Work' | 'Other';
  street: string;
  locality: string;
  city: string;
  pincode: string;
  isDefault?: boolean;
}

export type PaymentMethod = 'upi' | 'card' | 'cod' | 'wallet';

export type OrderStatus = 'placed' | 'confirmed' | 'preparing' | 'picked_up' | 'out_for_delivery' | 'delivered' | 'cancelled';

export interface OrderTimelineStep {
  status: OrderStatus;
  label: string;
  description: string;
  timestamp?: string;
  completed: boolean;
  current: boolean;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  restaurantId: string;
  restaurantName: string;
  restaurantAddress: string;
  subtotal: number;
  discount: number;
  deliveryFee: number;
  taxes: number;
  total: number;
  couponApplied?: string;
  address: Address;
  paymentMethod: PaymentMethod;
  paymentStatus: 'paid' | 'pending';
  status: OrderStatus;
  placedAt: string;
  estimatedDeliveryTime: string;
  driverName?: string;
  driverPhone?: string;
  driverRating?: number;
  timeline: OrderTimelineStep[];
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatarUrl?: string;
  addresses: Address[];
  savedPaymentMethods?: { id: string; type: string; last4: string }[];
}

export interface Review {
  id: string;
  userName: string;
  userAvatar: string;
  rating: number;
  date: string;
  comment: string;
  orderedItems?: string[];
}
