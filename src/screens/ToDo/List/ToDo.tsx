import { Component } from 'react';

import Header from '../../../components/UI/Header/Header';
import ButtonAdd from '../../../components/UI/ButtonAdd/ButtonAdd';
import DashBoard from '../../../components/UI/DashBoard/DashBoard';

export default class ToDo extends Component< {}, {} >
{
    render()
    {
        return (
            <main className="Main">
                <Header pagina={0}/>
             
                <DashBoard pagina={0}/>
             
                <ButtonAdd/>
            </main>
        );
    };
};
