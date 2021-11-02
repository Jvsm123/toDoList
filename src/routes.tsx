import { Route, BrowserRouter } from 'react-router-dom';

import Add from "./comps/Layouts/Add/Add";
import ToDo from "./comps/Layouts/ToDo/ToDo";
import Details from "./comps/Layouts/Details/Details";

export default function Routes()
{
    return (
        <BrowserRouter>
            <Route component={ ToDo } path="/"/>
            <Route component={ Details } path="/details"/>
            <Route component={ Add } path="/add"/>
        </BrowserRouter>
    );
};
