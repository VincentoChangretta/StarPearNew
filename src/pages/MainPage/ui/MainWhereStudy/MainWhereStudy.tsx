import { withBookImg, withCandleImg } from 'shared/const/images';
import { useInView } from 'shared/hooks/useInView/useInView';
import { AccordionItem } from 'shared/ui/AccordionItem/AccordionItem';
import { Image } from 'shared/ui/Image/Image';
import { Title } from 'shared/ui/Title/Title';

export const AdditionalInfo = () => {
   return (
      <div className='flex justify-between items-center gap-10'>
         <ul className='flex flex-col gap-5 max-w-[800px] text-lg max-810:text-base max-1200:max-w-full'>
            <li>
               <strong className='text-mainBg-second text-2xl max-810:text-xl'>Анагноси:</strong> коллективное изучение
               сложных произведений и разжевывание смыслов для развития аналитических и познавательных способностей.
            </li>
            <li>
               <strong className='text-mainBg-second text-2xl max-810:text-xl'>Симпосии:</strong> совместное чтение
               трактатов, что несут за собой идеи и истории развития культурного кода, морали, этики и прочих сегментов
               жизни, что крутятся вокруг нас ежедневно. Риторика, эрудиция и осознание происходящего развиваются вместе
               с нам на пути познания и обучения
            </li>
            <li>
               <strong className='text-mainBg-second text-2xl max-810:text-xl'>Декамерон:</strong> рассуждения о нашей
               жизни, основанные на реальных историях учеников. Что делать в сложной ситуации, удачи и провалы,
               осознанность и сложность выбора - все это разбирается с отсылками на мудрецов прошлого а в также мы
               рассматриваем какие уроки стоит взять из обыденных ситуаций нашего коммьюнити
            </li>
            <li>
               <strong className='text-mainBg-second text-2xl max-810:text-xl'>Офлайн и онлайн лекции:</strong>{' '}
               регулярные лекции по разбору исторических и культурных феноменов, которые помогают понять как развивался
               наш мир. История человечества это фундамент для формирования мировоззрения и информационной базы, от
               которой строиться наша жизнь
            </li>
         </ul>
         <Image
            imgBoxClassName='max-w-[500px] w-full shrink-0 max-1200:hidden'
            src={withBookImg}
            alt='Платон с книгой'
         />
      </div>
   );
};

export const MainWhereStudy = () => {
   return (
      <section className={`relative mb-0`}>
         <div className='relative z-10 std-container'>
            <div className='flex items-center justify-between gap-10 mb-5 max-1000:flex-col-reverse max-1000:gap-5'>
               <Image
                  imgBoxClassName='max-w-[450px] w-full max-1200:shrink-0 max-810:max-w-[300px]'
                  src={withCandleImg}
                  alt='Мысль логотип'
               />
               <div className='flex flex-col gap-10 max-w-[800px] max-1000:gap-5 max-1000:max-w-full'>
                  <Title className='text-left !mb-0 max-1000:text-center'>
                     Но где же изучать философию и брать практичные смысли и методы?
                  </Title>
                  <p className='font-Bebas text-4xl max-1200:text-3xl max-810:text-2xl'>
                     Для этого я создал свое объединение людей со всего мира от школьников и студентов до действующих
                     специалистов и бизнесменов, что зашивают ее в свою работу и стиль жизни
                  </p>
                  <p className='font-Bebas text-4xl max-1200:text-3xl max-810:text-2xl'>
                     <span className='text-mainBg-second'>Сообщество "Мысль"</span> это про ежедневное изучение себя и
                     своих внутренних страхов и вопросов.{' '}
                     <span className='text-mainBg-second'>
                        Это самый доступный способ изучать и применять философию на практике,
                     </span>
                     который буквально лежит в твоем кармане
                  </p>
               </div>
            </div>
            <AccordionItem title='Какие шаги я предлагаю?' titleClassname='w-fit' content={<AdditionalInfo />} />
         </div>
      </section>
   );
};
