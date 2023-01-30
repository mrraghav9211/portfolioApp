import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {FiUsers} from 'react-icons/fi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about-me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
                <h5>Frontend</h5>
                <small>Fresher</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
                <h5>Backend</h5>
                <small>Freasher</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
                <h5>Database</h5>
                <small>Fresher</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aliquam veniam officia mollitia magnam maxime pariatur voluptas repellat repellendus deleniti cupiditate rerum doloribus eaque quasi autem eius, consequuntur asperiores quos.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
