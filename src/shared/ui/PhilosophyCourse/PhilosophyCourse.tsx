import { FC, useCallback, useState } from 'react';
import { Title } from '../Title/Title';
import { Accordion } from '../Accordion/Accordion';
import { Button } from '../Button/Button';
import { ButtonThemes } from '../Button/types/types';
import { Form } from 'entities/Form';
import { LinktelegramInline } from 'shared/const/links';
import { IdModalForm } from 'shared/const/id';
import { Courses, faqs, lessons } from './data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export const PhilosophyCourse: FC = () => {
   const [program, setProgram] = useState<boolean>(false);
   const [activeCourse, setActiveCourse] = useState<string>('');

   const handleSetActiveCourse = useCallback((course: string) => {
      setActiveCourse(course);
   }, []);

   const programBtn =
      'bg-mainBg-second text-white px-6 py-3 rounded-stdRadius duration-200 mb-10 cursor-pointer hover:bg-mainBg-second-light mx-auto block text-lg max-810:text-base max-380:text-sm';

   return (
      <section className='mb-0'>
         <Title>Рекомендованная программа занятий</Title>
         <div className='flex flex-col gap-4 mb-5'>
            <p>
               Путь изучения философии, который я предлагаю, состоит из 18 занятий, где мы совместно пройдем по каждой
               ступеньке развития философии и человеческой мысли, начиная от до Сократовских времен и заканчивая
               философией 21 века
            </p>
            <p>
               Каждая ступень представляет собой постепенное изучение ключевых разделов человеческого мировоззрения и
               инструментов взаимодействия с окружающим миром и социумом
            </p>
            <p>
               Мы затронем как самых популярных - Ницше, Кант, Гегель, Сократ, так и не менее значимых, но уступающим в
               известности своим коллегам мудрецов - Кузанский, Рассел, Витгенштейн и прочие
            </p>
         </div>
         {!program && (
            <button className={programBtn} onClick={() => setProgram(prev => !prev)}>
               Разверни и узнай подробности нашего пути
               <FontAwesomeIcon className='ml-1' icon={faChevronDown} />
            </button>
         )}

         {program && (
            <>
               <div className='grid gap-6 mb-5'>
                  {lessons.map((lesson, idx) => (
                     <div key={idx}>
                        <h3 className='text-xl text-mainBg-second-light font-semibold mb-2 max-380:text-lg'>
                           {lesson.title}
                        </h3>
                        <ul className='grid list-disc pl-6 gap-2 max-435:pl-3'>
                           {lesson.content.map((item, index) => (
                              <li key={index}>{item}</li>
                           ))}
                        </ul>
                     </div>
                  ))}
               </div>
               <button className={programBtn} onClick={() => setProgram(prev => !prev)}>
                  Свернуть
                  <FontAwesomeIcon className='ml-1' icon={faChevronUp} />
               </button>
            </>
         )}

         <div className='mt-12 text-center'>
            <p className='text-2xl font-bold mb-2 text-mainBg-second max-435:text-xl'>
               Цена: <span className='line-through mr-1'>72 000₽</span>{' '}
               <span className='text-mainBg-second-light'>64 800₽</span>
            </p>
            <p className='text-lg mb-4 max-435:text-base'>3 пробных занятия — 12 000₽</p>
            <Button
               onClick={() => handleSetActiveCourse(Courses.RECCOMENDED)}
               a
               to={`#${IdModalForm}`}
               theme={ButtonThemes.STANDART_PRIMARY}
               primaryClassName='mx-auto'
            >
               Записаться
            </Button>
         </div>

         <div className='mt-16'>
            <Title>FAQ</Title>
            <Accordion items={faqs} />
         </div>

         <div className='mt-20'>
            <Title>Дополнительные темы</Title>

            <div className='flex flex-col gap-4'>
               <p className='text-mainBg-second-light'>
                  Для тех, кто ищет дополнительные темы, на которые я уже проводил лекции и семинары, и хочет от меня
                  узнать интересующие темы
               </p>
               <p className='text-mainBg-second-light'>Для начала опишу области по которым я не буду давать занятие.</p>
               <ul className='grid list-disc pl-6 gap-2 max-435:pl-3'>
                  <li>Политическая философия/философия политики</li>
                  <li>Восточная философия и восточное религиоведение (Индия, Китай)</li>
                  <li>Эзотерика и все к ней прилегающее</li>
               </ul>
               <p className='text-mainBg-second-light'>
                  Снизу перечислил темы по философии, которые я знаю. Список хоть и длинный, но я все равно не смог
                  уместить в него все философские концепции про которые я мог бы рассказать, поэтому можете подать
                  заявку и уточнить.
               </p>
               <ul className='grid list-disc pl-6 gap-2 max-435:pl-3'>
                  <li>Античная философия (все школы греческого и римского периода)</li>
                  <li>Средневековая философия (Западная и Восточная христианская философия)</li>
                  <li>Философия Эпохи Возрождения</li>
                  <li>Философия Нового времени (Рационалисты и эмпиристы)</li>
                  <li>Философия Эпохи Просвещения</li>
                  <li>
                     Немецкая классическая философия (Кант, Фихте, Шеллинг, Гегель, а также их дальнейшие последователи)
                  </li>
                  <li>Иррационализм и философия жизни (Кьеркегор, Ницше, Шопенгауэр)</li>
                  <li>Позитивизм</li>
                  <li>Утилитаризм (этика и политическая философия)</li>
                  <li>Неокантианство (возрождение кантовских идей)</li>
                  <li>Феноменология</li>
                  <li>Атеистический экзистенциализм</li>
                  <li>Структурализм, постструктурализм и деконструкция</li>
                  <li>Аналитические философы 20-го века</li>
                  <li>Философия науки</li>
               </ul>

               <div className='text-center mt-8'>
                  <p className='text-2xl font-bold mb-2 text-mainBg-second max-435:text-xl'>
                     <span className='text-mainBg-second-light'>Цена: одно занятие — 5000₽</span>
                  </p>
                  <p className='text-xl mb-4 max-435:text-base'>Три занятия — 13 500₽</p>
                  <Button
                     onClick={() => handleSetActiveCourse(Courses.CUSTOM_THEME)}
                     a
                     to={`#${IdModalForm}`}
                     theme={ButtonThemes.STANDART_PRIMARY}
                     primaryClassName='mx-auto'
                  >
                     Записаться
                  </Button>
               </div>
            </div>
         </div>

         <section id={IdModalForm} className='mt-16 mb-0'>
            <Title>Записаться на занятия</Title>
            <Form className='mb-10' activeCourse={activeCourse} />
            <p className='text-center text-sm'>
               Для связи и записи <br /> напрямую —{' '}
               <span className='font-bold'>
                  <a href={LinktelegramInline} target='_blank'>
                     @Starpear1723
                  </a>
               </span>
            </p>
         </section>
      </section>
   );
};
