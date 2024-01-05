import clsx from 'clsx';
import { ReactNode } from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <div
      {...props}
      className={clsx(
        'flex flex-col gap-4 bg-white border-2 border-divider rounded-lg py-8 px-16 w-full max-w-4xl',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
