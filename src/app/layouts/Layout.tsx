import { FC, ReactNode } from "react";
import { NavLink } from "react-router";
import './layout.scss';

type LayoutProps = {
    children: ReactNode
};

const navSetting = [
    {
        to: '/',
        title: 'Главная',
    },
    {
        to: '/about',
        title: 'О проекте',
    },
    {
        to: '/async',
        title: 'Асинхрон',
    },
]

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className="layout">
            <header className="layout__header">
                {navSetting.map(nav =>
                    <NavLink to={nav.to} key={nav.to} className={({ isActive }) =>
                        [
                            'layout__header__default',
                            isActive ? "layout__header__active" : "",
                        ].join(" ")
                    }>
                        {nav.title}
                    </NavLink>)}
            </header>

            <div className="layout__wrapper-content">
                <aside className="layout__wrapper-content__sidebar">
                    side
                </aside>

                <main>
                    {children}
                </main>
            </div>
        </div>
    );
};