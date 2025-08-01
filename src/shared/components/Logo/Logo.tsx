import { logoImg } from 'shared/const/images';

interface LogoProps {
   className?: string;
}

export const Logo = (props: LogoProps) => {
   const { className } = props;
   return (
      <div className={`max-w-[80px] w-full ${className} max-500:max-w-[50px]`}>
         <a href='/' className='w-full'>
            <img className='w-full h-full object-cover' src={logoImg} alt='' />
         </a>
      </div>
   );
};
