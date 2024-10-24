import { IButton } from './Button.types';

export const Button = ({ children, onClick, position }: Readonly<IButton>) => {
  return (
    <button
      className={` absolute ${position}-0 top-1/2 z-10 mr-2 h-8 w-8 hover:bg-yellow focus:bg-yellow hover:text-softCoral focus:text-softCoral rounded-full`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
