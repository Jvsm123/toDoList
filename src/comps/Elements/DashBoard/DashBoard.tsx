import { Component } from 'react';
import axios, { AxiosResponse } from 'axios'

import Card from '../Card/Card';
import TasksInfo from '../TaskInfo/TaskInfo';
import TaskCreate from '../TaskCreate/TaskCreate';

type Props =
{
    nivel: Number,
    routerDataTasks?: [Object],
    routerDataId?: string
};

type State = { tasks: Array<any> };

export default class DashBoard extends Component< Props, State >
{
    constructor( props: Props )
    {
        super( props );
     
        this.state = { tasks: [] };
    };
 
    componentDidMount(): void
    {
        axios.get("http://localhost:3001/dados")
            .then( (i: AxiosResponse) => this.setState( {tasks: i.data} ) );
    };
 
    render(): React.ReactElement<HTMLElement>
    {
        return (
            <div className="DashBoard">
                { this.props.nivel === 0 && this.state.tasks.map( (i: any) =>
                  {
                    return <Card tasks={i}/>
                  })
                }
                { this.props.nivel === 1
                    && <TasksInfo
                            tasks={this.props.routerDataTasks}
                            id={this.props.routerDataId}
                        />
                }
                { this.props.nivel === 2 && <TaskCreate/> }
            </div>
        );
    };
};
