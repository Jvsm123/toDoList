import { Component } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Redirect } from 'react-router-dom'

import TaskCards from '../TaskCards/TaskCards';

type State =
{
    redirectTo: null | string;
    tasks: Array<any>;
};

type Props =
{
    tasks: [Object] | undefined;
    id: string | undefined;
};

export default class TasksInfo extends Component< Props, State >
{
    constructor( props: Props )
    {
        super( props );
     
        this.state =
        {
            redirectTo: null,
            tasks: []
        };
     
        this.api = this.api.bind(this);
    };
 
    api( opt: number, task: Array<any> ): void
    {
        const newData =
        {
            Nome: task[0],
            Tempo: task[1],
            Feito: task[2]
        };
     
        axios.get(`http://localhost:3001/dados/${task[3]}`)
            .then( (i: AxiosResponse) =>
            {
                const apiData = i.data;
             
                if(opt === 0)
                {
                    const res = apiData.Tarefas.map(
                        (i:any) =>
                        {
                            if (
                                i.Nome === task[0] &&
                                i.Tempo === task[1]
                            )
                            return newData;
                            else return i;
                        }
                    );
                 
                    axios.put(`http://localhost:3001/dados/${task[3]}`,
                    {
                        id: task[3],
                        Tarefas: res
                    });
                }
                else
                {
                    const target =
                    {
                        Nome: task[0],
                        Tempo: task[1],
                        Feito: task[2]
                    };
                 
                    const res = apiData.Tarefas.filter( (i: any) =>
                    {
                        if ( i.Nome === target.Nome && i.Tempo === target.Tempo) 
                            return false
                        else 
                            return i
                    });
                 
                    if (res.length > 0)
                    {
                        axios.put(`http://localhost:3001/dados/${task[3]}`,
                        {
                            id: task[3],
                            Tarefas: res
                        })
                        .then( (i: any) => this.setState( {tasks: i.data.Tarefas} ) );
                    }
                    else
                    {
                        axios.delete(`http://localhost:3001/dados/${task[3]}`)
                            .then( () => this.setState( {redirectTo: "/"} ) )
                    }
                }
            });
    };
 
    render(): React.ReactElement<HTMLElement>
    {
        if(this.state.redirectTo)
            return <Redirect to={this.state.redirectTo}/>
     
        return (
            <div className="TaskInfo">
                { (this.props.tasks && this.state.tasks.length < 1) &&
                    this.props.tasks.map( (i: any) =>
                        <TaskCards
                            task={i}
                            id={this.props.id}
                            api={this.api}
                            setState={this.setState}
                        />
                    )
                }
                { (this.state.tasks.length > 0) &&
                    this.state.tasks.map( (i: any) =>
                        <TaskCards
                            task={i}
                            id={this.props.id}
                            api={this.api}
                            setState={this.setState}
                        />
                    )
                }
            </div>
        );
    };
};
