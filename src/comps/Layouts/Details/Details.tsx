import * as React from 'react';

import Header from '../../Elements/Header/Header';
import DashBoard from '../../Elements/DashBoard/DashBoard';
import AddButton from '../../Elements/ButtonAdd/ButtonAdd';

type StateLocation =
{
    pathname: string,
    search: string,
    hash: string,
    state: { dados: [ string, [Object] ] },
    key: string
};

type Props =
{
    infos: Array<any>,
    location: StateLocation
};

export default class Details extends React.Component< Props, any >
{
    render(): React.ReactElement<HTMLElement>
    {
        return (
            <main className="Main">
                <Header
                    niv={1}
                    router={ this.props.location.state.dados[0] }
                />
             
                <DashBoard
                    niv={1}
                    routerData={ this.props.location.state.dados[1] }
                />
             
                <AddButton/>
            </main>
        );
    };
};
