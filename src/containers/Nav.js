import React from 'react';
import logo from '../assets/images/todosvgs.svg'
import { Row } from 'react-bootstrap';

function Nav ()
{
    return(
        <Row className="justify-content-center">
            <img
                src={logo}
                alt="Task App Logo"
                className="logo"
            />
        </Row>
    )
}

export default Nav;