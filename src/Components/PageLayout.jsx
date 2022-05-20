import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import './PageLayout.css'

function PageLayout() {
  return (
    <div className='layout-container'>
         <Navbar/>
    <div className='layout-main'>
         <div className='layout-left-right-flex'> 
             <div className='layout-left'> Hello </div>
             <div className='layout-right'> Hello </div>
        </div>
        <div className='layout-body'> Height Missing</div>
    </div>
    
    
    </div>
  )
}

export default PageLayout