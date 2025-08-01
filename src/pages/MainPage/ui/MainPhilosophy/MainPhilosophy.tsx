import { useCallback, useState } from 'react';
import { SocratesDeathImg } from 'shared/const/images';
import { useInView } from 'shared/hooks/useInView/useInView';
import { Modal } from 'shared/ui/Modal/Modal';

export const MainPhilosophy = () => {
   const { ref, isVisible } = useInView(); // 100px "запас" до появления
   const [modal, setModal] = useState<boolean>(false);

   const onModalClose = useCallback(() => {
      setModal(false);
   }, []);

   return (
      <section className='bg-no-repeat bg-top bg-cover' style={{ backgroundImage: `url(${SocratesDeathImg})` }}>
         <div className='std-container'>
            <div className='flex items-center justify-center mt-[-200px] pt-[100px] min-h-[80svh] relative max-1000:min-h-[60svh] max-810:min-h-[50svh] max-1000:mt-[-150px]'>
               <div ref={ref} className='relative w-[200px] h-[200px]'>
                  <div
                     className={`absolute left-[-250px] top-[-50px] origin-right max-810:left-[-110px] max-810:top-[40px] max-530:left-[-100px] max-405:left-[-20px] ${
                        isVisible ? 'animate-showMessage' : 'opacity-0 scale-0'
                     } `}
                  >
                     <svg
                        width='300'
                        height='100'
                        viewBox='0 0 300 80'
                        className='drop-shadow-xl max-810:w-[210px] max-810:h-[80px]'
                     >
                        <path
                           d='M20,0 h260 a20,20 0 0 1 20,20 v30 a20,20 0 0 1 -20,20 h-20 v20 l-40,-20 h-200 a20,20 0 0 1 -20,-20 v-30 a20,20 0 0 1 20,-20 z'
                           fill='#fff'
                        />
                     </svg>
                     <strong className='absolute inset-0 flex items-center justify-center text-center mb-2 text-mainBg max-810:text-sm'>
                        Что такое философия?
                     </strong>
                  </div>

                  <div
                     className={`absolute right-[-230px] bottom-0 origin-left cursor-pointer group transition-all duration-300 scale-0 opacity-0 max-810:right-[-80px] max-810:bottom-[10px] max-530:right-[-90px] max-405:right-[0px] ${
                        isVisible && 'animate-showMessageLater'
                     }`}
                     onClick={() => setModal(true)}
                  >
                     <svg width='300' height='100' viewBox='0 0 300 80' className='max-810:w-[210px] max-810:h-[80px]'>
                        <path
                           d='M280,0 h-260 a20,20 0 0 0 -20,20 v30 a20,20 0 0 0 20,20 h20 v20 l40,-20 h200 a20,20 0 0 0 20,-20 v-30 a20,20 0 0 0 -20,-20 z'
                           className='fill-white group-hover:fill-mainBg-second transition-colors duration-200'
                        />
                     </svg>
                     <strong className='absolute inset-0 flex items-center justify-center text-center mb-2 text-mainBg transition-colors duration-200 group-hover:text-mainBg-inv max-810:text-sm'>
                        Философия это...
                     </strong>
                  </div>
               </div>
            </div>
         </div>
         {modal && (
            <Modal onClose={onModalClose}>
               <div className='flex flex-col gap-2.5'>
                  <p> Философия это про нас, а не про что-то внеземное, к чему ни прикоснуться, ни представить.</p>
                  <p>
                     Философия это про мудрость, про осознанность и формирование инновационных идей для развития нашей
                     жизни.
                  </p>
                  <p>
                     Философия это простейший, но при этом один из сложнейших инструментов описания нашей жизни, который
                     люди закладывали тысячелетиями, с помощью которого развивали и создавали другие науки, которые дали
                     нам в свою очередь возможность улететь в космос.
                  </p>
               </div>
            </Modal>
         )}
      </section>
   );
};
