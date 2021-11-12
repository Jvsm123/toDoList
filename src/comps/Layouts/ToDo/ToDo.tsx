import { Component } from 'react';

import Header from '../../Elements/Header/Header';
import ButtonAdd from '../../Elements/ButtonAdd/ButtonAdd';
import DashBoard from '../../Elements/DashBoard/DashBoard';

export default class ToDo extends Component< {}, {} >
{
    render()
    {
        return (
            <main className="Main">
                <Header nivel={0}/>
             
                <DashBoard nivel={0}/>
             
                <ButtonAdd/>
            </main>
        );
    };
};
