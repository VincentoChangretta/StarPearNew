import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { Pathnames } from './pathnames';

export enum AppRoutes {
   MAIN = 'MAIN',
   NOT_FOUND = 'NOT_FOUND',
}

export const RoutePath: Record<AppRoutes, Pathnames> = {
   [AppRoutes.MAIN]: Pathnames.MAIN,
   [AppRoutes.NOT_FOUND]: Pathnames.NOT_FOUND,
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
   [AppRoutes.MAIN]: {
      path: RoutePath.MAIN,
      element: <MainPage />,
   },
   [AppRoutes.NOT_FOUND]: {
      path: RoutePath.NOT_FOUND,
      element: <MainPage />,
   },
};
