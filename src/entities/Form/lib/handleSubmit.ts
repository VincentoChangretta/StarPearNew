const mailto = './mail.php';

export const fetchToMail = async (e: React.FormEvent<HTMLFormElement>, form: HTMLFormElement): Promise<boolean> => {
   e.preventDefault();
   const formData = new FormData(form);

   try {
      const response = await fetch(mailto, {
         method: 'POST',
         body: formData,
      });

      if (response.ok) {
         form.reset();
         return true;
      } else {
         return false;
      }
   } catch (error) {
      console.error('Ошибка:', error);
      return false;
   }
};

export const handleSubmit = async (
   e: React.FormEvent<HTMLFormElement>,
   form: HTMLFormElement,
   setFetchModal: (value: boolean) => void,
   isCheckedPrivacy: boolean,
   sendError: boolean,
   setSendError: (value: boolean) => void,
): Promise<void> => {
   const result = await fetchToMail(e, form);
   console.log(result);
   console.log(isCheckedPrivacy);

   if (result && isCheckedPrivacy) {
      if (sendError) setSendError(false);
      setFetchModal(true);
      setTimeout(() => {
         setFetchModal(false);
      }, 4500);
   } else if (!isCheckedPrivacy) {
      setSendError(true);
      setTimeout(() => setSendError(false), 1500);
   }
};
