import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CartIcon, UserIcon } from '../../images/icons';
import { CartDetails } from '../CartDetails/CartDetails';
import { UserDetails } from '../UserDetails/UserDetails';
import { Container } from '../Container/Container';
import { IHeader } from './Header.types';

export const Header = ({ cart, user }: IHeader) => {
  return (
    <header className="bg-tiffany  w-100">
      <Container classNames="flex justify-between items-center">
        <a
          href="/"
          className="text-pastelMint text-4xl font-bold leading-[28px] p-6 rounded-[16px] hover:shadow-lg focus:shadow-lg transition-colors duration-300 hover:bg-softCoral focus:bg-softCoral"
        >
          the <span className="text-yellow">watch</span>
        </a>
        <NavigationMenu.Root className="">
          <NavigationMenu.List className="flex gap-[10px] items-center justify-between text-xl">
            <NavigationMenu.Item key="about" className="">
              <NavigationMenu.Link
                className="flex items-center pr-5 text-white hover:text-pastelMint focus:text-pastelMint p-6 rounded-[16px] hover:shadow-lg focus:shadow-lg transition-colors duration-300 hover:bg-softCoral focus:bg-softCoral"
                href="https://www.linkedin.com/in/dykyy/"
              >
                About developer
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item key="cart" className="relative flex ">
              <NavigationMenu.Trigger className="rounded-full bg-lightSilver hover:shadow-lg focus:shadow-lg transition-colors duration-300 hover:bg-softCoral focus:bg-softCoral">
                <CartIcon cart={cart} />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="w-max absolute right-0 top-10 py-[10px]  bg-white border-[1px] border-gray-med rounded-lg z-20">
                <CartDetails cart={cart} />
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item key="account" className="relative flex">
              <NavigationMenu.Trigger className="rounded-full bg-lightSilver hover:shadow-lg focus:shadow-lg transition-colors duration-300 hover:bg-softCoral focus:bg-softCoral">
                <UserIcon />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="w-max absolute right-0 top-10 py-[10px] px-4 bg-white border-[1px] border-gray-med rounded-lg z-20">
                <UserDetails user={user} />
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </Container>
    </header>
  );
};
