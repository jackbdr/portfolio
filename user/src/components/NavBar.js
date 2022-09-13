import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

import Logo from '../images/fresh1.gif'
import Mail from '../images/mail.png'

const NavBar = () => {

  return (
    <Navbar expand='sm' className='navbar'>
      <Container className='navbar-wrap'>
        {/* <Navbar.Brand> */}
        <img src={Logo} className='logo' />
        {/* </Navbar.Brand> */}
        <div className='bulk-navbar'>
          <p className='about-btn'>about</p>
          <p className='projects-btn'>projects</p>
          <p className='exp-btn'>experience</p>
          <p className='interests-btn'>interests</p>
        </div>
        {/* <div className='contact-div'> */}
        <img className='mail-btn' src={Mail} />
        {/* </div> */}
      </Container>
    </Navbar>
  )

}

export default NavBar