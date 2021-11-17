type cardType =
{
    tag: string;
    iconPath: string;
    taskDisplay: string;
    tarefas: Array<Object>;
};

interface IParms
{
    tasks: any | undefined;
    categorias: Array<Object>;
};

export class CardHandler
{
    static handler( {tasks, categorias }: IParms ): cardType | undefined
    {
        if( tasks )
        {
            //Pegando recursos de Itens registrados
            const totalTask: Number = tasks.Tarefas.length;
            const tarefas: Array<Object> = tasks.Tarefas;
            const idTag: string = tasks.id;
         
            //número total das tarefas exibidas no card
            const totalTaskDisplay: string = (totalTask > 1) ? `${totalTask} Tarefas` : `${totalTask} Tarefa`;
         
            //Costatando nomes de categorias
            const idCategoria: Array<Object> = categorias.filter( (i: Object) => i.hasOwnProperty(idTag) );
         
            //Vendo se há semelhança entre o que foi passado e o que está registrado
            const pathCategoria: any = idCategoria.map( (i: Object) => Object.values(i) );
         
            //Caminho onde será mostrado o ícone da imagem
            return {
                tag: idTag,
                iconPath: pathCategoria[0],
                taskDisplay: totalTaskDisplay,
                tarefas: tarefas
            };
        }
        else console.error("ERRO!");
    };
};
