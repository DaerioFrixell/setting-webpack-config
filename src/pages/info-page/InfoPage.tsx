import { Title } from 'shared/ui-kit/ui/title';
import { Anchor } from 'shared/ui-kit/ui/anchor';
import { loaderList, plaginList, stackList } from './static';
import { Tag } from 'shared/ui-kit/ui/tag';

import './infoPage.scss';
import { MainTitle } from 'shared/ui-kit/ui/main-title';

export const InfoPage = () => {
    return (
        <div className='info'>
            <MainTitle title='Информация по проекту' />

            <div className='info__block'>
                <Title text='Стек' />

                <div className='info-page-links'>
                    {stackList.map(stack =>
                        <Anchor
                            key={stack.href}
                            href={stack.href}
                            text={`${stack.title} ${stack.version}`}
                        />
                    )}
                </div>
            </div>

            <div className='info__block'>
                <Title text='Сборка' />

                <div className='info-text'>
                    <p>
                        В качестве бандлера используется
                        <Tag text='Webpack' />
                        +
                        <Tag text='Webpack-Dev-Server 5.1.0' /> версии.
                    </p>

                    <p>
                        TypeScript компилируется через
                        <Tag text='Babel' />
                        .
                    </p>

                    <p>
                        Проверка типов делается через
                        <Tag text='ts-loader' />
                        .
                    </p>
                </div>
            </div>

            <div className='info__block'>
                <Title text='Подключены следующиее лоадеры:' />

                <div className='info-page-links'>
                    {loaderList.map(loader =>
                        <Anchor
                            key={loader.title}
                            href={loader.links.webpack}
                            text={`${loader.title} ${loader.version}`}
                        />
                    )}
                </div>
            </div>

            <div className='info__block'>
                <Title text='Подключены следующиее плагины:' />

                <div className='info-page-links'>
                    {plaginList.map(plugin =>
                        <Anchor
                            key={plugin.title}
                            href={plugin.links.github}
                            text={`${plugin.title} ${plugin.version}`}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};