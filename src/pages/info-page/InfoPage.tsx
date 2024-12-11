import { Title } from 'shared/ui-kit/ui/title';
import { Anchor } from 'shared/ui-kit/ui/anchor';
import { useLinks } from './hooks';

import './infoPage.scss';

export const InfoPage = () => {
    const { stackLinks } = useLinks();

    return (
        <div>
            <Title text='Информация по проекту' />
            <div>
                <Title text='Стек' />

                <div className='info-page-links'>
                    {stackLinks.map(stack =>
                        <Anchor
                            href={stack.href}
                            text={`${stack.title} ${stack.version}`}
                        />
                    )}
                </div>
            </div>

            <div>
                <Title text='Сборка' />

                <div>
                    <span>В качестве бандлера используется Webpack 5.97 версии + Webpack-Dev-Server</span>

                    <span>TypeScript компилируется через Babel. Проверка типов делается через ts-loader</span>

                    <div>
                        <span>Подключены следующиее лоадеры:</span>
                        <span>ts-node 10</span>
                        <span>ts-loader 9</span>
                        <span>babel-loader 9</span>
                        <span>sass-loader 16</span>
                        <span>css-loader 7</span>
                        <span>style-loader 4</span>
                    </div>

                    <div>
                        <span>Подключены следующиее плагины:</span>
                        <span>html-webpack-plugin 5</span>
                        <span>fork-ts-checker-webpack-plugin 9</span>
                        <span>babel-loader 9</span>
                        <span>sass-loader 16</span>
                        <span>css-loader 7</span>
                        <span>style-loader 4</span>
                    </div>
                </div>
            </div>
        </div>
    );
};