import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';

export interface OptionsType {
   text: string;
   link?: string;
}

interface DropDownProps {
   className?: string;
   activeOption: string;
   options: OptionsType[];
   activeOptionStyles?: string;
   listStyles?: string;
   state?: string;
   changeState?: (program: string) => void;
}

export const DropDown = (props: DropDownProps) => {
   const { options, activeOption, activeOptionStyles, listStyles, changeState, state } = props;

   const dropDownRef = useRef(null);
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const [currentActiveOption, setCurrentActiveOption] = useState<string>(activeOption);

   const handleOpen = () => {
      setIsOpen(prev => !prev);
   };

   const handleSetCurrentOption = (option: string) => {
      setIsOpen(false);
      setCurrentActiveOption(option);
      changeState(option);
   };

   useEffect(() => {
      setCurrentActiveOption(activeOption);
   }, [activeOption]);

   return (
      <div ref={dropDownRef} className='relative z-[1000] cursor-pointer'>
         <div
            onClick={handleOpen}
            className={`flex items-center justify-between p-4 w-full bg-mainBg-inv/8 rounded-[20px] outline-transparent transition duration-200 backdrop-blur-2xl   ${activeOptionStyles} ${
               isOpen && 'bg-mainPink border-mainPink'
            }`}
         >
            <p className={`${!state?.length && 'text-white/50'}`}>{currentActiveOption}</p>
            <FontAwesomeIcon className={`transition duration-200 ${isOpen && 'rotate-180'} `} icon={faAngleDown} />
         </div>
         {isOpen && (
            <ul
               className={`absolute z-[9000] flex flex-col gap-1.5 top-full right-0 left-0 p-4 rounded-xl text-center transition duration-200 bg-mainBg   ${listStyles}`}
            >
               {options.map((option, index) => (
                  <li
                     className='p-2 text-mainBg-inv bg-mainBg-second/10 rounded-xl duration-200 hover:bg-mainBg-second-light/10'
                     key={index}
                     onClick={() => handleSetCurrentOption(option.text)}
                  >
                     {option.text}
                  </li>
               ))}
            </ul>
         )}
      </div>
   );
};
