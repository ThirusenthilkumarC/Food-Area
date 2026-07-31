import { Category, Restaurant, FoodItem, Coupon, UserProfile, Order, Review } from '../types';

export const MOCK_CATEGORIES: Category[] = [
  {
    id: 'burgers',
    name: 'Burgers',
    icon: '🍔',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    itemCount: 24,
  },
  {
    id: 'pizza',
    name: 'Pizza',
    icon: '🍕',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    itemCount: 32,
  },
  {
    id: 'chicken',
    name: 'Chicken',
    icon: '🍗',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=600&q=80',
    itemCount: 18,
  },
  {
    id: 'biryani',
    name: 'Biryani',
    icon: '🍛',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
    itemCount: 28,
  },
  {
    id: 'asian',
    name: 'Asian',
    icon: '🍜',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80',
    itemCount: 20,
  },
  {
    id: 'sushi',
    name: 'Sushi',
    icon: '🍣',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80',
    itemCount: 15,
  },
  {
    id: 'healthy',
    name: 'Healthy',
    icon: '🥗',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
    itemCount: 16,
  },
  {
    id: 'desserts',
    name: 'Desserts',
    icon: '🍰',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80',
    itemCount: 22,
  },
  {
    id: 'beverages',
    name: 'Beverages',
    icon: '☕',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=600&q=80',
    itemCount: 19,
  },
];

export const MOCK_RESTAURANTS: Restaurant[] = [
  {
    id: 'rest-1',
    name: 'Spice Garden',
    slug: 'spice-garden',
    logo: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&q=80',
    coverImage: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80',
    cuisines: ['North Indian', 'Biryani', 'Mughlai'],
    rating: 4.8,
    ratingCount: 1420,
    deliveryTime: '25-30 min',
    deliveryFee: 30,
    freeDeliveryThreshold: 499,
    distance: '2.1 km',
    isOpen: true,
    priceRange: '₹₹',
    address: 'Block B, Connaught Place, New Delhi',
    area: 'Connaught Place',
    featured: true,
    offerBadge: '30% OFF up to ₹150',
    tags: ['Best Seller', 'Hygiene Certified']
  },
  {
    id: 'rest-2',
    name: 'Urban Bites',
    slug: 'urban-bites',
    logo: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=200&q=80',
    coverImage: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80',
    cuisines: ['Burgers', 'American', 'Fast Food', 'Beverages'],
    rating: 4.6,
    ratingCount: 980,
    deliveryTime: '20-25 min',
    deliveryFee: 20,
    distance: '1.4 km',
    isOpen: true,
    priceRange: '₹',
    address: 'Sector 18, Noida',
    area: 'Noida Central',
    featured: true,
    offerBadge: '20% OFF on first order',
    tags: ['Fast Delivery', 'Top Rated']
  },
  {
    id: 'rest-3',
    name: 'Pizza Craft',
    slug: 'pizza-craft',
    logo: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=200&q=80',
    coverImage: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80',
    cuisines: ['Italian', 'Wood-fired Pizza', 'Pasta', 'Desserts'],
    rating: 4.7,
    ratingCount: 2150,
    deliveryTime: '30-35 min',
    deliveryFee: 40,
    distance: '3.5 km',
    isOpen: true,
    priceRange: '₹₹₹',
    address: 'Indiranagar 100ft Road, Bengaluru',
    area: 'Indiranagar',
    featured: true,
    offerBadge: 'Buy 1 Get 1 Free',
    tags: ['Wood Fired', 'Chef Special']
  },
  {
    id: 'rest-4',
    name: 'Burger House',
    slug: 'burger-house',
    logo: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=200&q=80',
    coverImage: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=1200&q=80',
    cuisines: ['Gourmet Burgers', 'Fries', 'Shakes'],
    rating: 4.5,
    ratingCount: 840,
    deliveryTime: '18-24 min',
    deliveryFee: 15,
    distance: '1.2 km',
    isOpen: true,
    priceRange: '₹₹',
    address: 'Bandra West, Hill Road, Mumbai',
    area: 'Bandra',
    featured: false,
    offerBadge: '₹50 OFF on ₹299',
    tags: ['Superfast Delivery']
  },
  {
    id: 'rest-5',
    name: 'Chennai Kitchen',
    slug: 'chennai-kitchen',
    logo: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=200&q=80',
    coverImage: 'https://images.unsplash.com/photo-1617692494396-e64678807e31?auto=format&fit=crop&w=1200&q=80',
    cuisines: ['South Indian', 'Dosa', 'Idli', 'Filter Coffee'],
    rating: 4.9,
    ratingCount: 3100,
    deliveryTime: '20-25 min',
    deliveryFee: 25,
    distance: '2.8 km',
    isOpen: true,
    priceRange: '₹',
    address: 'T. Nagar, Chennai',
    area: 'T. Nagar',
    featured: true,
    offerBadge: '15% OFF Unlimited',
    tags: ['Pure Veg', 'Authentic']
  },
  {
    id: 'rest-6',
    name: 'Asian Bowl',
    slug: 'asian-bowl',
    logo: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=200&q=80',
    coverImage: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80',
    cuisines: ['Asian', 'Sushi', 'Ramen', 'Dim Sum', 'Chinese'],
    rating: 4.7,
    ratingCount: 1680,
    deliveryTime: '30-40 min',
    deliveryFee: 35,
    distance: '4.2 km',
    isOpen: true,
    priceRange: '₹₹₹',
    address: 'Cyber Hub, DLF Phase 2, Gurugram',
    area: 'Cyber City',
    featured: true,
    offerBadge: 'Free Dimsum on ₹599',
    tags: ['Asian Fusion', 'Fresh Seafood']
  }
];

