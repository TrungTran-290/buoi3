import React, { useState } from 'react'
import Hook6 from './Hook6'
import Students from './components_3/Students'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

import "./style.css"
import Hook7 from './Hook7';
import API from './API';
import Hook11 from './Hook11';
import Students2 from './components_3/Students2';
import Weather from './components_3/Weather';
function App() {
  const [show,setShow]=useState(false)
  return (
    <div className='Theapp'>
        {/* <Students2/> */}
        {/* <Footer/> */}
       
        {/* {
          !show? <API/>:"nothing"
        }
        <button onClick={()=>setShow(!show)}>Stop Showing</button> */}
        {/* <API/> */}
        {/* <Hook11/> */}
        <Weather/>
    </div>
  )
}

export default App