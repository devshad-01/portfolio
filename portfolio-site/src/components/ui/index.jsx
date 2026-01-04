/**
 * Reusable UI Components
 * Small, atomic components used across the portfolio
 */

import { cn } from '../lib/utils';

// Section wrapper with consistent spacing
export const Section = ({ 
  children, 
  className, 
  id,
  background = 'default' 
}) => {
  const bgClasses = {
    default: 'bg-light-bg dark:bg-dark-bg',
    secondary: 'bg-light-bg-secondary dark:bg-dark-bg-secondary',
    surface: 'bg-light-surface dark:bg-dark-surface',
  };

  return (
    <section 
      id={id}
      className={cn('py-section', bgClasses[background], className)}
    >
      <div className="max-w-content mx-auto px-6">
        {children}
      </div>
    </section>
  );
};

// Section header with label and title
export const SectionHeader = ({ 
  label, 
  title, 
  description, 
  centered = false,
  className 
}) => {
  return (
    <div className={cn(centered ? 'text-center' : '', 'mb-12', className)}>
      {label && (
        <span className="text-sm font-medium text-accent-primary uppercase tracking-wider">
          {label}
        </span>
      )}
      <h2 className="text-h1-mobile md:text-h1 font-bold text-light-text dark:text-dark-text mt-2">
        {title}
      </h2>
      {description && (
        <p className={cn(
          'text-body text-light-text-secondary dark:text-dark-text-secondary mt-3',
          centered ? 'max-w-xl mx-auto' : 'max-w-2xl'
        )}>
          {description}
        </p>
      )}
    </div>
  );
};

// Card component with hover effects
export const Card = ({ 
  children, 
  className,
  hover = true,
  ...props 
}) => {
  return (
    <div 
      className={cn(
        'p-6 rounded-2xl transition-all duration-300',
        'bg-light-surface dark:bg-dark-surface',
        'border border-light-border dark:border-dark-border',
        hover && 'hover:border-accent-primary/50 hover:shadow-medium dark:hover:shadow-dark-medium',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// Badge component
export const Badge = ({ 
  children, 
  variant = 'default',
  className 
}) => {
  const variants = {
    default: 'bg-light-bg-secondary dark:bg-dark-surface-hover text-light-text-secondary dark:text-dark-text-secondary',
    primary: 'bg-accent-primary/10 text-accent-primary',
    success: 'bg-status-success/10 text-status-success',
    warning: 'bg-status-warning/10 text-status-warning',
    error: 'bg-status-error/10 text-status-error',
  };

  return (
    <span className={cn(
      'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold',
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
};

// Icon button
export const IconButton = ({ 
  children, 
  className,
  ...props 
}) => {
  return (
    <button 
      className={cn(
        'p-2.5 rounded-lg transition-all duration-200',
        'bg-light-bg-secondary dark:bg-dark-surface-hover',
        'text-light-text dark:text-dark-text',
        'hover:bg-light-border dark:hover:bg-dark-border',
        'focus:outline-none focus:ring-2 focus:ring-accent-primary/50',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// Skeleton loader
export const Skeleton = ({ className }) => {
  return (
    <div className={cn(
      'animate-pulse bg-light-bg-secondary dark:bg-dark-surface-hover rounded-lg',
      className
    )} />
  );
};

// Availability indicator
export const AvailabilityBadge = ({ status = "Available for new opportunities" }) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-status-success/10 border border-status-success/20">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-success opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-status-success"></span>
      </span>
      <span className="text-sm font-medium text-status-success">
        {status}
      </span>
    </div>
  );
};
