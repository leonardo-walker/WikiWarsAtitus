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
                <button> Home</button>
            </Link>
            <Link to="/films">
                <button>Films</button>
            </Link>
            <Link to="/people">
                <button>People</button>
            </Link>
            <Link to="/planets">
                <button>Planets</button>
            </Link>
            <Link to="/species">
                <button>Species</button>
            </Link>
            <Link to="/starchips">
                <button>Starchips</button>
            </Link>
            <Link to="/sobre">
                <button>Sobre</button>
            </Link>
            <Link to="/duvidas">
                <button>Dúvidas</button>
            </Link>
            <button className='loagout' onClick={logoff}><LogoutIcon/></button>
        </div>
    )
}

