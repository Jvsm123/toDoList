import { Link } from 'react-router-dom';

export default function ButtonAdd()
{
    return (
        <Link to="/add">
            <div className="btnAdd">+</div>
        </Link>
    );
};
