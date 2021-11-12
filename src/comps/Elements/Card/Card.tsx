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
    const totalTask: Number = props.tasks.Tarefas.length;
    const tarefas: Array<Object> = props.tasks.Tarefas;
    const idTag: string = props.tasks.id;
    const totalTaskDisplay: string = (totalTask > 1) ? `${totalTask} Tarefas` : `${totalTask} Tarefa`;
    const categorias: Array<Object> =
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
    const idCategoria: Array<Object> = categorias.filter( i => i.hasOwnProperty(idTag) );
    const pathCategoria: any = idCategoria.map( (i: Object) => Object.values(i) )
 
    let imgPath: string = "";
    imgPath = pathCategoria[0];
 
    return (
        <div className="Card">
            <img src={ imgPath } alt="#"/>
            <Link to={
            {
                pathname: "/details",
                state: { dados: [imgPath, tarefas, idTag] }
            }}
            >
                <div className="info">
                    <h2> { idTag } </h2>
                    <h5> { totalTaskDisplay } </h5>
                </div>
            </Link>
        </div>
    );
};
