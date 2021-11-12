import { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

import Sino from "../../../assets/img/bell.svg";
import Tags from "../../../assets/img/tags.svg";

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
        ?   axios.get( "http://localhost:3001/dados" ).then( (i: any) =>
            {
                const dado = i.data.filter( (j: any) => j.id === Categoria );
             
                console.log( dado );
             
                ( dado.length < 1 )
                ?   axios.post( `http://localhost:3001/dados`,
                    {
                        id: Categoria,
                        Tarefas: [
                        {
                            Nome: Nome,
                            Tempo: Tempo,
                            Feito: Feito
                        }]
                    })
                    .then( () => this.setState( { redirectTo: "/"} ) )
                    .catch( (err) => console.log(err) )
                 
                :   axios.put( `http://localhost:3001/dados/${Categoria}`,
                    {
                        id: dado[0].id,
                        Tarefas: [ ...dado[0].Tarefas,
                        {
                            Nome: Nome,
                            Tempo: Tempo,
                            Feito: Feito
                        }]
                    })
                    .then( () => this.setState({ redirectTo: "/"}) )
                    .catch( (err) => console.log(err) );
            })
         
        :   alert("Dados Invalidos!");
    };
 
    render(): React.ReactElement<HTMLElement>
    {
        if(this.state.redirectTo)
            return <Redirect to={this.state.redirectTo}/>
     
        return (
            <div className="TaskCreate">
                <input
                    type="text"
                    placeholder="O que tem em mente?"
                    onChange={(e) => this.setState({ Nome: e.target.value })}
                />
                <div className="time">
                    <img src={Sino} alt="#"/>
                    <input
                        type="date"
                        className="dataInput"
                        onChange={(e) => this.setState({ Tempo: e.target.value })}
                    />
                </div>
                <div className="tag">
                    <img src={Tags} alt="#"/>
                    <select
                        onChange={(e) => this.setState({Categoria: e.target.value})}
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
                        onClick={() => this.api()}
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
