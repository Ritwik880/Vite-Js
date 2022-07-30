import React, { useState } from 'react'
import styled from 'styled-components'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {


    const [active, setActive] = useState("nav__menu");
    const [show, setShow] = useState(false)
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        // Icon Toggler
        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };


    const Header = styled.header`
    background: ${({ theme }) => theme.colors.bg};

    .nav__menu {
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 3rem;
        z-index: 2;
        display: none;
    }
    
    .nav__toggler {
        display: none;
    }
    
    .nav__toggler div {
        width: 2.5rem;
        height: 0.2rem;
        margin: 0.4rem;
        background: rgb(204, 204, 204);
        transition: 0.3s ease-in;
    }
    `
    const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    `
    const Button = styled.button`
    background: ${({ theme }) => theme.colors.gradient};
    border-radius: 6px;
    border: none;
    padding: 8px 19px;
    margin: 10px 10px;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.color};
    `
    const Hr = styled.hr`
    margin: 0 0 !important;
    `
    const Img = styled.img`
    width: 85px;
    `
    const Input = styled.input`
    width: 600px;
    height: 41px;
    border: none;
    background: transparent;
    margin: 0;
    padding: 7px 8px;
    font-size: 14px;
    color: inherit;
    border: 1px solid #C4C4C4;
    border-radius: 5px;
    border: 1px solid #555;
    padding: 9px 4px 9px 40px;
    background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bibi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 00 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")no-repeat 13px center;

    &::placeholder {
        color: #bbb;
    }
    
    `
    const MobileBtn = styled.button``
    const LoginBtn = styled.button`
    background: ${({ theme }) => theme.colors.btnBg};
    border-radius: 6px;
    border: none;
    padding: 8px 19px;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.color};
    width: 136px;`

    const LoginWrap = styled.div`
    display: flex;`
    return (
        <>
            <Header>
                <Div>
                    <Button>Kids Coding Program</Button>
                    <Link to='/graduate'>
                        <Button>Graduate Program</Button></Link>
                </Div>
                <Hr />
                <Navbar className="navbar navbar-expand-lg">
                    <Container>
                        <Navbar.Brand href='/' className="navbar-brand">
                            <Img src="./images/logo.png" alt="vajreLogo" />
                        </Navbar.Brand>
                        <Nav className="navbar-nav mx-auto">
                            <Input type='search' name='search' placeholder='Search Here' />
                            <div className={active}>
                                <NavLink to="/">
                                    <Nav.Link className='navLink'>Home</Nav.Link>
                                </NavLink>
                                <NavDropdown title="Courses" className='navLink'>
                                    <NavDropdown.Item href="#action/3.2">Python</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Java Script</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">C++</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Data Science</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">Data Analysis</NavDropdown.Item>
                                </NavDropdown>
                                <NavLink to="/about">
                                    <Nav.Link className='navLink'>About us</Nav.Link>
                                </NavLink>
                                <NavLink to="/service">
                                    <Nav.Link className='navLink'>Services</Nav.Link>
                                </NavLink>
                                <NavLink to="/contact">
                                    <Nav.Link className='navLink'>Contact us</Nav.Link>
                                </NavLink>
                                <MobileBtn className='centerBtn'>Hire From Us</MobileBtn>
                                <Link to='/campus'>
                                    <MobileBtn className='centerBtn'>On Campus Training</MobileBtn>
                                </Link>
                                <MobileBtn className='centerBtn'>Become an instructor</MobileBtn>
                            </div>
                        </Nav>
                        <LoginWrap>
                            <Link to='/signup'>
                                <LoginBtn>Login</LoginBtn>
                            </Link>
                        </LoginWrap>
                        <div onClick={navToggle} className={icon}>
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                        </div>
                    </Container>
                </Navbar>

            </Header>

        </>
    )
}

export default Header