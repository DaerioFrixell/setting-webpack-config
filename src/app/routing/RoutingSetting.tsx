import { HomePage, InfoPage } from "pages/index";
import { ReactNode } from "react";

type RoutingSetting = {
    path: string;
    element: ReactNode | null;
}[];

export const routingSetting: RoutingSetting = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/info',
        element: <InfoPage />
    },
];