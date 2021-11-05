import { Route, BrowserRouter } from 'react-router-dom';

import Add from "./comps/Layouts/Add/Add";
import ToDo from "./comps/Layouts/ToDo/ToDo";
import Details from "./comps/Layouts/Details/Details";

export default function Routes()
{
    return (
        <BrowserRouter>
            <Route exact component={ ToDo } path="/"/>
            <Route exact component={ Details } path="/details"/>
            <Route exact component={ Add } path="/add"/>
        </BrowserRouter>
    );
};
