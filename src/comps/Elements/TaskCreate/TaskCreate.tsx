import { Component } from 'react';

export default class TaskCreate extends Component< {}, {} >
{
    render(): React.ReactElement<HTMLElement>
    {
        return (
            <div className="TaskCreate">
                <input type="" placeholder="O que tem em mente?" />
                <img src="" alt="" />
                <p>Categoria</p>
                <button>Criar</button>
            </div>
        );
    };
};
