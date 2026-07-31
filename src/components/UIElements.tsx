import React from 'react';
import { Star, AlertTriangle, RefreshCw } from 'lucide-react';
import { VegType } from '../types';

// Luxury Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  icon,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-wide';

  const variants = {
    primary: 'bg-gradient-to-r from-[#FF6B35] to-[#FF5A00] text-white hover:shadow-glow-orange hover:scale-[1.02] border border-[#FF6B35]/40',
    secondary: 'bg-[#1E1E1E] text-white hover:bg-[#2A2A2A] border border-white/10 hover:border-white/20',
    outline: 'border border-white/20 text-white hover:bg-white hover:text-black hover:border-white',
    ghost: 'text-gray-300 hover:text-white hover:bg-white/5',
    glass: 'glass-luxury text-white hover:bg-white/10 border border-white/10 hover:border-[#FF6B35]/50 shadow-lg',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs font-bold gap-1.5',
    md: 'px-6 py-3 text-sm font-bold gap-2.5',
    lg: 'px-8 py-4 text-base font-extrabold gap-3',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  );
};

// Veg / Non-Veg Indicator Badge
export const VegBadge: React.FC<{ type: VegType; size?: 'sm' | 'md' }> = ({ type, size = 'md' }) => {
  const isVeg = type === 'veg';
  const color = isVeg ? '#45A735' : '#FF4D4D';
  const boxSize = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';
  const dotSize = size === 'sm' ? 'w-1.5 h-1.5' : 'w-2 h-2';

  return (
    <div 
      className={`${boxSize} border-2 flex items-center justify-center rounded-sm shrink-0 bg-black/40`}
      style={{ borderColor: color }}
      title={isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
    >
      <div 
        className={`${dotSize} rounded-full`}
        style={{ backgroundColor: color }}
      />
    </div>
  );
};

// Rating Star Component
export const Rating: React.FC<{ rating: number; count?: number }> = ({ 
  rating, 
  count 
}) => {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md border border-amber-500/30 text-amber-400 px-2.5 py-1 rounded-full text-xs font-bold shadow-sm">
        <Star size={12} className="fill-current text-amber-400" />
        <span>{rating.toFixed(1)}</span>
      </div>
      {count !== undefined && (
        <span className="text-xs text-gray-400 font-medium">({count})</span>
      )}
    </div>
  );
};

// Luxury Pill Badge
export const Badge: React.FC<{ children: React.ReactNode; variant?: 'orange' | 'gold' | 'glass' }> = ({
  children,
  variant = 'orange'
}) => {
  const styles = {
    orange: 'bg-[#FF6B35]/15 text-[#FF6B35] border border-[#FF6B35]/30',
    gold: 'bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30',
    glass: 'bg-white/10 text-white border border-white/15 backdrop-blur-md',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase ${styles[variant]}`}>
      {children}
    </span>
  );
};

// Skeleton Loader Dark
export const LoadingSkeleton: React.FC<{ type?: 'card' | 'restaurant' }> = ({ type = 'card' }) => {
  return (
    <div className="bg-[#161616] rounded-3xl p-4 border border-white/5 animate-pulse space-y-4">
      <div className="w-full h-52 bg-white/5 rounded-2xl" />
      <div className="h-5 bg-white/5 rounded w-3/4" />
      <div className="h-4 bg-white/5 rounded w-1/2" />
      <div className="h-8 bg-white/5 rounded-full w-1/3 pt-2" />
    </div>
  );
};

// Empty State Component Dark
export const EmptyState: React.FC<{
  title: string;
  description: string;
  icon?: React.ReactNode;
  actionText?: string;
  onAction?: () => void;
}> = ({ title, description, icon, actionText, onAction }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-12 bg-[#161616]/80 rounded-3xl border border-white/10 my-6">
      {icon && <div className="mb-4 text-[#FF6B35] p-4 bg-[#FF6B35]/10 rounded-full">{icon}</div>}
      <h3 className="text-xl font-extrabold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm max-w-md mb-6 leading-relaxed">{description}</p>
      {actionText && onAction && (
        <Button onClick={onAction} variant="primary">
          {actionText}
        </Button>
      )}
    </div>
  );
};

// Error State Component Dark
export const ErrorState: React.FC<{ message?: string; onRetry?: () => void }> = ({
  message = "Something went wrong while fetching content.",
  onRetry
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 bg-red-950/20 rounded-2xl border border-red-500/20 my-4">
      <AlertTriangle className="text-red-400 w-10 h-10 mb-3" />
      <h4 className="text-lg font-extrabold text-red-200 mb-1">Content Error</h4>
      <p className="text-red-400 text-sm mb-4 max-w-sm">{message}</p>
      {onRetry && (
        <Button size="sm" variant="outline" onClick={onRetry} icon={<RefreshCw size={14} />}>
          Try Again
        </Button>
      )}
    </div>
  );
};
