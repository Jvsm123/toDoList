import { Component } from 'react';

import Header from '../../../components/UI/Header/Header';
import DashBoard from '../../../components/UI/DashBoard/DashBoard';

export default class Add extends Component< {}, {} >
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
