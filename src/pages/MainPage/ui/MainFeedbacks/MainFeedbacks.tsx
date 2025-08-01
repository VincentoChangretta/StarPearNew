import { Title } from 'shared/ui/Title/Title';
import { FeedbackArticle } from './ui/FeedbackCard';
import { Feedback, feedbacksData } from './data/data';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { IdMainFeedbacks } from 'shared/const/id';

export const MainFeedbacks = () => {
   const [modal, setModal] = useState<boolean>(false);
   const [activeFeedback, setActiveFeedback] = useState<Feedback>(null);

   const handleSetActiveFeedback = useCallback((feedback: Feedback) => {
      setActiveFeedback(feedback);
      setModal(true);
   }, []);

   const handleCloseModal = useCallback(() => {
      setModal(false);
   }, []);

   return (
      <section id={IdMainFeedbacks}>
         <div className='std-container'>
            <Title>Отзывы</Title>
            <div className='grid grid-cols-2 gap-10 max-810:grid-cols-1'>
               {feedbacksData.map((feedback, index) => (
                  <FeedbackArticle key={index} data={feedback} changeActiveFeedback={handleSetActiveFeedback} />
               ))}
            </div>
            {modal && (
               <Modal onClose={handleCloseModal}>
                  <FeedbackArticle data={activeFeedback} full={true} />
               </Modal>
            )}
         </div>
      </section>
   );
};
