import { FC, ReactNode } from "react";
import { NavLink } from "react-router";
import './layout.scss';

type LayoutProps = {
    children: ReactNode
};

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className="layout">
            <header className="layout__header">
                <NavLink to='/'>
                    Главная
                </NavLink>

                <NavLink to='/info'>
                    Информация
                </NavLink>
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