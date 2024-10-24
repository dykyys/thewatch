import { IComponent } from './Container.types';

export const Container = ({ children, classNames }: Readonly<IComponent>) => {
  return (
    <div
      className={`sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4 ${
        classNames ? classNames : ''
      }`}
    >
      {children}
    </div>
  );
};