export const MOCK_FOOD_ITEMS: FoodItem[] = [
  {
    id: 'food-1',
    restaurantId: 'rest-2',
    restaurantName: 'Urban Bites',
    name: 'Classic Cheese Burger',
    description: 'Juicy 100% prime beef/chicken patty loaded with melted cheddar cheese, caramelized onions, crisp lettuce, tomato & signature food area secret sauce in a toasted brioche bun.',
    price: 149,
    originalPrice: 199,
    discountPercentage: 25,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    category: 'burgers',
    rating: 4.8,
    ratingCount: 640,
    isVeg: 'non-veg',
    isBestSeller: true,
    isAvailable: true,
    prepTime: '15 min',
    calories: 520,
    customizationGroups: [
      {
        id: 'size',
        title: 'Choose Size',
        required: true,
        type: 'radio',
        options: [
          { id: 'regular', name: 'Regular Burger', price: 0 },
          { id: 'double', name: 'Double Patty (+₹60)', price: 60 },
        ]
      },
      {
        id: 'toppings',
        title: 'Add Extra Toppings',
        required: false,
        type: 'checkbox',
        options: [
          { id: 'cheese', name: 'Extra Cheddar Cheese Slice', price: 30 },
          { id: 'jalapenos', name: 'Pickled Jalapenos', price: 20 },
          { id: 'bacon', name: 'Smoked Turkey Bacon', price: 45 },
        ]
      }
    ]
  },
  {
    id: 'food-2',
    restaurantId: 'rest-1',
    restaurantName: 'Spice Garden',
    name: 'Hyderabadi Chicken Biryani',
    description: 'Authentic slow-cooked long grain Basmati rice infused with fragrant royal spices, succulent marinated chicken pieces, fresh mint, fried onions & saffron. Served with spicy Mirchi Ka Salan & Raita.',
    price: 199,
    originalPrice: 260,
    discountPercentage: 23,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    category: 'biryani',
    rating: 4.9,
    ratingCount: 1840,
    isVeg: 'non-veg',
    isBestSeller: true,
    isAvailable: true,
    prepTime: '20 min',
    calories: 680,
    customizationGroups: [
      {
        id: 'portion',
        title: 'Select Portion Size',
        required: true,
        type: 'radio',
        options: [
          { id: 'half', name: 'Half Handi (Serves 1)', price: 0 },
          { id: 'full', name: 'Full Handi (Serves 2-3) (+₹120)', price: 120 },
        ]
      },
      {
        id: 'spice',
        title: 'Spice Level',
        required: true,
        type: 'radio',
        options: [
          { id: 'medium', name: 'Medium Spice', price: 0 },
          { id: 'spicy', name: 'Spicy Hyderabadi Style', price: 0 },
        ]
      }
    ]
  },
  {
    id: 'food-3',
    restaurantId: 'rest-3',
    restaurantName: 'Pizza Craft',
    name: 'Margherita Basil Pizza',
    description: 'Classic Neapolitan sourdough base topped with crushed San Marzano tomato sauce, fresh mozzarella fior di latte, extra virgin olive oil and fragrant fresh basil leaves.',
    price: 249,
    originalPrice: 299,
    discountPercentage: 17,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
    category: 'pizza',
    rating: 4.7,
    ratingCount: 920,
    isVeg: 'veg',
    isBestSeller: true,
    isAvailable: true,
    prepTime: '20 min',
    calories: 710,
    customizationGroups: [
      {
        id: 'pizzasize',
        title: 'Pizza Size',
        required: true,
        type: 'radio',
        options: [
          { id: 'medium', name: 'Medium 10 inch', price: 0 },
          { id: 'large', name: 'Large 12 inch (+₹110)', price: 110 },
        ]
      },
      {
        id: 'crust',
        title: 'Choose Crust',
        required: true,
        type: 'radio',
        options: [
          { id: 'handtossed', name: 'Classic Hand Tossed', price: 0 },
          { id: 'cheeseburst', name: 'Cheese Burst (+₹60)', price: 60 },
        ]
      }
    ]
  },
  {
    id: 'food-4',
    restaurantId: 'rest-6',
    restaurantName: 'Asian Bowl',
    name: 'Schezwan Chicken Fried Rice',
    description: 'Wok-tossed jasmine rice loaded with shredded tender chicken, colorful bell peppers, spring onions, eggs, and house-made fiery Schezwan chili paste.',
    price: 179,
    originalPrice: 220,
    discountPercentage: 18,
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80',
    category: 'asian',
    rating: 4.6,
    ratingCount: 540,
    isVeg: 'non-veg',
    isBestSeller: false,
    isAvailable: true,
    prepTime: '15 min',
    calories: 590
  },
  {
    id: 'food-5',
    restaurantId: 'rest-6',
    restaurantName: 'Asian Bowl',
    name: 'Premium Salmon Sushi Platter',
    description: 'Masterpiece 8-piece sushi roll featuring fresh Norwegian salmon, creamy avocado, crisp cucumber, toasted sesame seeds, served with pickled ginger, wasabi and dark soy sauce.',
    price: 299,
    originalPrice: 399,
    discountPercentage: 25,
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
    category: 'sushi',
    rating: 4.9,
    ratingCount: 780,
    isVeg: 'non-veg',
    isBestSeller: true,
    isAvailable: true,
    prepTime: '25 min',
    calories: 440
  },
  {
    id: 'food-6',
    restaurantId: 'rest-3',
    restaurantName: 'Pizza Craft',
    name: 'Molten Chocolate Lava Cake',
    description: 'Warm, decadent Belgian dark chocolate cake with a rich oozing molten chocolate core. Served fresh with a dusting of powdered sugar.',
    price: 129,
    originalPrice: 159,
    discountPercentage: 18,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    category: 'desserts',
    rating: 4.9,
    ratingCount: 1210,
    isVeg: 'veg',
    isBestSeller: true,
    isAvailable: true,
    prepTime: '10 min',
    calories: 380
  },
  {
    id: 'food-7',
    restaurantId: 'rest-1',
    restaurantName: 'Spice Garden',
    name: 'Butter Chicken Special',
    description: 'Tandoori grilled chicken tikka simmered in a velvety, rich tomato, cream, cashew gravy with secret aromatic spices and fresh coriander. Tastes best with Garlic Naan.',
    price: 269,
    originalPrice: 320,
    discountPercentage: 16,
    image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80',
    category: 'chicken',
    rating: 4.8,
    ratingCount: 2100,
    isVeg: 'non-veg',
    isBestSeller: true,
    isAvailable: true,
    prepTime: '20 min'
  },
  {
    id: 'food-8',
    restaurantId: 'rest-5',
    restaurantName: 'Chennai Kitchen',
    name: 'Crispy Paneer Butter Dosa',
    description: 'Golden, paper-thin crispy rice crepe roasted in pure ghee, stuffed with spiced shredded paneer & potato masala. Served with 3 coconut chutneys & hot sambar.',
    price: 139,
    originalPrice: 169,
    discountPercentage: 17,
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
    category: 'healthy',
    rating: 4.8,
    ratingCount: 1450,
    isVeg: 'veg',
    isBestSeller: true,
    isAvailable: true,
    prepTime: '12 min'
  },
  {
    id: 'food-9',
    restaurantId: 'rest-2',
    restaurantName: 'Urban Bites',
    name: 'Iced Cold Caramel Frappe',
    description: 'Chilled espresso blended with rich milk, ice, creamy caramel syrup, topped with whipped cream and golden caramel drizzle.',
    price: 119,
    originalPrice: 149,
    discountPercentage: 20,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
    category: 'beverages',
    rating: 4.7,
    ratingCount: 390,
    isVeg: 'veg',
    isBestSeller: false,
    isAvailable: true
  }
];

