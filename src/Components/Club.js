import pln from './planner.png';
import './App.css';

import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";

function Club() {
  return (
    <div id="container">
            <div id="lin-club" >
                <a id="id-mainhome" class="links-cntct"href="./example1.html" target="_blank">صفحه اصلی</a>
                <a class="links-cntct" href="./example1-comments.html" target="_blank">نظرسنجی</a>
                <a class="links-cntct" href="./example1-contact.html" target="_blank">تماس با ما</a>
            <img id="lgo-club" src=".\.dist\Planner.png" width="300px" height="300px" />
                    </div>
                    <div id="divGreen">
                      
                        <h1 id="h1club">باشگاه دوستان</h1>
                        <hr id="hrclub" />
                    </div>
          
           <p>
               <div class="pixesd">
                <img class="pixes" src="users.png"/>
                   <h3 class="h3text" >تعداد کاربران</h3> 
               </div >
               <div  class="pixesd" >
                <img class="pixes"src="active.png" />
              <h3 class="h3text">کاربران فعال</h3> 
            </div>
            <div  class="pixesd">
                <img  class="pixes" src="managers.png" />
              <h3  class="h3text"  >مدیران همیشه حاضر</h3> 
            </div>
           </p>
    </div>
           
         
  );
}

export default Club;
