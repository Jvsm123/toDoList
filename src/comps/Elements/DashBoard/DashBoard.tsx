import { Component } from 'react';
import axios , { AxiosResponse } from 'axios'

import Card from '../Card/Card';
import TasksInfo from '../TaskInfo/TaskInfo';
import TaskCreate from '../TaskCreate/TaskCreate';

type Props = { niv: Number, routerData?: [Object] };
type State = { dados: { tasks: Array<any> } };

export default class DashBoard extends Component< Props, State >
{
    constructor( props: Props )
    {
        super( props );
     
        this.state =
        {
            dados: { tasks: [] },
        };
    };
 
    componentDidMount(): void
    {
        axios.get("http://localhost:3001/dados")
            .then( (i: AxiosResponse) => this.setState( {dados: i.data} ) );
    };
 
    render(): React.ReactElement<HTMLElement>
    {
        const { dados } = this.state;
     
        return (
            <div className="DashBoard">
                { this.props.niv === 0 && dados.tasks.map( (i: any) =>
                  {
                    return <Card tasks={i}/>
                  })
                }
                { this.props.niv === 1 && <TasksInfo tasks={this.props.routerData}/> }
                { this.props.niv === 2 && <TaskCreate /> }
            </div>
        );
    }
};
