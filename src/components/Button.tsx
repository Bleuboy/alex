import { ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'tertiary';
  variant?: 'button' | 'icon';
  children: ReactNode;
}

const Button = ({
  disabled,
  color = 'primary',
  variant = 'button',
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      {...props}
      className={clsx(
        'rounded-lg font-semibold text-white flex justify-center items-center gap-2',
        className,
        disabled ? 'opacity-60 cursor-not-allowed' : 'hover:opacity-80',
        variant === 'button' ? 'px-4 py-2' : 'p-2 text-sm aspect-square',
        {
          'bg-brand-primary-default': color === 'primary',
          'bg-brand-secondary-default': color === 'secondary',
          'bg-brand-tertiary-default': color === 'tertiary',
        },
      )}
    >
      {children}
    </button>
  );
};

export default Button;
