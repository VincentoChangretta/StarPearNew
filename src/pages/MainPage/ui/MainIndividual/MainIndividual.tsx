import { useCallback, useState } from 'react';
import { IdMainIndividual } from 'shared/const/id';
import { individualImg } from 'shared/const/images';
import { Button } from 'shared/ui/Button/Button';
import { ButtonThemes } from 'shared/ui/Button/types/types';
import { Image } from 'shared/ui/Image/Image';
import { Modal } from 'shared/ui/Modal/Modal';
import { PhilosophyCourse } from 'shared/ui/PhilosophyCourse/PhilosophyCourse';
import { Title } from 'shared/ui/Title/Title';

export const MainIndividual = () => {
   const [modal, setModal] = useState<boolean>(false);

   const handleOpenModal = useCallback(() => {
      setModal(true);
   }, []);
   const handleCloseModal = useCallback(() => {
      setModal(false);
   }, []);

   return (
      <section id={IdMainIndividual}>
         <div className='std-container'>
            <div className='mb-5 '>
               <Title>Формат индивидуального взаимодействия</Title>
               <p>
                  Индивидуальное занятие предполагает собой раскрытие ваших философских вопросов, открытого обсуждения
                  волнующих вас тематик либо познание неизученного, что может расширить ваше сознание за счет концепций,
                  что были заложены в науки, религию и культуру человечества
               </p>
            </div>
            <div className='flex justify-between items-center gap-[50px] max-1000:flex-col'>
               <Image imgBoxClassName='max-w-[750px]' src={individualImg} alt='Индивидуальные занятия' />
               <div className='flex flex-col gap-5 max-w-[500px] max-1000:max-w-full max-1000:items-center'>
                  <p className='text-4xl font-Bebas max-810:text-3xl text-mainBg-second-light'>
                     Также я предлагаю свой авторский путь изучения философии с полного нуля, погружение в историю
                     развития философии, человеческой мысли и мировоззрения.
                  </p>
                  <Button theme={ButtonThemes.STANDART} onClick={handleOpenModal}>
                     К формату
                  </Button>
               </div>
            </div>
            {modal && (
               <Modal onClose={handleCloseModal}>
                  <PhilosophyCourse />
               </Modal>
            )}
         </div>
      </section>
   );
};
