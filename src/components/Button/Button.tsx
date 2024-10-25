import { IButton } from './Button.types';

export const Button = ({ children, onClick, position }: Readonly<IButton>) => {
  const side = position !== 'left' ? 'mr-2 ' : 'ml-2';
  return (
    <button
      className={`absolute ${position}-0 top-1/2 z-10 ${side} h-8 w-8 hover:bg-yellow focus:bg-yellow hover:text-softCoral focus:text-softCoral rounded-full`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
