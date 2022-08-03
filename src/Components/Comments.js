import pln from './planner.png';
import './App.css';

import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";

function Comments() {
  return (
   
           
    <div id="container">
    <div id="navigator"  >
        <a id="ppagehome" class="Pcomment"href="./example1.html" target="_blank">صفحه اصلی</a>
                <a class="Pcomment" href="./example1-contact.html" target="_blank">تماس با ما</a>
                <a class="Pcomment" href="./example1-club.html" target="_blank">باشگاه دوستان</a>
    <img id="lgo" src=".\.dist\Planner.png" width="300px" height="300px"/>
            </div>
            <div id="tlte">
              
                <h1  id="h1-comment" >نظرات</h1>
                <hr id="hr-comment" />
                
                <div id="itms">

                </div>
                <div id="div-form" >
                    <form style=" display:grid; justify-self: center;margin: 0 auto; width: 70%; ">
                        <input id="inpt-text" class="itm-form" type="text" name="name" placeholder="نام"  dir="auto"
                     />
                    <br/>
                    <textarea  class="itm-form" autofocus="autofocus" dir="auto"  rows="7" cols="37">

                    </textarea>
                    <button  class="itm-form" disabled="disabled" type="submit">ارسال نظر</button>
                    </form>
                </div>
            </div>
   
    
</div>     

  );
}

export default Comments;
