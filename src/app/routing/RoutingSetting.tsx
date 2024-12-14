import { AsyncPage } from "pages/async-page";
import { HomePage, InfoPage } from "pages/index";
import { lazy, ReactNode } from "react";

type RoutingSetting = {
    path: string;
    element: ReactNode | null;
}[];



const AsyncInfoPage = lazy(() =>
    import('pages/info-page').then(({ InfoPage }) => ({
        default: InfoPage,
    }))
);
const AsyncPageLazy = lazy(() =>
    import('pages/async-page').then(({ AsyncPage }) => ({
        default: AsyncPage,
    }))
);

export const routingSetting: RoutingSetting = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/info',
        element: <AsyncInfoPage />
    },
    {
        path: '/async',
        element: <AsyncPageLazy />
    },
];