import { ReactNode } from 'react';

interface TitleProps {
   children: string | ReactNode;
   className?: string;
   smallTitle?: boolean;
}

export const Title = (props: TitleProps) => {
   const { className, children } = props;

   return (
      <h2
         className={`text-5xl font-Bebas text-center mb-[50px] text-mainBg-second-light text-balance max-1000:text-4xl max-1000:mb-7 max-810:text-3xl max-340:text-2xl ${className}`}
      >
         {children}
      </h2>
   );
};
