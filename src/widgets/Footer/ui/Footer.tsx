import { Links } from 'shared/components/Links/Links';
import { Logo } from 'shared/components/Logo/Logo';
import { Navigation } from 'shared/components/Navigation/Navigation';

export const Footer = () => {
   return (
      <footer>
         <div className='std-container'>
            <div className='flex flex-col gap-5 items-center justify-center py-5'>
               <Navigation />
               <Links />
               <Logo />
            </div>
         </div>
      </footer>
   );
};
