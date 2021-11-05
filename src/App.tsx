import { Component } from 'react';
import Routes from "./routes";

export default class App extends Component< {}, {} >
{
    render(): React.ReactElement<HTMLElement>
    {
        return <Routes/>
    };
};
