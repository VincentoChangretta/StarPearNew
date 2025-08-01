import { IdMainIntro } from 'shared/const/id';
import { videoPoster } from 'shared/const/images';
import { LinktelegramCommunity } from 'shared/const/links';
import { introVideo } from 'shared/const/videos';
import { Button } from 'shared/ui/Button/Button';
import { ButtonThemes } from 'shared/ui/Button/types/types';
import { Title } from 'shared/ui/Title/Title';
import { Video } from 'shared/ui/Video/Video';

export const MainIntro = () => {

   return (
      <section id={IdMainIntro} >
         <div className='std-container'>
            <Title>А как пользоваться этим инструментом - расскажу дальше</Title>
            <div className='flex flex-col items-center gap-10 max-1000:gap-7'>
               <Video src={introVideo} poster={videoPoster} />
               <Button
                  a
                  to={LinktelegramCommunity}
                  theme={ButtonThemes.STANDART}
                  primaryClassName='!max-w-[500px]'
                  className='text-balance'
               >
                  Переход в закрытый Телеграмм-канал
               </Button>
            </div>
         </div>
      </section>
   );
};
