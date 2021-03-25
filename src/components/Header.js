import React from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
             <Navbar bg="dark" variant="dark" >
                <Navbar.Brand href="#home">
                    {/* <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '} */}
                   Quikie App
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default Header
