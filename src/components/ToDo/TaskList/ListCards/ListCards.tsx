import { Component } from 'react';
import { Link } from 'react-router-dom';

import Compras from "../../../../assets/icons/cart.svg";
import Viagem from "../../../../assets/icons/send.svg";
import Casa from "../../../../assets/icons/house.svg";
import Lazer from "../../../../assets/icons/headphones.svg";
import Trabalho from "../../../../assets/icons/briefcase.svg";
import Estudos from "../../../../assets/icons/book.svg";
import Hobby from "../../../../assets/icons/palette.svg";
import Lembrete from "../../../../assets/icons/list.svg";

import { CardHandler } from '../../../Functions/CardHandler';

type Props = { tasks: [Object] | undefined };

export default class ListCard extends Component< Props, {} >
{
    iconPath: string | undefined;
    idTag: string | undefined;
    totalTaskDisplay: string | undefined;
    tarefas: Array<Object> | undefined;
 
    constructor( props: Props )
    {
        super( props );
     
        this.iconPath = "";
        this.idTag = "";
        this.totalTaskDisplay = "";
     
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
     
        const res = CardHandler
            .handler( { tasks: props.tasks, categorias } );
     
        if(res)
        {
            this.iconPath = res.iconPath;
            this.idTag = res.tag;
            this.totalTaskDisplay = res.taskDisplay;
            this.tarefas = res.tarefas
        };
    };
 
    render()
    {
        return (
            <div className="Card">
                <img src={ this.iconPath } alt="#"/>
                <Link to={
                {
                    pathname: "/details",
                    state: { dados: [this.iconPath, this.tarefas, this.idTag] }
                }}
                >
                    <div className="info">
                        <h2> { this.idTag } </h2>
                        <h5> { this.totalTaskDisplay } </h5>
                    </div>
                </Link>
            </div>
        );
    };
};
