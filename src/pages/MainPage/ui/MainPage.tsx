import { MainCommunityInfo } from './MainCommunityInfo/MainCommunityInfo';
import { MainFeedbacks } from './MainFeedbacks/MainFeedbacks';
import { MainIndividual } from './MainIndividual/MainIndividual';
import { MainIntro } from './MainIntro/MainIntro';
import { MainPhilosophy } from './MainPhilosophy/MainPhilosophy';
import { MainTop } from './MainTop/MainTop';
import { MainWhereStudy } from './MainWhereStudy/MainWhereStudy';

export const MainPage = () => {
   return (
      <>
         <MainTop />
         <MainPhilosophy />
         <MainIntro />
         <MainWhereStudy />
         <MainCommunityInfo />
         <MainIndividual />
         <MainFeedbacks />
      </>
   );
};
