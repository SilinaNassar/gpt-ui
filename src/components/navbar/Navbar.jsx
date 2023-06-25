import React from 'react'
import './navbar.css'
import{RiMenu3Line,RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import { useState } from 'react'

//BME block element modifier

const Menu =()=>(
  <>
          <p ><a href='#home ' style= { { color: '#fff', textDecoration: 'none'} }>Home</a></p>
          <p ><a href='#wgpt3' style= { { color: '#fff', textDecoration: 'none'} }>What is GPT?</a></p>
          <p ><a href='#possibility' style= { { color: '#fff', textDecoration: 'none'} }>Open AI</a></p>
          <p ><a href='#features' style= { { color: '#fff', textDecoration: 'none'} }>Case Studies</a></p>
          <p ><a href='#blog' style= { { color: '#fff', textDecoration: 'none'} }>Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img
            src={logo}
            alt="logo"
          />
        </div>

        <div className="gpt3__navbar-links_container">  
          <Menu/>
        </div>
      </div>

      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type=''>Sign up</button>

      </div>

      <div className='gpt3__navbar-menu'>
          {toggleMenu ?
            <RiCloseLine color='#fff' size={27} onClick={()=>setToggleMenu(false)}/>
            :
            <RiMenu3Line color='#fff' size={27} onClick={()=>setToggleMenu(true)}/> 
            }
            {toggleMenu &&(
              <div className='gpt3__navbar-menu_container scale-up-center'>
                  <div className='gpt3__navbar-menu_container-links'>
                    <Menu/>
                    <div className='gpt3__navbar-menu_container-links-sign'>
                        <p>Sign in</p>
                        <button type=''>Sign up</button>

                    </div>

                  </div>
              </div>
            )}

      </div>

    </div>
  )
}

export default Navbar