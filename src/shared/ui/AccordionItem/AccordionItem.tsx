import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactNode, useState, useRef, useEffect } from 'react';

interface AccordionItemProps {
   title: string;
   titleClassname?: string;
   content: ReactNode;
   contentClassname?: string;
}

export const AccordionItem = ({ title, titleClassname = '', content, contentClassname = '' }: AccordionItemProps) => {
   const [isOpen, setIsOpen] = useState(false);
   const [height, setHeight] = useState(0);
   const contentRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (isOpen) {
         // Когда открываем, устанавливаем высоту на фактическую высоту контента
         const contentHeight = contentRef.current?.scrollHeight || 0;
         setHeight(contentHeight);
      } else {
         // Когда закрываем, устанавливаем высоту на 0
         setHeight(0);
      }
   }, [isOpen]);

   // Обработчик изменения размера контента (например, если контент динамический)
   useEffect(() => {
      if (!isOpen || !contentRef.current) return;

      const resizeObserver = new ResizeObserver(() => {
         const contentHeight = contentRef.current?.scrollHeight || 0;
         setHeight(contentHeight);
      });

      if (contentRef.current) {
         resizeObserver.observe(contentRef.current);
      }

      return () => {
         resizeObserver.disconnect();
      };
   }, [isOpen]);

   return (
      <div className='overflow-hidden'>
         <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center mx-auto gap-2 font-Bebas text-5xl mb-[50px] text-center transition cursor-pointer max-1000:text-4xl max-1000:mb-7 max-810:text-3xl max-340:text-2xl ${titleClassname}`}
            aria-expanded={isOpen}
         >
            <span className='font-medium'>{title}</span>
            <FontAwesomeIcon
               icon={faChevronDown}
               className={`duration-300 text-4xl transition-transform max-810:text-2xl  ${isOpen ? 'rotate-180' : ''}`}
            />
         </button>

         <div
            ref={contentRef}
            style={{
               height: `${height}px`,
               transition: 'height 300ms cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            className={` overflow-hidden`}
         >
            <div
               className={`transition-opacity duration-300 ${contentClassname} ${
                  isOpen ? 'opacity-100 delay-100' : 'opacity-0'
               }`}
            >
               {content}
            </div>
         </div>
      </div>
   );
};
