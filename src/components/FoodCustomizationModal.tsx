import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, MessageSquare } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Button, VegBadge } from './UIElements';
import { SelectedOption } from '../types';

export const FoodCustomizationModal: React.FC = () => {
  const { customizingFood, closeCustomizationModal, addToCart } = useApp();

  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<SelectedOption[]>([]);
  const [specialInstructions, setSpecialInstructions] = useState('');

  useEffect(() => {
    if (customizingFood && customizingFood.customizationGroups) {
      const initial: SelectedOption[] = [];
      customizingFood.customizationGroups.forEach(group => {
        if (group.type === 'radio' && group.options.length > 0) {
          initial.push({
            groupId: group.id,
            groupTitle: group.title,
            optionId: group.options[0].id,
            optionName: group.options[0].name,
            price: group.options[0].price
          });
        }
      });
      setSelectedOptions(initial);
      setQuantity(1);
      setSpecialInstructions('');
    }
  }, [customizingFood]);

  if (!customizingFood) return null;

  const handleRadioSelect = (groupId: string, groupTitle: string, optionId: string, optionName: string, price: number) => {
    setSelectedOptions(prev => {
      const filtered = prev.filter(o => o.groupId !== groupId);
      return [...filtered, { groupId, groupTitle, optionId, optionName, price }];
    });
  };

  const handleCheckboxToggle = (groupId: string, groupTitle: string, optionId: string, optionName: string, price: number) => {
    setSelectedOptions(prev => {
      const exists = prev.some(o => o.groupId === groupId && o.optionId === optionId);
      if (exists) {
        return prev.filter(o => !(o.groupId === groupId && o.optionId === optionId));
      } else {
        return [...prev, { groupId, groupTitle, optionId, optionName, price }];
      }
    });
  };

  const extraOptionsTotal = selectedOptions.reduce((acc, curr) => acc + curr.price, 0);
  const unitPrice = customizingFood.price + extraOptionsTotal;
  const totalPrice = unitPrice * quantity;

  const handleConfirmAddToCart = () => {
    addToCart(customizingFood, quantity, selectedOptions, specialInstructions);
    closeCustomizationModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="glass-luxury bg-[#121212] rounded-[36px] max-w-lg w-full overflow-hidden shadow-2xl border border-white/15 flex flex-col max-h-[90vh]"
      >
        <div className="relative h-48 sm:h-56 w-full">
          <img src={customizingFood.image} alt={customizingFood.name} className="w-full h-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />

          <button
            onClick={closeCustomizationModal}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center border border-white/20 hover:bg-[#FF6B35] transition-colors"
          >
            <X size={18} />
          </button>

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-2 mb-1">
              <VegBadge type={customizingFood.isVeg} />
              <span className="text-[10px] font-black uppercase tracking-wider bg-[#FF6B35] px-2.5 py-0.5 rounded-full">
                Customizing Dish
              </span>
            </div>
            <h3 className="text-xl font-serif-editorial font-extrabold">{customizingFood.name}</h3>
            <p className="text-xs text-gray-400 font-medium">by {customizingFood.restaurantName}</p>
          </div>
        </div>

        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-white">
          <p className="text-xs text-gray-300 font-light leading-relaxed bg-white/5 p-3.5 rounded-2xl border border-white/10">
            {customizingFood.description}
          </p>

          {customizingFood.customizationGroups?.map(group => (
            <div key={group.id} className="space-y-3 pt-2">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <h4 className="font-extrabold text-white text-sm">{group.title}</h4>
                {group.required && (
                  <span className="text-[10px] font-black text-[#FF6B35] uppercase bg-[#FF6B35]/20 px-2 py-0.5 rounded-full">
                    Required
                  </span>
                )}
              </div>

              <div className="space-y-2">
                {group.options.map(option => {
                  const isSelected = selectedOptions.some(o => o.groupId === group.id && o.optionId === option.id);
                  return (
                    <label
                      key={option.id}
                      onClick={() => {
                        if (group.type === 'radio') {
                          handleRadioSelect(group.id, group.title, option.id, option.name, option.price);
                        } else {
                          handleCheckboxToggle(group.id, group.title, option.id, option.name, option.price);
                        }
                      }}
                      className={`flex items-center justify-between p-3.5 rounded-2xl border text-xs font-bold cursor-pointer transition-all ${
                        isSelected
                          ? 'border-[#FF6B35] bg-[#FF6B35]/15 text-white'
                          : 'border-white/10 bg-white/5 hover:border-white/20 text-gray-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type={group.type}
                          name={group.id}
                          checked={isSelected}
                          onChange={() => {}}
                          className="accent-[#FF6B35] w-4 h-4"
                        />
                        <span>{option.name}</span>
                      </div>
                      {option.price > 0 && (
                        <span className="font-bold text-[#FF6B35]">+₹{option.price}</span>
                      )}
                    </label>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="space-y-2 pt-2">
            <label className="font-extrabold text-white text-xs flex items-center gap-1.5">
              <MessageSquare size={14} className="text-[#FF6B35]" />
              <span>Special Chef Instructions</span>
            </label>
            <textarea
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              placeholder="e.g. Extra spicy, serve with extra truffle oil, less salt..."
              rows={2}
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-3 text-xs outline-none focus:border-[#FF6B35] text-white"
            />
          </div>

        </div>

        <div className="p-6 bg-[#161616] border-t border-white/10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-3.5 py-2 font-extrabold text-sm text-white">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-1 hover:text-[#FF6B35] transition-colors"
            >
              <Minus size={14} />
            </button>
            <span className="w-5 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-1 hover:text-[#FF6B35] transition-colors"
            >
              <Plus size={14} />
            </button>
          </div>

          <Button
            variant="primary"
            size="md"
            className="flex-1 rounded-full shadow-glow-orange"
            onClick={handleConfirmAddToCart}
          >
            Add to Cart • ₹{totalPrice}
          </Button>
        </div>

      </motion.div>

    </div>
  );
};
