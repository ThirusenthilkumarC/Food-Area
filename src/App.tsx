import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from "./components/Navbar";

import { MobileBottomNav } from './components/MobileBottomNav';
import { Hero } from './components/Hero';
import { WhiteFeatures } from './components/WhiteFeatures';
import { BestSellers } from './components/BestSellers';
import { AboutSushi } from './components/AboutSushi';
import { SpecialOffer } from './components/SpecialOffer';
import { ReservationCTA } from './components/ReservationCTA';
import { GallerySection } from './components/GallerySection';
import { ContactWhite } from './components/ContactWhite';
import { Footer } from './components/Footer';

// Pages & Modals
import { RestaurantListing } from './components/RestaurantListing';
import { RestaurantDetail } from './components/RestaurantDetail';
import { CheckoutView } from './components/CheckoutView';
import { OrderTrackingView } from './components/OrderTrackingView';
import { UserProfileView } from './components/UserProfileView';
import { FoodCustomizationModal } from './components/FoodCustomizationModal';
import { CartDrawer } from './components/CartDrawer';
import { AuthModal } from './components/AuthModal';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { ToastContainer } from './components/Toast';

const MainContent: React.FC = () => {
  const { currentView } = useApp();

  const renderView = () => {
    switch (currentView) {
      case 'restaurants':
        return <RestaurantListing />;

      case 'restaurant-detail':
        return <RestaurantDetail />;

      case 'checkout':
        return <CheckoutView />;

      case 'order-tracking':
        return <OrderTrackingView />;

      case 'profile':
      case 'wishlist':
        return <UserProfileView />;

      case 'offers':
        return (
          <>
            <SpecialOffer />
            <RestaurantListing />
          </>
        );

      case 'about':
        return (
          <div className="pt-24 bg-white">
            <AboutSushi />
          </div>
        );

      case 'contact':
        return (
          <div className="pt-24 bg-white">
            <ContactWhite />
          </div>
        );

      case 'home':
      default:
        return (
          <main>
            <Hero />
            <WhiteFeatures />
            <BestSellers />
            <AboutSushi />
            <SpecialOffer />
            <ReservationCTA />
            <GallerySection />
            <ContactWhite />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#0D0D0D] text-[#F5F5F7]">
      <div>
        <Navbar />
        {renderView()}
      </div>

      <Footer />
      <MobileBottomNav />

      <FoodCustomizationModal />
      <CartDrawer />
      <AuthModal />
      <GlobalSearchModal />
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}