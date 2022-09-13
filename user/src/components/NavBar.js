import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

import Logo from '../images/fresh1.gif'
import In from '../images/linkedin.png'
import Github from '../images/github.png'
import Mail from '../images/mail.png'

const NavBar = () => {

  return (
    <>
      <Navbar expand='sm' className='navbar'>
        <Container className='navbar-wrap'>
          <Navbar.Brand>
            <img src={Logo} className='logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='mr-auto ml-auto' />
          <Navbar.Collapse id='basic-navbar-nav' className='bulk-navbar mr-auto ml-auto'></Navbar.Collapse>
          <Nav>
            {/* <div className='bulk-navbar'> */}
            <p className='about-btn fadeout'>about</p>
            <p className='projects-btn fadeout'>projects</p>
            <p className='exp-btn fadeout'>experience</p>
            <p className='interests-btn fadeout'>interests</p>
            {/* </div> */}
            {/* <div className='media-div'> */}
            <img className='mail-btn' src={Mail} alt='email' />
            {/* </div> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      {/* <hr /> */ }
    </>
  )

}

export default NavBar