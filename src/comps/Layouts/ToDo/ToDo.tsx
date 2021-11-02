import Header from '../../Elements/Header/Header';
import ButtonAdd from '../../Elements/ButtonAdd/ButtonAdd';
import DashBoard from '../../Elements/DashBoard/DashBoard';

export default function ToDo()
{
    return (
        <main className="toDo">
            <Header/>

            <DashBoard/>

            <ButtonAdd/>
        </main>
    );
};
