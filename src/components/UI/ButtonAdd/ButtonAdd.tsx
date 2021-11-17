import { Link } from 'react-router-dom';
import { Component } from 'react';

export default class ButtonAdd extends Component
{
    render()
    {
        return (
            <Link to="/add">
                <div className="btnAdd">+</div>
            </Link>
        );
    };
};
