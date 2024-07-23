import React from 'react'
import Hook6 from './Hook6'
import Students from './components/Students'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

import "./style.css"
function App() {
  return (
    <div className='Theapp'>
        <Students/>
        <Footer/>
        <Hook6/>
    </div>
  )
}

export default App