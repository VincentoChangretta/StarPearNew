import { Feedback } from '../data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export interface FeedbackArticleProps {
   data: Feedback;
   full?: boolean;
   changeActiveFeedback?: (feedback: Feedback) => void;
}

export const FeedbackArticle = (props: FeedbackArticleProps) => {
   const { data, full, changeActiveFeedback } = props;
   const { name, position, text } = data;
   const maxLength = 300;

   const cutoffIndex = text.indexOf(' ', maxLength);
   const previewText = cutoffIndex !== -1 ? text.slice(0, cutoffIndex) : text;

   const handleChangeActiveFeedback = () => {
      changeActiveFeedback(data);
   };

   return (
      <article className={!full && `p-5 rounded-stdRadius bg-mainBg-second-light/5 `}>
         <div className='flex flex-col gap-5'>
            <div className='text-center'>
               <div className='w-fit p-5 mx-auto backdrop-blur-2xl rounded-full text-mainBg-second-light border-2 border-mainBg-second text-4xl mb-2'>
                  <FontAwesomeIcon icon={faUser} />
               </div>
               <h3 className='font-Bebas text-4xl text-mainBg-second-light'>{name}</h3>
               <h4 className='text-mainBg-second'>{position}</h4>
            </div>
            <p>{full ? text : `${previewText}...`}</p>
            {!full && (
               <p
                  className='text-xl font-bold text-mainBg-second text-center cursor-pointer'
                  onClick={handleChangeActiveFeedback}
               >
                  Подробнее
               </p>
            )}
         </div>
      </article>
   );
};
