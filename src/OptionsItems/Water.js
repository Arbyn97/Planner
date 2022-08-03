import React from 'react';
import{MdOutlineDoneOutline}from  "react-icons/md";
import { FaGlassWhiskey} from "react-icons/fa";
import Counter from "../subComponents/Counter"
import Subtrctn from "../subComponents/Subtraction"
import Event from "./Events"
import { useNavigate,Link,Route,Routes } from "react-router-dom";
function Water(props) 
{
   
   const hndlclick=(event)=>{
   
  
 
        event.preventDefault();  
   }

 return(
     
     <React.Fragment>


<div id="wat"className="contain">
   
     <div className="alg">
      <FaGlassWhiskey color="cyan" size="120"/> 
     </div>
     <div>
          
         <Subtrctn rend={(counter)=><Counter counter={counter}/>}/>
       
     </div>
     <form onSubmit={(e)=>hndlclick(e)} id="frmwtr">
     <button type="submit" className="butndoneWater">
         <MdOutlineDoneOutline color="green" size="20" />
         </button>
     </form>
    

</div>



     </React.Fragment>

 )  
}
export default Water;