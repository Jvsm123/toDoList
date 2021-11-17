import { Component } from 'react';
import { Link } from 'react-router-dom';

import Voltar from '../../../assets/icons/box-arrow-left.svg';
import AddTask from '../../../assets/icons/list-task.svg';

type Props = { pagina: Number, router?: string | undefined };

export default class Header extends Component< Props, {} >
{
    render()
    {
        return (
            <div className="Header">
                { this.props.pagina === 0 &&
                  <div className="menu">
                    <div className="btn"></div>
                    <div className="btn"></div>
                    <div className="btn"></div>
                  </div>
                }
             
                { this.props.pagina === 1 &&
                  <div className="circleIconBtn">
                    { this.props.router &&
                      <img className="iconBtn" src={this.props.router} alt="#" />
                    }
                  </div>
                }
             
                { this.props.pagina === 2 &&
                  <div className="circleIconBtn">
                    <img className="iconBtn" src={AddTask} alt="#" />
                  </div>
                }
             
                <h1>Título</h1>
             
                { this.props.pagina > 0 &&
                  <Link to="/" className="circleIconBtn">
                    <img className="iconBtn return" src={Voltar} alt="#" />
                  </Link>
                }
            </div>
        );
    };
};
