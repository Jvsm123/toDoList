import * as React from 'react';
import { Link } from 'react-router-dom';

import Voltar from '../../../assets/img/box-arrow-left.svg';
import AddTask from '../../../assets/img/list-task.svg';

type Props = { niv: Number, router?: string | undefined };

export default function Header(props: Props): React.ReactElement<HTMLElement> {
    return (
        <div className="Header">
            {props.niv === 0 &&
                <div className="menu">
                    <div className="btn"></div>
                    <div className="btn"></div>
                    <div className="btn"></div>
                </div>
            }
            {props.niv === 1 &&
                <div className="circleIconBtn">
                    {props.router &&
                        <img className="iconBtn" src={props.router} alt="#" />
                    }
                </div>
            }
            {props.niv === 2 &&
                <div className="circleIconBtn">
                    <img className="iconBtn" src={AddTask} alt="#" />
                </div>
            }
            <h1>Título</h1>
            {props.niv > 0 &&
                <Link to="/" className="circleIconBtn">
                    <img className="iconBtn return" src={Voltar} alt="#" />
                </Link>
            }
        </div>
    );
};
