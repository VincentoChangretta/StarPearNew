import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Linktelegram, Linktiktok, Linkyoutube } from 'shared/const/links';

export const Links = () => {
   return (
      <ul className='flex items-center gap-5 text-4xl max-810:text-3xl'>
         <li className='duration-300 cursor-pointer hover:scale-110 hover:text-mainBg-second-light'>
            <a href={Linktelegram} target='_blank'>
               <FontAwesomeIcon icon={faTelegram} />
            </a>
         </li>
         <li className='duration-300 cursor-pointer hover:scale-110 hover:text-mainBg-second-light'>
            <a href={Linktiktok} target='_blank'>
               <FontAwesomeIcon icon={faTiktok} />
            </a>
         </li>
         <li className='duration-300 cursor-pointer hover:scale-110 hover:text-mainBg-second-light'>
            <a href={Linkyoutube} target='_blank'>
               <FontAwesomeIcon icon={faYoutube} />
            </a>
         </li>
      </ul>
   );
};
