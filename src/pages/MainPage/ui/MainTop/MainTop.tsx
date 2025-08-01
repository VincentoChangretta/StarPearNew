import { MatveyMainImg } from 'shared/const/images';
import { Image } from 'shared/ui/Image/Image';

export const MainTop = () => {
   return (
      <section>
         <div className='std-container'>
            <div className='flex items-center justify-between gap-10 mb-10 max-1000:gap-5 max-810:gap-5 max-810:mb-5'>
               <Image
                  src={MatveyMainImg}
                  alt='Матвей Никитин'
                  imgBoxClassName='max-w-[450px] w-full h-[600px] max-1150:max-w-[350px] max-1150:h-[500px] max-1150:shrink-0 max-1000:max-w-[350px] max-1000:h-[450px] max-810:hidden'
                  imgClassName='rounded-stdRadius'
               />
               <div className='max-w-[800px]'>
                  <div className='hidden max-810:flex max-810:gap-2.5 max-810:items-center max-810:mb-5 max-500:flex-col'>
                     <Image
                        src={MatveyMainImg}
                        alt='Матвей Никитин'
                        imgBoxClassName='w-[200px] h-[200px] shrink-0 rounded-full overflow-hidden max-530:w-[150px] max-530:h-[150px] max-500:w-[200px] max-500:h-[200px] max-500:mb-5'
                        imgClassName='!h-[300px] scale-105 max-530:!h-[200px] max-500:!h-[250px]'
                     />
                     <div className='max-500:text-center'>
                        <h1 className='font-Bebas text-[28px] max-530:text-3xl max-500:text-3xl'>
                           Меня зовут <br /> Никитин Матвей Алексеевич
                        </h1>
                        <h2 className='font-Bebas text-mainBg-second text-[28px] max-530:text-3xl max-500:text-3xl'>
                           я преподаватель философии
                        </h2>
                     </div>
                  </div>
                  <div className='mb-10 max-1000:mb-3 max-810:hidden'>
                     <h1 className='font-Bebas text-7xl mb-5 max-1250:text-6xl max-1150:text-5xl max-1000:text-4xl max-1000:mb-3'>
                        Меня зовут <br /> Никитин Матвей Алексеевич
                     </h1>
                     <h2 className='font-Bebas text-7xl text-mainBg-second max-1250:text-6xl max-1150:text-5xl max-1000:text-4xl'>
                        я преподаватель философии
                     </h2>
                  </div>
                  <div className='flex flex-col gap-2.5'>
                     <p>
                        С самого начала своей деятельности я придерживался конкретных целей - нести философию в массы,
                        развивать сферу образования и помогать людям формировать свое личное мировоззрение
                     </p>
                     <p>
                        От того уже несколько лет я веду блоги по философии и на данный момент являюсь одним из самых
                        популярных философов в СНГ.
                     </p>
                     <p>
                        За все время своей деятельности, я обучил более 500 человек и провел 150+ онлайн-оффлайн
                        мероприятий
                     </p>
                  </div>
               </div>
            </div>
            <div className='relative z-10 flex flex-col gap-2.5 p-7 rounded-stdRadius bg-mainBg-second/30 max-810:p-5'>
               <p>
                  «Каждый герой мультфильма - своего рода сверхчеловек по Ницше», постоянный вопрос «в чём тут
                  философия?» к какой-нибудь комичной ситуации и отметкой моего аккаунта в комментариях - вероятно с
                  такими явлениями я у вас ассоциируюсь.
               </p>
               <p>
                  Своим интернет-контентом и мероприятиями я хочу показать практичность философии в реальной жизни и её
                  влияние на мировоззрение и формирование личности.
               </p>
            </div>
         </div>
      </section>
   );
};
