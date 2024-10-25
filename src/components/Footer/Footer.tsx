export const Footer = () => {
  return (
    <footer className="text-center pt-6 pb-6 bg-pastelMint ">
      <p>
        Developed by{' '}
        <a
          className="underline text-softCoral text-lg font-medium hover:text-pearlWhite focus:text-pearlWhite transition-colors duration-300 hover:shadow-lg focus:shadow-lg"
          href="https://github.com/dykyys"
        >
          dykyy.s
        </a>{' '}
        with{' '}
        <a
          className="underline text-charcoalGray text-lg font-medium hover:text-pearlWhite focus:text-pearlWhite transition-colors duration-300 hover:shadow-lg focus:shadow-lg"
          href="https://radix-ui.com"
        >
          RadixUI
        </a>{' '}
        <a
          className="underline text-charcoalGray text-lg font-medium hover:text-pearlWhite focus:text-pearlWhite transition-colors duration-300 hover:shadow-lg focus:shadow-lg"
          href="https://tailwindcss.com"
        >
          TailwindCSS
        </a>
      </p>
    </footer>
  );
};
