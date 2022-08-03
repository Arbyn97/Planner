import pln from '../planner.png';
import '../App.css';



import Sigin from"./Signin"
import Login from"./Login"
import Start from "./Start"
import { BrowserRouter as Router,Routes,Route,Link,Outlet } from "react-router-dom";
function Webpage() {
  return (
    <div >
      
            
    <div id="headlogo">
                
     <img id="lgo-home" src={pln} width="400px" height="400px" />
     <div id="texthead" >
       <a className="lk-cls" href="./example1-contact.html" target="_blank">
      <p id="p1-home" className="p-cls p-cls2">
       
      تماس باما</p>
         </a>
         <a className="lk-cls"  href="./example1-comments.html" target="_blank">
     <p className="p-cls p-cls2" >نظر سنجی</p>
       </a>
       <a className="lk-cls"  target="_blank">

      <p className="p-cls" >باشگاه دوستان</p>
       </a>
       <h1 id="h1-home">
    روزهاتو بدون برنامه سپری نکن !
   </h1>
                      
                          
    </div>
      <div id="circl">
                     
       <h3 id="strt">! از حالا شروع کن</h3> 
                  
                  
    </div> 
    <Login/>
     <br/>
     <Sigin/>
      </div>
             
      </div>
           
         
  );
}

export default Webpage;
