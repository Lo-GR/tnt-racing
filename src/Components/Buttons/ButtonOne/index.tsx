import { ReactNode } from 'react';
import classNames from 'classnames';

type ButtonProps = {
  children: ReactNode;
  type?: string;
  onClick?: () => void;
  className?: string;
};

export const Button = ({
  type = 'primary',
  className,
  onClick,
  children,
}: ButtonProps) => {
  let colors = 'bg-sp-secondary-500 hover:bg-sp-secondary-300';

  switch (type) {
    case 'primary':
      colors = 'bg-sp-secondary-500 hover:bg-sp-secondary-300';
      break;
    case 'secondary':
      colors = 'bg-sp-primary-500 hover:bg-sp-primary-300';
      break;
    default:
      colors = 'bg-sp-secondary-500 hover:bg-sp-secondary-300';
      break;
  }

  return (
    <button
      onClick={onClick}
      className={classNames(
        colors,
        className,
        `w-fit inline-flex items-center justify-center py-1 px-5 md:py-2 md:px-10 tracking-wide transition-all duration-200 rounded-[28px] text-sm md:text-xl lg:text-3xl shadow-md`
      )}>
      {children}
    </button>
  );
};
