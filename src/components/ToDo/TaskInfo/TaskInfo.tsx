import { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Api } from '../../Functions/Api';

import InfoCards from './InfoCards/InfoCards';

type State =
{
    redirectTo: null | string;
    tasks: Array< any >;
};

type Props =
{
    tasks: [ Object ] | undefined;
    id: string | undefined;
};

export default class TasksInfo extends Component< Props, State >
{
    constructor( props: Props )
    {
        super( props );
     
        this.state = { redirectTo: null, tasks: [] };
     
        this.api = this.api.bind( this );
    };
 
    async api( opt: number, task: Array< any > ): Promise< void >
    {
        const newData =
        {
            Nome: task[0],
            Tempo: task[1],
            Feito: task[2]
        };
     
        if( opt < 1 ) await Api.update( { Id: task[3], newData } );
        else
        {
            const { data } = await Api.delete( { Id: task[3], newData } );
         
            if( data.Tarefas ) this.setState( { tasks: data.Tarefas } );
            else this.setState( { redirectTo: "/" } );
        };
    };
 
    componentDidMount(): void
    {
        this.props.tasks && this.setState( { tasks: this.props.tasks } );
    };
 
    render(): React.ReactElement<HTMLElement>
    {
        if( this.state.redirectTo )
            return <Redirect to={ this.state.redirectTo }/>
     
        return (
            <div className="TaskInfo">
                { this.state.tasks.length > 0
                    && this.state.tasks.map( (i: any) =>
                        <InfoCards
                            task={ i }
                            id={ this.props.id }
                            api={ this.api }
                            setState={ this.setState }
                        />
                    )
                }
            </div>
        );
    };
};
