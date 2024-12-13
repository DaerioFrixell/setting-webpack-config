import { Title } from 'shared/ui-kit/ui/title';
import { Anchor } from 'shared/ui-kit/ui/anchor';
import { loaderList, plaginList, stackList } from './static';
import { Tag } from 'shared/ui-kit/ui/tag';

import './infoPage.scss';

export const InfoPage = () => {
    return (
        <div>
            <Title text='Информация по проекту' />
            <div>
                <Title text='Стек' />

                <div className='info-page-links'>
                    {stackList.map(stack =>
                        <Anchor
                            href={stack.href}
                            text={`${stack.title} ${stack.version}`}
                        />
                    )}
                </div>
            </div>

            <div>
                <Title text='Сборка' />

                <div className='info-text'>
                    <p>
                        В качестве бандлера используется
                        <Tag text='Webpack' />
                        версии +
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

            <div >
                <Title text='Подключены следующиее лоадеры:' />

                <div className='info-page-links'>
                    {loaderList.map(loader =>
                        <Anchor
                            href={loader.links.webpack}
                            text={`${loader.title} ${loader.version}`}
                        />
                    )}
                </div>
            </div>

            <div>
                <Title text='Подключены следующиее плагины:' />

                <div className='info-page-links'>
                    {plaginList.map(plugin =>
                        <Anchor
                            href={plugin.links.github}
                            text={`${plugin.title} ${plugin.version}`}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};