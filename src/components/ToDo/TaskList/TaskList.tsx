import { Component } from 'react';
import { Api } from '../../Functions/Api';

import ListCards from './ListCards/ListCards';

export default class TaskList extends Component< {}, {} >
{
    state = { tasks: [] };
 
    async api(): Promise<void>
    {
        const { data } = await Api.read();
     
        if( data ) this.setState( {tasks: data} );
    };
 
    componentDidMount() { this.api() };
 
    render(): React.ReactElement<HTMLElement>
    {
        return (
            <>
                { this.state.tasks
                    && this.state.tasks.map( (i: any) => <ListCards tasks={i}/> ) }
            </>
        );
    };
};
