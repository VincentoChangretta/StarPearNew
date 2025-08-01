import { IdMainCommunity, IdMainFeedbacks, IdMainIndividual, IdMainIntro } from 'shared/const/id';

export const Navigation = () => {
   return (
      <ul className='flex gap-5 text-xl max-1200:flex-col max-1200:text-center max-810:text-base max-810:gap-2 max-435:text-sm max-435:gap-1.5'>
         <li>
            <a href={`#${IdMainIntro}`}>Как применять философию?</a>
         </li>
         <li>
            <a href={`#${IdMainCommunity}`}>Сообщество "Мысль"</a>
         </li>
         <li>
            <a href={`#${IdMainIndividual}`}>Индивидуальное взаимодействие</a>
         </li>
         <li>
            <a href={`#${IdMainFeedbacks}`}>Отзывы</a>
         </li>
      </ul>
   );
};
