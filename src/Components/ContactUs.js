import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";

function ContactUs() {
  return (
    <div id="container-contact" >

            {/* <div id="linee"  >
                <a id="id-mainhome" class="links-cntct"href="./example1.html" target="_blank">صفحه اصلی</a>
                        <a class="links-cntct" href="./example1-comments.html" target="_blank">نظرسنجی</a>
                        <a class="links-cntct" href="./example1-club.html" target="_blank">باشگاه دوستان</a>
            <img id="lgoContct" src=".\.dist\Planner.png" width="300px" height="300px" />
                    </div> */}
                      <div id="bggreen">
                      
                        <h1 id="cntct-h1">تماس باما</h1>
                        

                        <h3 id="cntct-h3">
                            .برای برقراری تماس میتوانید از طریق راه های زیر با ما ارتباط برقرار کنید
                        </h3>
                    </div>
                    <div id="rfrnc">
                        {/* <img src="telg.png" class="imgsContct1"/>
                        <img src="insta.png"class="imgsContct"/>
                        <img src="wha.png" class="imgsContct"/>
                        <img src="ml.png" class="imgsContct1"/> */}
                        
                    </div>
                  
           
    </div>
           
         
  );
}

export default ContactUs;
