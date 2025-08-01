import { useCallback, useEffect, useRef, useState } from 'react';
import { PrivacyPolicy } from 'shared/components/PrivacyPolicy/PrivacyPolicy';
import { Button } from 'shared/ui/Button/Button';
import { ButtonThemes } from 'shared/ui/Button/types/types';
import { DropDown } from 'shared/ui/DropDown/DropDown';
import { HiddenInput } from 'shared/ui/Input/HiddenInputs';
import { Input } from 'shared/ui/Input/Input';
import { Modal } from 'shared/ui/Modal/Modal';
import { Courses } from 'shared/ui/PhilosophyCourse/data/data';
import { handleSubmit } from '../lib/handleSubmit';
import { PrivacyText } from 'shared/components/PrivacyText/PrivacyText';
import { TelegramInput } from 'shared/ui/Input/TelegramInput';

interface FormProps {
   className?: string;
   activeCourse?: string;
}

export const Form = (props: FormProps) => {
   const { className, activeCourse } = props;
   const [name, setName] = useState<string>('');
   const [telegram, setTelegram] = useState<string>('');
   const [activeProgram, setActiveProgram] = useState<string>(
      activeCourse || 'По какой программе вы хотели бы заниматься?',
   );
   const [checkedPrivacy, setCheckedPrivacy] = useState<boolean>(false);
   const [sendError, setSendError] = useState(false);
   const [fetchDescr, setFetchDescr] = useState(false);
   const [modal, setModal] = useState<boolean>(false);
   const formRef = useRef<HTMLFormElement>(null);

   const handleOpenModal = () => {
      setModal(true);
   };
   console.log(fetchDescr);

   const handleCloseModal = useCallback(() => {
      setModal(false);
   }, []);

   const handleSetActiveProgram = useCallback((program: string) => {
      setActiveProgram(program);
   }, []);

   useEffect(() => {
      if (activeCourse) {
         setActiveProgram(activeCourse);
      }
   }, [activeCourse]);

   return (
      <form
         ref={formRef}
         className={`max-w-xl mx-auto grid gap-6 ${className}`}
         onSubmit={e => handleSubmit(e, formRef.current, setFetchDescr, checkedPrivacy, sendError, setSendError)}
      >
         <div className='grid gap-4'>
            <HiddenInput />
            <Input name='Имя' type='text' truePlaceholder='Как вас зовут' required value={name} onChange={setName} />
            <TelegramInput
               name='Телеграм'
               type='text'
               truePlaceholder='Ваш тег в телеграмме'
               value={telegram}
               required
               onChange={setTelegram}
            />
            <Input name='Программа' type='hidden' className='hidden' value={activeProgram} />
            <DropDown
               options={[{ text: Courses.RECCOMENDED }, { text: Courses.CUSTOM_THEME }]}
               activeOption={activeProgram}
               state={activeProgram}
               changeState={handleSetActiveProgram}
            />
         </div>
         <Button theme={ButtonThemes.STANDART_PRIMARY} primaryClassName='mx-auto'>
            Записаться
         </Button>

         <PrivacyText
            sendError={sendError}
            openModal={handleOpenModal}
            checkedPrivacy={checkedPrivacy}
            setCheckedPrivacy={setCheckedPrivacy}
         />
         <p className={fetchDescr ? 'block text-sm text-center' : 'hidden'}>Заявка успешно отправлена!</p>
         {modal && (
            <Modal onClose={handleCloseModal}>
               <PrivacyPolicy />
            </Modal>
         )}
      </form>
   );
};
