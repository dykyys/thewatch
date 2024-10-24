export const Container = ({
  children,
  classNames,
}: Readonly<{
  children: React.ReactNode;
  classNames?: string;
}>) => {
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
