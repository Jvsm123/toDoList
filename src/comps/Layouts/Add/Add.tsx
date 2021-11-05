import * as React from 'react';

import Header from '../../Elements/Header/Header';
import DashBoard from '../../Elements/DashBoard/DashBoard';

export default class Add extends React.Component< {}, {} >
{
    render(): React.ReactElement<HTMLElement>
    {
        return (
            <main className="Main">
                <Header niv={2}/>

                <DashBoard niv={2}/>
            </main>
        );
    };
};
