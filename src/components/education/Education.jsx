import React,{useState} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'
import './education.css'

const Education = () => {
  const [mca, setMca] = useState(false)
  const [bca, setBca] = useState(false)
  return (
    <section id='education'>
      <h5>Academic</h5>
    <h2>Educational Qualification</h2>
    <div className="container education-container">
      <div className='degree'>
        <input type="text" readOnly placeholder='Master of Computer Application' onClick={()=>{
          setMca(!mca)
        }} />
        <button  onClick={()=>{
          setMca(!mca)
        }} >{mca?<AiOutlinePlus/>:<AiOutlineMinus/>}</button>
        <div id='mca-details' className={mca?"hide":""}>
        <h5>Session: 2020-2022</h5>
        <p>University: APJ Abdul Kalam Technical University Lucknow UP (AKTU)</p>
        <p>CGPA: 7.5</p>
        </div>
      </div>
      <div className='degree'>
        <input type="text" readOnly placeholder='Bachelor of Computer Application' onClick={()=>{
          setBca(!bca)
        }} />
        <button  onClick={()=>{
          setBca(!bca)
        }} >{bca?<AiOutlinePlus/>:<AiOutlineMinus/>}</button>
        <div id='mca-details' className={bca?"hide":""}>
        <h5>Session: 2017-2020</h5>
        <p>University: Chaudhary Charan Singh University Meerut UP (CCSU)</p>
        <p>percentage: 62%</p>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Education