import { ChangeEvent, FC } from 'react';

interface CheckboxProps {
   value?: string;
   disabled?: boolean;
   isCheckedPrivacy: boolean;
   setIsCheckedPrivacy: (checked: boolean) => void;
   error?: boolean;
}

export const Checkbox: FC<CheckboxProps> = ({
   value,
   disabled = false,
   isCheckedPrivacy,
   setIsCheckedPrivacy,
   error = false,
}) => {
   const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
      setIsCheckedPrivacy(e.target.checked);
   };

   const baseBorder = error ? 'border-red-400' : disabled ? 'border-[#ccc]' : 'border-white';

   const cursorStyle = disabled ? 'cursor-not-allowed' : 'cursor-pointer';

   const afterStyle =
      isCheckedPrivacy && !disabled
         ? 'after:w-[10px] after:h-[10px] after:rounded-[2px] after:bg-white'
         : disabled && isCheckedPrivacy
         ? 'after:w-[10px] after:h-[10px] after:rounded-[2px] after:bg-[var(--color-bg)]'
         : '';

   return (
      <label className='relative cursor-pointer select-none'>
         <input
            type='checkbox'
            value={value}
            disabled={disabled}
            checked={isCheckedPrivacy}
            onChange={handleCheckboxChange}
            className='absolute z-10 w-[0px] h-[0px] overflow-hidden clip-[rect(0_0_0_0)]'
         />
         <div
            className={`w-4 h-4 border-2 rounded-[5px] ${baseBorder} ${cursorStyle}
               after:content-[''] after:absolute after:top-1/2 after:left-1/2 
               after:translate-x-[-50%] after:translate-y-[-50%] ${afterStyle}`}
         ></div>
      </label>
   );
};
