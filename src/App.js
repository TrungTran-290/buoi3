import React, { useState } from 'react'
import Hook6 from './Hook6'
import Students from './components_3/Students'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

import "./style.css"
import Hook7 from './Hook7';
import API from './API';
import Hook11 from './Hook11';
function App() {
  const [show,setShow]=useState(false)
  return (
    <div className='Theapp'>
        <Students/>
        {/* <Footer/> */}
       
        {/* {
          !show? <API/>:"nothing"
        }
        <button onClick={()=>setShow(!show)}>Stop Showing</button> */}
        {/* <API/> */}
        {/* <Hook11/> */}
    </div>
  )
}

export default App