export const MOCK_COUPONS: Coupon[] = [
  {
    code: 'FOOD30',
    discountPercentage: 30,
    maxDiscount: 150,
    minOrderAmount: 299,
    description: 'Get 30% OFF up to ₹150 on orders above ₹299'
  },
  {
    code: 'WELCOME50',
    discountPercentage: 50,
    maxDiscount: 200,
    minOrderAmount: 399,
    description: 'Welcome special: 50% OFF up to ₹200 for new users'
  },
  {
    code: 'FIRSTORDER',
    discountPercentage: 20,
    maxDiscount: 100,
    minOrderAmount: 199,
    description: 'Flat 20% OFF on your order above ₹199'
  }
];

export const MOCK_USER: UserProfile = {
  id: 'usr-901',
  name: 'Rahul Sharma',
  email: 'rahul.sharma@example.com',
  phone: '+91 98765 43210',
  avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
  addresses: [
    {
      id: 'addr-1',
      type: 'Home',
      street: 'Flat 402, Royal Palms Apartments, Outer Ring Road',
      locality: 'Indiranagar',
      city: 'Bengaluru',
      pincode: '560038',
      isDefault: true
    },
    {
      id: 'addr-2',
      type: 'Work',
      street: 'Tower B, 7th Floor, Tech Park Cyber Hub',
      locality: 'DLF Phase 2',
      city: 'Gurugram',
      pincode: '122002',
      isDefault: false
    }
  ]
};

