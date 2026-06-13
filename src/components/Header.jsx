import { Link } from "react-router-dom";

function Header()
{
    return(
        <header>
            <h1> Имя Фамилия</h1>
            <nav>
                <Link to='/'> Главная</Link>
                <Link to='/services'> Услуги</Link>
                <Link to='/contact'> Контакты</Link>
            </nav>
        </header>
    );
}


export default Header;