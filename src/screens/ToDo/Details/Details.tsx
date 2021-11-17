import * as React from 'react';

import Header from '../../../components/UI/Header/Header';
import DashBoard from '../../../components/UI/DashBoard/DashBoard';

type StateLocation =
{
    pathname: string;
    search: string;
    hash: string;
    state: { dados: [ string, [Object], string ] };
    key: string;
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
                    pagina={1}
                    router={ this.props.location.state.dados[0] }
                />
             
                <DashBoard
                    pagina={1}
                    routerDataTasks={ this.props.location.state.dados[1] }
                    routerDataId={ this.props.location.state.dados[2] }
                />
            </main>
        );
    };
};
