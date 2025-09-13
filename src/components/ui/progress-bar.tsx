import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number;
  max: number;
  label?: string;
  className?: string;
  showPercentage?: boolean;
  animated?: boolean;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max,
  label,
  className,
  showPercentage = true,
  animated = true,
  color = 'primary',
  size = 'md'
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const percentage = Math.min((value / max) * 100, 100);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setDisplayValue(value);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setDisplayValue(value);
    }
  }, [value, animated]);

  const sizeClasses = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4'
  };

  const colorClasses = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    danger: 'bg-red-500'
  };

  return (
    <div className={cn('w-full', className)}>
      {label && (
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium text-foreground">{label}</label>
          {showPercentage && (
            <span className="text-sm text-muted-foreground">
              {percentage.toFixed(0)}%
            </span>
          )}
        </div>
      )}
      
      <div className={cn(
        'w-full bg-muted rounded-full overflow-hidden',
        sizeClasses[size]
      )}>
        <motion.div
          className={cn(
            'h-full rounded-full transition-all duration-500 ease-out',
            colorClasses[color]
          )}
          initial={{ width: 0 }}
          animate={{ width: `${(displayValue / max) * 100}%` }}
          transition={{ duration: animated ? 1.5 : 0, ease: "easeOut" }}
        />
      </div>
      
      {!label && showPercentage && (
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>{displayValue.toLocaleString()}</span>
          <span>{max.toLocaleString()}</span>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;