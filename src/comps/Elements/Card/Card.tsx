import * as React from 'react';
import { Link } from 'react-router-dom';

import Sino from "../../../assets/img/bell.svg";
import Carrinho from "../../../assets/img/cart.svg";
import Lista from "../../../assets/img/list.svg";
import Av from "../../../assets/img/send.svg";
import Tags from "../../../assets/img/tags.svg";
import Casa from "../../../assets/img/house.svg";
import Log from "../../../assets/img/journal.svg";
import Paleta from "../../../assets/img/palette.svg";
import Trabalho from "../../../assets/img/briefcase.svg";
import Fones from "../../../assets/img/headphones.svg";
import Livro from "../../../assets/img/book.svg";

export default function Card( props: any ): React.ReactElement<HTMLElement>
{
    const Quant: Number = props.tasks.Tarefas.length;
    const Tarefas: Array<Object> = props.tasks.Tarefas;
    const Nomes: String = props.tasks.Categoria;
    const quant: String = (Quant > 1)? `${Quant} Tarefas` : `${Quant} Tarefa`;
    const Tag: number = props.tasks.Tag;
    const arr: Array<string> =
    [
        Sino,
        Carrinho,
        Lista,
        Av,
        Tags,
        Casa,
        Log,
        Paleta,
        Trabalho,
        Fones,
        Livro
    ];
    const img: string = arr[ Tag ];
 
    return (
        <div className="Card">
            <img src={ img } alt="#"/>
            <Link to= {
            {
                pathname: "/details",
                state: { dados: [img, Tarefas] }
            }}
            >
                <div className="info">
                    <h2> { Nomes } </h2>
                    <h5> { quant } </h5>
                </div>
            </Link>
        </div>
    );
};
