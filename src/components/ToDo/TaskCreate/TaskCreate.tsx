import { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Api } from "../../Functions/Api";

import Sino from "../../../assets/icons/bell.svg";
import Tags from "../../../assets/icons/tags.svg";

type State =
{
    Nome: string | null;
    Tempo: string | null;
    Categoria: string;
    Feito: boolean;
    redirectTo: null | string;
};

export default class TaskCreate extends Component< {}, State >
{
    constructor( props: Object )
    {
        super( props );
     
        this.state =
        {
            Nome: null,
            Tempo: null,
            Categoria: "Compras",
            Feito: false,
            redirectTo: null,
        };
    };
 
    api(): void
    {
        const { Nome, Tempo, Feito, Categoria } = this.state;
     
        ( Nome !== null && Tempo !== null )
        ? Api.create( { Nome, Tempo, Feito, Categoria } )
            .then( () => this.setState( { redirectTo: "/" } ) )
         
        : alert( "Dados Invalidos!" );
    };
 
    render(): React.ReactElement<HTMLElement>
    {
        if( this.state.redirectTo )
            return <Redirect to={ this.state.redirectTo }/>
     
        return (
            <div className="TaskCreate">
                <input
                    type="text"
                    placeholder="O que tem em mente?"
                    onChange={ (e) => this.setState( { Nome: e.target.value } ) }
                />
             
                <div className="time">
                    <img src={Sino} alt="#"/>
                    <input
                        type="date"
                        className="dataInput"
                        onChange={ (e) => this.setState( { Tempo: e.target.value } ) }
                    />
                </div>
             
                <div className="tag">
                    <img src={Tags} alt="#"/>
                    <select
                        onChange={ (e) => this.setState( { Categoria: e.target.value} ) }
                    >
                        <option value="Compras">Compras</option>
                        <option value="Viagem">Viagem</option>
                        <option value="Casa">Casa</option>
                        <option value="Lazer">Lazer</option>
                        <option value="Trabalho">Trabalho</option>
                        <option value="Estudos">Estudos</option>
                        <option value="Hobby">Hobby</option>
                        <option value="Lembrete">Lembrete</option>
                    </select>
                </div>
             
                <div className="btnControl">
                    <button
                        className="btn"
                        onClick={ () => this.api() }
                    >
                        Criar
                    </button>
                    <Link className="btn" to="/">
                        <button>Cancelar</button>
                    </Link>
                </div>
             
            </div>
        );
    };
};
