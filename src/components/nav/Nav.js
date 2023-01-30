import React,{useState} from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
const Nav = () => {
  const [activenav, setActivenav] = useState('#')
  return (
    <nav>
      <a href="#" className={activenav === '#' ? 'active':''} onClick={()=> setActivenav('#')}><AiOutlineHome/></a>
      <a href="#about" className={activenav === '#about' ? 'active':''} onClick={()=> setActivenav('#about')}><AiOutlineUser/></a>
      <a href="#experience" className={activenav === '#experience' ? 'active':''}  onClick={()=> setActivenav('#experience')}><BiBook/></a>
      <a href="#portfolio" className={activenav === '#portfolio' ? 'active':''}  onClick={()=> setActivenav('#portfolio')}><RiServiceLine/></a>
      <a href="#contact" className={activenav === '#contact' ? 'active':''}  onClick={()=> setActivenav('#contact')}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav
