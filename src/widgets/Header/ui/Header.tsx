import { Links } from 'shared/components/Links/Links';
import { Logo } from 'shared/components/Logo/Logo';
import { Navigation } from 'shared/components/Navigation/Navigation';

export const Header = () => {
   return (
      <header>
         <div className='std-container'>
            <div className='flex flex-col gap-5 justify-center items-center py-5 mb-3'>
               <Logo />
               <Links />
               <Navigation />
            </div>
         </div>
      </header>
   );
};
