import * as React from 'react';

import Header from '../../../components/UI/Header/Header';
import DashBoard from '../../../components/UI/DashBoard/DashBoard';

export default class Add extends React.Component< {}, {} >
{
    render(): React.ReactElement<HTMLElement>
    {
        return (
            <main className="Main">
                <Header pagina={2}/>

                <DashBoard pagina={2}/>
            </main>
        );
    };
};
