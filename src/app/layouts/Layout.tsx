import { FC, ReactNode } from "react";
import './layout.scss';

type LayoutProps = {
    children: ReactNode
};

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className="layout">
            <header className="layout__header">
                header
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