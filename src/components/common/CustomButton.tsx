import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

type ButtonVariant = 'filled' | 'outlined' | 'ghost';
type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'error'
  | 'success'
  | 'warning';
type ButtonSize = 'sm' | 'md' | 'lg';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  icon?: React.ReactNode;
  loading?: boolean;
  loadingText?: string;
}

const colorStyles: Record<ButtonColor, string> = {
  primary:
    'bg-brand-500! text-white! hover:bg-brand-500/95! border-brand-500! focus-visible:ring-brand-500',
  secondary:
    'bg-gray-200! text-gray-800! hover:bg-gray-300! border-gray-300! focus-visible:ring-gray-300',
  info: 'bg-info! text-white! hover:bg-info/90! border-info! focus-visible:ring-info',
  error:
    'bg-error! text-white! hover:bg-error/90! border-error! focus-visible:ring-error',
  success:
    'bg-success! text-white! hover:bg-success/90! border-success! focus-visible:ring-success',
  warning:
    'bg-warning! text-white! hover:bg-warning/90! border-warning! focus-visible:ring-warning'
};

const outlinedStyles: Record<ButtonColor, string> = {
  primary:
    'border border-brand-500 text-brand-500 hover:bg-brand-500/10 hover:text-brand-500 focus-visible:ring-brand-500',
  secondary:
    'border border-gray-400 text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus-visible:ring-gray-400',
  info: 'border border-info text-info hover:bg-info/10 hover:text-info focus-visible:ring-info',
  error:
    'border border-error text-error hover:bg-error/10 hover:text-error focus-visible:ring-error',
  success:
    'border border-success text-success hover:bg-success/10 hover:text-success focus-visible:ring-success',
  warning:
    'border border-warning text-warning hover:bg-warning/10 hover:text-warning focus-visible:ring-warning'
};

const ghostStyles: Record<ButtonColor, string> = {
  primary: 'text-brand-500 hover:bg-brand-500/10 focus-visible:ring-brand-500',
  secondary: 'text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-400',
  info: 'text-info hover:bg-info/10 focus-visible:ring-info',
  error: 'text-error hover:bg-error/10 focus-visible:ring-error',
  success: 'text-success hover:bg-success/10 focus-visible:ring-success',
  warning: 'text-warning hover:bg-warning/10 focus-visible:ring-warning'
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'text-xs px-3 py-1.5',
  md: 'text-sm px-4 py-2',
  lg: 'text-base px-5 py-3'
};

export const CustomButton = React.forwardRef<
  HTMLButtonElement,
  CustomButtonProps
>(
  (
    {
      variant = 'filled',
      color = 'primary',
      size = 'md',
      icon,
      loading = false,
      loadingText,
      disabled,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const base =
      'inline-flex items-center justify-center gap-2 font-medium rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-all select-none';

    const variantStyle =
      variant === 'outlined'
        ? outlinedStyles[color]
        : variant === 'ghost'
          ? ghostStyles[color]
          : colorStyles[color];

    const elevation =
      variant === 'filled' ? 'shadow hover:shadow-inner' : 'shadow-none';

    const stateClasses = disabled
      ? 'opacity-50 cursor-not-allowed shadow-none'
      : 'cursor-pointer';

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          base,
          variantStyle,
          sizeStyles[size],
          elevation,
          stateClasses,
          '',
          className
        )}
        {...props}
      >
        {loading && <Loader2 className="animate-spin h-4 w-4 text-current" />}
        {!loading && icon}
        <span>{loading && loadingText ? loadingText : children}</span>
      </button>
    );
  }
);

CustomButton.displayName = 'CustomButton';
