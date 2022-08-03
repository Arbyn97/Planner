'use strict';
import React from 'react'
import ReactDOM from 'react-dom/client';
import Home from './Home'
const Hindex=()=>
{
return ReactDOM.createPortal(<Home/>,document.getElementById('root'))
}
export default Hindex;
