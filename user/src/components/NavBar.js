import React from 'react'
import { Link } from 'react-scroll'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

import Logo from '../images/f6f3e71.gif'
import In from '../images/linkedin.png'
import Github from '../images/github.png'

const NavBar = () => {

  return (
    <>
      <Navbar expand='sm' className='navbar'>
        <Container className='navbar-wrap'>
          <Navbar.Brand>
            <img src={Logo} className='logo' />
          </Navbar.Brand>
          <div className='bulk-navbar'>
            <p className='about-btn fadeout'><Link activeClass="active" to='about' spy={true} smooth={true}>about</Link></p>
            <p className='projects-btn fadeout'>projects</p>
            <p className='exp-btn fadeout'>experience</p>
            <p className='interests-btn fadeout'>interests</p>
            <p className='contact-btn fadeout'>contact</p>
          </div>
          <div className='socials-div'>
            <a className='linkedin' href='https://www.linkedin.com/in/jackbdr/' target='_blank' rel="noreferrer">
              <img className='social-btn' src={In} alt='linkedin' />
            </a>
            <a className='github' href='https://github.com/jackbdr' target='_blank' rel="noreferrer">
              <img className='social-btn' src={Github} alt='github' />
            </a>
          </div>
        </Container>
      </Navbar>
      {/* <hr /> */}
    </>
  )
}

export default NavBar