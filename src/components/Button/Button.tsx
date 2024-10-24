export const Button = ({
  children,
  onClick,
  position,
}: Readonly<{
  children: React.ReactNode;
  onClick: () => void;
  position: string;
}>) => {
  return (
    <button
      className={` absolute ${position}-0 top-1/2 z-10 mr-2 h-8 w-8 hover:bg-yellow focus:bg-yellow hover:text-softCoral focus:text-softCoral rounded-full`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
