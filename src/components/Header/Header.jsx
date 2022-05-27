import logo from './img/logo.png'
import './Header.css'
import { HeaderSvg } from '../assets/svg/Svg'
import Button from '../../components/commons/button/Button'
import { Link } from 'react-router-dom'

function Header () {
    return (
        <div className="header">
            <div className="container">
                <Link to='/'>
                <div className="header__logo">
                    <img width="38" src={logo} alt="Pizza logo" />
                    <div>
                        <h1>React Pizza</h1>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
                </Link>
                <div className="header__cart">
                    
                    <Link to='/basket'>
                        <Button className="button--cart">
                        <span>520 ₽</span>
                        <div className="button__delimiter"></div>
                        <HeaderSvg />
                        <span>3</span>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Header