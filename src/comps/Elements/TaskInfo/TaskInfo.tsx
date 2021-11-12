import { Component } from 'react';

import TaskCards from '../TaskCards/TaskCards';

type Props = { tasks: [Object] | undefined }

export default class TasksInfo extends Component< Props, {} >
{
    render(): React.ReactElement<HTMLElement>
    {
        return (
            <div className="TaskInfo">
                { this.props.tasks &&
                    this.props.tasks.map( (i: any) => <TaskCards task={i}/> )
                }
            </div>
        );
    };
};
