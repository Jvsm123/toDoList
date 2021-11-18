import { Route, BrowserRouter } from 'react-router-dom';

import Add from "./ToDo/Add/Add";
import List from "./ToDo/List/ToDo";
import Details from "./ToDo/Details/Details";

export default class Routes extends Route
{
    render()
    {
        return (
            <BrowserRouter>
                <Route exact component={ List } path="/"/>
                <Route exact component={ Details } path="/details"/>
                <Route exact component={ Add } path="/add"/>
            </BrowserRouter>
        );
    };
};
