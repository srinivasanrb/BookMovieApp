import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

import './Header.css';
import logo from '../../assets/logo.svg';
import Button from '@material-ui/core/Button';

const LoginButton = function() {
    const [openModal, setOpenModal] = useState(false);
    return (
        <Button variant="contained" className="header-btn" onClick={() => setOpenModal(true)}>
            Login
        </Button>
    );
}

const LogoutButton = function() {
    return (
        <Button variant="contained" className="header-btn">
            Logout
        </Button>
    );
}

const BookShowButton = (params) => {

    let history = useHistory();

    const bookShowHandler = () => {
        history.push(`/bookshow/${params.id}`)
    }

    return (
        <Button variant='contained' className="bookshow-btn" color='primary' onClick={() => bookShowHandler()}>
            Book Show
        </Button>
    )
}


const Header = function(params) {

    console.log(params);

    let isLoggedIn = false;

    return (
        <div className='header-main-container'>            
            <img src={logo} alt="logo" className='logo-img'></img>
            {!isLoggedIn? <LoginButton></LoginButton> : <LogoutButton></LogoutButton>};        
            {params.bookShow && <BookShowButton id={params.id}/>}
        </div>
    )
}

export default Header;