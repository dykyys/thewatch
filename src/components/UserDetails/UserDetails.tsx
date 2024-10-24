import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { User } from '../../types';

export const UserDetails = ({ user }: { user?: User }) => {
  return (
    <>
      <div className="absolute -top-2 right-[0.7rem] bg-white rotate-45 w-4 h-4 border-t-[1px] border-l-[1px] rounded-tl-md border-gray-med z-1"></div>
      {user ? (
        <>
          <p className="pb-3">{user.name}</p>
          <NavigationMenu.Link href="/logout">
            <button className="bg-yellow rounded py-2 px-[19px]">
              Log out
            </button>
          </NavigationMenu.Link>
        </>
      ) : (
        <NavigationMenu.Link href="/login">
          <button className="bg-yellow rounded py-2 px-[19px]">Log in</button>
        </NavigationMenu.Link>
      )}
    </>
  );
};
