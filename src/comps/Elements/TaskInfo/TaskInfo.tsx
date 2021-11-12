import { Component } from 'react';
import axios, { AxiosResponse } from 'axios';

import TaskCards from '../TaskCards/TaskCards';

type State =
{
    id: string;
    task: Array<Object> | undefined;
    opt: number;
};

type Props =
{
    tasks: [Object] | undefined;
    id: string | undefined;
};

export default class TasksInfo extends Component< Props, State >
{
    state =
    {
        id: '',
        task: undefined,
        opt: 0
    };

    api( opt: number ): void
    {
        axios.get("http://localhost:3001/dados")
            .then( (i: AxiosResponse) =>
            {
                if(opt === 0)
                    axios.patch(`http://localhost:3001/dados${this.state.id}`,
 
                    );
                else
                    axios.put(`http://localhost:3001/dados/${this.state.id}`,

                    );
            });
    };
 
    render(): React.ReactElement<HTMLElement>
    {
        console.log( "TASKIsfo: ", this.props.tasks)
        return (
            <div className="TaskInfo">
                { this.props.tasks &&
                    this.props.tasks.map( (i: any) =>
                        <TaskCards
                            task={i}
                            api={this.api}
                            setId={this.setState}
                        />
                    )
                }
            </div>
        );
    };
};
