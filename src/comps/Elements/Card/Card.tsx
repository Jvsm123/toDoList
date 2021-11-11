import * as React from 'react';
import { Link } from 'react-router-dom';

import Compras from "../../../assets/img/cart.svg";
import Viagem from "../../../assets/img/send.svg";
import Casa from "../../../assets/img/house.svg";
import Lazer from "../../../assets/img/headphones.svg";
import Trabalho from "../../../assets/img/briefcase.svg";
import Estudos from "../../../assets/img/book.svg";
import Hobby from "../../../assets/img/palette.svg";
import Lembrete from "../../../assets/img/list.svg";

export default function Card( props: any ): React.ReactElement<HTMLElement>
{
    const quantTask: Number = props.tasks.Tarefas.length;
    const tarefas: Array<Object> = props.tasks.Tarefas;
    const nomes: string = props.tasks.id;
    const quant: string = (quantTask > 1)? `${quantTask} Tarefas` : `${quantTask} Tarefa`;
    const arr: Array<Object> =
    [
        {Compras: Compras},
        {Viagem: Viagem},
        {Casa: Casa},
        {Lazer: Lazer},
        {Trabalho: Trabalho},
        {Estudos: Estudos},
        {Hobby: Hobby},
        {Lembrete: Lembrete}
    ];
    const imgRes: Array<Object> = arr.filter( i => i.hasOwnProperty(nomes) );
    let img: string = "";
    let res: any = imgRes.map( (i: Object) => Object.values(i) )
    img = res[0];
 
    return (
        <div className="Card">
            <img src={ img } alt="#"/>
            <Link to={
            {
                pathname: "/details",
                state: { dados: [img, tarefas] }
            }}
            >
                <div className="info">
                    <h2> { nomes } </h2>
                    <h5> { quant } </h5>
                </div>
            </Link>
        </div>
    );
};
