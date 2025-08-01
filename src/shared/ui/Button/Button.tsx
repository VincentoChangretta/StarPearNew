import { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import { ButtonThemes } from './types/types';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string;
   children: ReactNode;
   theme: ButtonThemes;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string;
   children: ReactNode;
   theme: ButtonThemes;
   primaryClassName?: string;
   link?: boolean;
   a?: boolean;
   to?: string;
   primaryFullSize?: string;
}

export const Button = (props: ButtonProps) => {
   const {
      className,
      primaryClassName,
      children,
      theme,
      link,
      to,
      a,
      primaryFullSize = 'max-w-[300px]',
      ...other
   } = props;

   return (
      <div className={`relative z-50  w-full ${primaryClassName} ${primaryFullSize}`}>
         <div className='primaryBorder'></div>
         <button
            className={`primaryBtn flex justify-center items-center w-full  rounded-stdRadius font-bold transition-all duration-300 text-[20px] shadow-xl cursor-pointer max-1000:text-lg max-350:text-base ${className} ${theme} ${
               !link && !a && 'p-5'
            } `}
            {...other}
         >
            {link && to ? (
               <Link to={to} className='w-full p-5'>
                  {children}
               </Link>
            ) : a && to ? (
               <a href={to} target={to.startsWith('#') ? undefined : '_blank'} className='w-full p-5'>
                  {children}
               </a>
            ) : (
               children
            )}
         </button>
      </div>
   );
};
