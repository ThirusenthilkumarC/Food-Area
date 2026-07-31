import React from 'react';
import { motion } from 'framer-motion';
import { Search, CreditCard, Smile } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Choose Your Food',
      description: 'Browse top-rated restaurants and discover delicious meals tailored to your taste.',
      icon: Search,
      color: 'from-[#FF5A00] to-[#FF8A00]'
    },
    {
      num: '02',
      title: 'Place Your Order',
      description: 'Customize your food with extra toppings, apply promo codes, and pay securely.',
      icon: CreditCard,
      color: 'from-[#45A735] to-[#2E7D23]'
    },
    {
      num: '03',
      title: 'Enjoy Your Meal',
      description: 'Track your live delivery on the map and enjoy steaming fresh food at your doorstep.',
      icon: Smile,
      color: 'from-[#24170F] to-[#362419]'
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-[#24170F]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-wider font-extrabold text-[#FF5A00]">Simple Process</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#24170F] tracking-tight mt-1">
            Order Food in 3 Simple Steps
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Getting your favorite food delivered fast has never been easier.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="relative bg-[#FFF8F2] p-8 rounded-3xl border border-[#24170F]/5 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col items-center text-center group"
              >
                {/* Step Number Badge */}
                <span className="absolute top-4 right-6 text-4xl font-black text-gray-200 group-hover:text-[#FF5A00]/20 transition-colors">
                  {step.num}
                </span>

                {/* Icon Container */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center shadow-md mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-extrabold text-[#24170F] mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
