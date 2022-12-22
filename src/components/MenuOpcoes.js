import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';

export default function MenuOpcoes() {

    const navigate = useNavigate();
    const logoff = () => {
        sessionStorage.removeItem("login")
        navigate("/")
    }
    return (
        <div className='menu'>
            <Link to="/menu">
                <button className='button'> Home</button>
            </Link>
            <Link to="/films">
                <button className='button'>Filmes</button>
            </Link>
            <Link to="/people">
                <button className='button'>Personagens</button>
            </Link>
            <Link to="/planets">
                <button className='button'>Planetas</button>
            </Link>
            <Link to="/species">
                <button className='button'>Espécies</button>
            </Link>
            <Link to="/starchips">
                <button className='button'>Starships</button>
            </Link>
            <Link to="/sobre">
                <button className='button'>Sobre</button>
            </Link>
            <Link to="/duvidas">
                <button className='button'>Dúvidas</button>
            </Link>
            <button className='button' onClick={logoff}><LogoutIcon/></button>
        </div>
        

    )
}

