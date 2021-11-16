import { Component } from 'react';

import Deleter from '../../../assets/img/eraser.svg';

type Props =
{
    task:
    {
        Nome: string;
        Tempo: string;
        Feito: boolean;
    };
 
    id: string | undefined;
    api: Function;
    setState: Function;
};

type State = { Feito: boolean };

export default class TaskCards extends Component< Props, State >
{
    state = { Feito: this.props.task.Feito };
 
    render(): React.ReactElement<HTMLElement>
    {
        const Nome: string = this.props.task.Nome;
        const Tempo: string = this.props.task.Tempo;
     
        return (
            <div className="TaskCards">
                { this.state.Feito &&
                    <>
                        <s> <h2>{ Nome }</h2> </s>
                        <s> <h4>{ Tempo }</h4> </s>
                        <div className="taskControl">
                            <img
                                src={ Deleter }
                                alt="del"
                                onClick={() =>
                                {
                                    this.props.api(1,
                                    [
                                        Nome,
                                        Tempo,
                                        !this.state.Feito,
                                        this.props.id
                                    ]);
                                }}
                            />
                            <input
                                type="checkbox"
                                checked
                                onChange={() =>
                                {
                                    this.setState({Feito: !this.state.Feito});
                                    this.props.api(0,
                                    [
                                        Nome,
                                        Tempo,
                                        !this.state.Feito,
                                        this.props.id
                                    ]);
                                }}
                            />
                        </div>
                    </>
                }
                { !this.state.Feito &&
                    <>
                        <h2>{ Nome }</h2>
                        <h4>{ Tempo }</h4>
                        <div className="taskControl">
                            <img
                                src={ Deleter }
                                alt="del"
                                onClick={() =>
                                {
                                    this.props.api(1,
                                    [
                                        Nome,
                                        Tempo,
                                        !this.state.Feito,
                                        this.props.id
                                    ]);
                                }}
                            />
                            <input
                                type="checkbox"
                                onChange={() =>
                                {
                                    this.setState({Feito: !this.state.Feito});
                                    this.props.api(0,
                                    [
                                        Nome,
                                        Tempo,
                                        !this.state.Feito,
                                        this.props.id
                                    ]);
                                }}
                            />
                        </div>
                    </>
                }
            </div>
        );
    };
};
