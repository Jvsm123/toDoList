import axios, { AxiosResponse } from "axios";

interface ITarefasDados
{
    Nome: string;
    Tempo: string;
    Feito: boolean;
    Categoria: string
};

interface IDetalhesTarefas
{
    Id: string;
    newData:
    {
       Nome: string;
       Tempo: string;
       Feito: string;
    };
};

export class Api 
{
    static async create( { Nome, Tempo, Feito, Categoria }: ITarefasDados ): Promise< Object >
    {
        const { data } = await this.read();
     
        const task: Array< any > = data
            .filter( (i: any) => i.id === Categoria );
     
        if( task.length < 1 )
        {
            const { data } = await axios.post("http://localhost:3001/dados",
            {
                id: Categoria,
                Tarefas:
                [{
                    Nome: Nome,
                    Tempo: Tempo,
                    Feito: Feito
                }]
            });
         
            return data;
        }
        else
        {
            const { data } = await axios.put(`http://localhost:3001/dados/${Categoria}`,
            {
                id: task[0].id,
                Tarefas: [ ...task[0].Tarefas,
                {
                    Nome: Nome,
                    Tempo: Tempo,
                    Feito: Feito
                }]
            });
         
            return data;
        };
    };

    static async read( Id?: string ): Promise< AxiosResponse >
    {
        if( Id )
            return await axios.get( `http://localhost:3001/dados/${Id}` );
        else
            return await axios.get( "http://localhost:3001/dados" );
    };
 
    static async update( { Id, newData }: IDetalhesTarefas )
    {
        const { data } = await this.read( Id );
     
        const result = data.Tarefas.map( (i: any) =>
        {
            if( i.Nome === newData.Nome && i.Tempo === newData.Tempo )
                return newData;
            else
                return i;
        });
         
        axios.put( `http://localhost:3001/dados/${Id}`,
        {
            id: Id,
            Tarefas: result
        });
    };
 
    static async delete( { Id, newData }: IDetalhesTarefas): Promise<AxiosResponse>
    {
        const { data } = await this.read( Id );
     
        const result = data.Tarefas.filter( (i: any) =>
        {
            if( i.Nome === newData.Nome && i.Tempo === newData.Tempo )
                return false;
            else
                return i;
        });
     
        const lengthResult = result.length;
     
        if( lengthResult > 0 )
            return axios.put( `http://localhost:3001/dados/${Id}`,
            {
                id: Id,
                Tarefas: result
            });
        else
            return axios.delete( `http://localhost:3001/dados/${Id}` );
    };
};