export const MOCK_ORDERS: Order[] = [
  {
    id: 'FA-893201',
    userId: 'usr-901',
    restaurantId: 'rest-1',
    restaurantName: 'Spice Garden',
    restaurantAddress: 'Block B, Connaught Place, New Delhi',
    items: [
      {
        cartItemId: 'item-1',
        foodItem: MOCK_FOOD_ITEMS[1], // Biryani
        quantity: 2,
        selectedOptions: [],
        totalUnitPrice: 199
      },
      {
        cartItemId: 'item-2',
        foodItem: MOCK_FOOD_ITEMS[6], // Butter Chicken
        quantity: 1,
        selectedOptions: [],
        totalUnitPrice: 269
      }
    ],
    subtotal: 667,
    discount: 150,
    deliveryFee: 0,
    taxes: 33,
    total: 550,
    couponApplied: 'FOOD30',
    address: MOCK_USER.addresses[0],
    paymentMethod: 'upi',
    paymentStatus: 'paid',
    status: 'out_for_delivery',
    placedAt: '2026-07-30T19:15:00.000Z',
    estimatedDeliveryTime: '25 min',
    driverName: 'Vikram Singh',
    driverPhone: '+91 99887 76655',
    driverRating: 4.9,
    timeline: [
      { status: 'placed', label: 'Order Placed', description: 'We have received your order.', timestamp: '7:15 PM', completed: true, current: false },
      { status: 'confirmed', label: 'Order Confirmed', description: 'Spice Garden accepted your order.', timestamp: '7:17 PM', completed: true, current: false },
      { status: 'preparing', label: 'Restaurant Preparing', description: 'Chef is cooking your fresh food.', timestamp: '7:22 PM', completed: true, current: false },
      { status: 'picked_up', label: 'Order Picked Up', description: 'Delivery partner Vikram picked up your order.', timestamp: '7:30 PM', completed: true, current: false },
      { status: 'out_for_delivery', label: 'Out for Delivery', description: 'Vikram is on his way to your address.', timestamp: '7:32 PM', completed: true, current: true },
      { status: 'delivered', label: 'Delivered', description: 'Enjoy your fresh & hot meal!', timestamp: '7:40 PM (Est.)', completed: false, current: false },
    ]
  }
];

export const MOCK_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    userName: 'Ananya Roy',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '2 days ago',
    comment: 'Food Area is hands down the fastest delivery app! The Biryani arrived steaming hot within 22 minutes. The food packaging was top notch.',
    orderedItems: ['Hyderabadi Chicken Biryani', 'Butter Chicken']
  },
  {
    id: 'rev-2',
    userName: 'Karan Malhotra',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '1 week ago',
    comment: 'Super easy UI, love the customized options for burgers and pizza! The FOOD30 discount saved me ₹150. Highly recommended!',
    orderedItems: ['Classic Cheese Burger', 'Molten Chocolate Lava Cake']
  },
  {
    id: 'rev-3',
    userName: 'Priya Sharma',
    userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '3 days ago',
    comment: 'Live order tracking on map is very accurate. The driver Vikram was polite and delivery was super quick. Will order every weekend!',
    orderedItems: ['Margherita Basil Pizza', 'Salmon Sushi Platter']
  }
];
