import { Component } from 'react';

import TaskList from '../../ToDo/TaskList/TaskList';
import TaskInfo from '../../ToDo/TaskInfo/TaskInfo';
import TaskCreate from '../../ToDo/TaskCreate/TaskCreate';

type Props =
{
    pagina: Number;
    routerDataTasks?: [Object];
    routerDataId?: string;
};

export default class DashBoard extends Component< Props, {} >
{
    render(): React.ReactElement<HTMLElement>
    {
        return (
            <div className="DashBoard">
                { this.props.pagina === 0 && <TaskList/> }
             
                { this.props.pagina === 1
                    && <TaskInfo
                            tasks={this.props.routerDataTasks}
                            id={this.props.routerDataId}
                        />
                }
             
                { this.props.pagina === 2 && <TaskCreate/> }
            </div>
        );
    };
};
