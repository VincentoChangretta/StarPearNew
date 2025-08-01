import { RefObject, useEffect, useRef, useState } from 'react';

export const useInView = (
   offset: number = 0,
): {
   ref: RefObject<HTMLDivElement>;
   isVisible: boolean;
} => {
   const ref = useRef<HTMLDivElement>(null);
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const element = ref.current;
      if (!element) return;

      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setIsVisible(true);
            }
         },
         {
            rootMargin: `0px 0px -${offset}px 0px`,
            threshold: 0.1,
         },
      );

      observer.observe(element);

      return () => {
         observer.unobserve(element);
      };
   }, [offset]);

   return { ref, isVisible };
};
