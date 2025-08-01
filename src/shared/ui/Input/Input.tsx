import { InputHTMLAttributes } from 'react';

type InputPropsType = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends InputPropsType {
   className?: string;
   inputStyles?: string;
   value?: string;
   truePlaceholder?: string;
   placeholderStyles?: string;
   onChange?: (value: string) => void;
}

export const Input = (props: InputProps) => {
   const {
      className,
      value,
      onChange,
      type = 'text',
      placeholder,
      truePlaceholder,
      placeholderStyles,
      inputStyles,
      ...otherProps
   } = props;

   const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
   };

   return (
      <div className={className}>
         <label>
            <p className={placeholderStyles}>{placeholder}</p>
            <input
               className={`p-4 w-full bg-mainBg-inv/8 backdrop-blur-2xl rounded-[20px] outline-transparent ${inputStyles}`}
               type={type}
               value={value}
               onChange={onChangeHandler}
               placeholder={truePlaceholder}
               autoComplete='off'
               {...otherProps}
            />
         </label>
      </div>
   );
};
