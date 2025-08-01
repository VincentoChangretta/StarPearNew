import { InputHTMLAttributes, memo } from 'react';
import { Input } from './Input';

type InputPropsType = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface TelegramInputProps extends InputPropsType {
   value?: string;
   onChange: (value: string) => void;
   placeholder?: string;
   className?: string;
   inputStyles?: string;
   placeholderStyles?: string;
   truePlaceholder?: string;
}

export const TelegramInput = memo((props: TelegramInputProps) => {
   const { value = '', onChange, ...otherProps } = props;

   const handleChange = (val: string) => {
      if (val.trim() === '') {
         onChange('');
         return;
      }
      if (!val.startsWith('@')) {
         val = '@' + val.replace(/@/g, '');
      }

      onChange(val);
   };

   return <Input type='text' pattern='^@?[a-zA-Z0-9_]{5,32}$' value={value} onChange={handleChange} {...otherProps} />;
});
