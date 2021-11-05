import * as React from 'react';

import Header from '../../Elements/Header/Header';
import ButtonAdd from '../../Elements/ButtonAdd/ButtonAdd';
import DashBoard from '../../Elements/DashBoard/DashBoard';

export default function ToDo()
{
    return (
        <main className="Main">
            <Header niv={0}/>

            <DashBoard niv={0}/>

            <ButtonAdd/>
        </main>
    );
};
