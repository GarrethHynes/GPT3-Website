
import { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';

const Menu = () => (
    <>
        <p><a href='#home'>Home</a></p>
        <p><a href='#wgpt3'>What is GPT3</a></p>
        <p><a href='#possibility'>Open AI</a></p>
        <p><a href='#features'>Case Studies</a></p>
        <p><a href='#blog'>Library</a></p>
    </>
)

// note on the below - every single section is broken down with a div so in the app.js file the <Navbar /> + <Header /> components are 
// within a div with a gradient classname - this is just the background gradient - then in this file the div with classname navbar is the navbar
// the next div classname navbar-links is the logg and menu items, the next div navbar-links_logo is the logo on it's own + the navbar-links_container
// is the menu items without the logo - the div classname navbar-sign covers the sign in and sign up button
// lastly the navbar-menu div uses useeffect to say show the hamburger menu or an x - if you press the hamburger menu show an x and the menu items
// the css then says if the screen is less than 550px wide hide the normal menu and just show the hamburger menu - if the hamburger menu is clicked show the x and the menu items + the sign in/up button in a drop down list
// if the screen is less than 700px but over 550px show the same but have the sign in/up button seprate to the menu items
// if the screen is over 700px hide the hamburger altogether and show show the standard menu items

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className='gpt3__navbar'>
            <div className='gpt3__navbar-links'>
                <div className='gpt3__navbar-links_logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='gpt3__navbar-links_container'>
                    <Menu />
                </div>
            </div>
            <div className='gpt3__navbar-sign'>
                <p>Sign In</p>
                <button type='button'>Sign Up</button>
            </div>
            <div className='gpt3__navbar-menu'>
                {toggleMenu 
                ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
                : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className='gpt3__navbar-menu_container scale-up-center'>
                        <div className='gpt3__navbar-menu_container-links'>
                          <Menu />
                          <div className='gpt3__navbar-menu_container-links-sign'>
                            <p>Sign In</p>
                            <button type='button'>Sign Up</button>
                        </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar