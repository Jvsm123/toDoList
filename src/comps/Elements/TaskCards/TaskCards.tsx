import { Component } from 'react';

type Props =
{
    task:
    {
        Nome: string,
        Tempo: string,
        Feito: boolean
    }
};

export default class TaskCards extends Component< Props, never >
{
    render(): React.ReactElement<HTMLElement>
    {
        const Nome: string = this.props.task.Nome;
        const Tempo: string = this.props.task.Tempo;
        const Feito: boolean = this.props.task.Feito;
     
        return (
            <div className="TaskCards">
                { Feito &&
                    <>
                        <h2>{ Nome }</h2>
                        <h4>{ Tempo }</h4>
                        <input
                            type="checkbox"
                            checked
                        />
                    </>
                }
                { !Feito &&
                    <>
                        <h2>{ Nome }</h2>
                        <h4>{ Tempo }</h4>
                        <input type="checkbox"/>
                    </>
                }
            </div>
        );
    };
};
