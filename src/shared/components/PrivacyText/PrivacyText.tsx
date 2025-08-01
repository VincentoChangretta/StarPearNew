import { Checkbox } from 'shared/ui/Checkbox/Checkbox';

interface PrivacyTextProps {
   sendError: boolean;
   openModal: () => void;
   checkedPrivacy: boolean;
   setCheckedPrivacy: (checked: boolean) => void;
}

export const PrivacyText = (props: PrivacyTextProps) => {
   const { sendError, openModal, checkedPrivacy, setCheckedPrivacy } = props;
   return (
      <div className='flex items-center justify-center gap-2.5'>
         <Checkbox isCheckedPrivacy={checkedPrivacy} setIsCheckedPrivacy={setCheckedPrivacy} error={sendError} />
         <p className={`${sendError && 'text-red-400'} duration-200 text-xs max-w-[400px]`}>
            Я ознакомлен и согласен
            <span className='underline cursor-pointer' onClick={openModal}>
               {' '}
               с политикой конфиденциальности
            </span>
         </p>
      </div>
   );
};
