import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useRef, useEffect, ReactNode } from 'react';

interface QAItem {
   question: string;
   answer: ReactNode;
}

interface AccordionProps {
   items: QAItem[];
   titleClassname?: string;
   contentClassname?: string;
}

export const Accordion = ({ items, titleClassname = '', contentClassname = '' }: AccordionProps) => {
   const [openIndex, setOpenIndex] = useState<number | null>(null);
   const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
   const [heights, setHeights] = useState<number[]>([]);

   // Обновляем высоту при открытии
   useEffect(() => {
      if (openIndex === null) return;

      const newHeights = items.map((_, i) => {
         return i === openIndex ? contentRefs.current[i]?.scrollHeight || 0 : 0;
      });
      setHeights(newHeights);
   }, [openIndex, items]);

   // ResizeObserver на каждый открытый блок
   useEffect(() => {
      if (openIndex === null || !contentRefs.current[openIndex]) return;

      const resizeObserver = new ResizeObserver(() => {
         const newHeight = contentRefs.current[openIndex]?.scrollHeight || 0;
         setHeights(prev => prev.map((h, i) => (i === openIndex ? newHeight : 0)));
      });

      resizeObserver.observe(contentRefs.current[openIndex]!);

      return () => {
         resizeObserver.disconnect();
      };
   }, [openIndex]);

   useEffect(() => {
      if (openIndex === null) {
         setHeights(items.map(() => 0));
      }
   }, [openIndex, items]);

   return (
      <div className='space-y-4'>
         {items.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;

            return (
               <div key={index} className='overflow-hidden border-b pb-4'>
                  <button
                     onClick={() => setOpenIndex(isOpen ? null : index)}
                     className={`flex items-center justify-between w-full gap-2 font-Bebas text-3xl transition cursor-pointer max-500:text-2xl  ${titleClassname}`}
                     aria-expanded={isOpen}
                  >
                     <span className='font-medium text-left'>{question}</span>
                     <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`duration-300 text-2xl transition-transform max-380:text-lg  ${
                           isOpen ? 'rotate-180' : ''
                        }`}
                     />
                  </button>

                  <div
                     ref={el => {
                        contentRefs.current[index] = el;
                     }}
                     style={{
                        height: `${heights[index] || 0}px`,
                        transition: 'height 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                     }}
                     className='overflow-hidden'
                  >
                     <div
                        className={`transition-opacity duration-300 py-3 ${contentClassname} ${
                           isOpen ? 'opacity-100 delay-100' : 'opacity-0'
                        }`}
                     >
                        {answer}
                     </div>
                  </div>
               </div>
            );
         })}
      </div>
   );
};
