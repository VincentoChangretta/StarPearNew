import { IdMainCommunity } from 'shared/const/id';
import { glareImg, lectionsImg } from 'shared/const/images';
import { LinktelegramCommunityTribute } from 'shared/const/links';
import { Button } from 'shared/ui/Button/Button';
import { ButtonThemes } from 'shared/ui/Button/types/types';
import { Image } from 'shared/ui/Image/Image';
import { Title } from 'shared/ui/Title/Title';

export const MainCommunityInfo = () => {
   return (
      <section
         id={IdMainCommunity}
      >
         <div className='std-container'>
            <div className='mb-10'>
               <Title>В базе знаний сообщества уже находяться:</Title>
               <div className='flex items-center justify-between text-xl gap-[50px] max-1200:text-lg max-1000:flex-col max-810:text-base'>
                  <div className='flex flex-col gap-5'>
                     <ul className='list-with-gcovMarker max-w-[800px] flex flex-col gap-5'>
                        <li>100+ записей вышеперечисленных мероприятий</li>
                        <li>конспекты и чек-листы мероприятий Мысли</li>
                        <li>
                           тезисные краткие описания произведений, что помогают ориентироваться в трактах, что прошли
                           через наши руки
                        </li>
                        <li>путеводитель по Мысли</li>
                        <li>наша библиотека философских и научных трактатов.</li>
                     </ul>
                     <p className='text-mainBg-second font-Bebas text-4xl max-1200:text-3xl'>
                        Наша база постоянно пополняется и всегда открыта для членов коммьюнити для удаленного изучения
                     </p>
                  </div>
                  <div className='relative shrink-0'>
                     <Image
                        imgBoxClassName='max-w-[450px] max-810:max-w-[300px]'
                        imgClassName='rounded-stdRadius'
                        src={lectionsImg}
                        alt='Лекции'
                     />
                     <Image
                        src={glareImg}
                        alt='Истина'
                        imgBoxClassName='max-w-[120px] absolute top-0 left-[25px] animate-toScale max-810:left-0 max-810:top-[-20px]'
                     />
                  </div>
               </div>
            </div>
            <div className='flex flex-col gap-5 items-center justify-center'>
               <Title className='!mb-0 !text-mainBg-inv'>Для вступления в "МЫСЛЬ" нажмите</Title>
               <Button a to={LinktelegramCommunityTribute} theme={ButtonThemes.STANDART}>
                  Зарегистрироваться
               </Button>
            </div>
         </div>
      </section>
   );
};
