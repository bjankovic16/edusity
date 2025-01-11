import React, {useEffect, useState} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll'
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {

    const [sticky, setSticky] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)

    const toggleMenu = ()=>{
        setMobileMenu(!mobileMenu)
    }

    useEffect(()=>{
        window.addEventListener('scroll', ()=> {
            if(window.scrollY > 15) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        })
    }, [])

  return (
    <nav className={`conatiner ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to='hero' duration={500} smooth={true} offset={0}>Home</Link></li>
            <li><Link to='program' duration={500} smooth={true} offset={-260}>Program</Link></li>
            <li><Link to='about' duration={500} smooth={true} offset={-150}>About us</Link></li>
            <li><Link to='campus' duration={500} smooth={true} offset={-260}>Campus</Link></li>
            <li><Link to='testimonials' duration={500} smooth={true} offset={-260}>Testimonials</Link></li>
            <li><Link to='contact' duration={500} smooth={true} offset={-260} className='btn'>Contact us</Link> </li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar