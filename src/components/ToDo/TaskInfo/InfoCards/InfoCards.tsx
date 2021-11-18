import { Component } from 'react';

import Deleter from '../../../../assets/icons/eraser.svg';

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
        const Nome = this.props.task.Nome;
        const Tempo = this.props.task.Tempo;
        const Feito = this.state.Feito;
        const Id = this.props.id;
        const Api = this.props.api
     
        return (
            <div className="TaskCards">
                { Feito &&
                    <>
                        <h2 className="taged">{ Nome }</h2>
                        <h4 className="taged">{ Tempo }</h4>
                    </>
                }
                 
                { !Feito &&
                    <>
                        <h2>{ Nome }</h2>
                        <h4>{ Tempo }</h4>
                    </>
                }
                 
                <div className="taskControl">
                    <img src={ Deleter } alt="del"
                        onClick={ () => Api( 1, [ Nome, Tempo, Feito, Id ] ) }
                    />
                    { Feito &&
                        <input type="checkbox" checked
                            onChange={() =>
                            {
                                this.setState( { Feito: !Feito } );
                                Api( 0, [ Nome, Tempo, !Feito, Id ]);
                            }}
                        />
                    }
                 
                    { !Feito &&
                        <input type="checkbox"
                            onChange={() =>
                            {
                                this.setState( { Feito: !Feito } );
                                Api( 0, [ Nome, Tempo, !Feito, Id ] );
                            }}
                        />
                    }
                </div>
            </div>
        );
    };
};
