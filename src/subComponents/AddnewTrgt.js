import React from 'react'
import { FaMotorcycle, FaBuromobelexperte} from "react-icons/fa";
 
import {GiBigDiamondRing,GiWeightScale} from "react-icons/gi";
import {AiOutlineCar } from "react-icons/ai";


import {SiYourtraveldottv } from "react-icons/si";

import { MdSportsBasketball,MdOutlineHomeWork,MdChildCare,MdOutlineEngineering} from "react-icons/md";
import { TiShoppingCart} from "react-icons/ti";

class AddnewTrgt extends React.Component {
 

 render(){
  
let data={}
if(this.props.icon=='FaMotorcycle'){data=<FaMotorcycle color="brown"/>}
else if(this.props.icon=='FaBuromobelexperte'){data=<FaBuromobelexperte color="purple"/>}
else if(this.props.icon=='GiBigDiamondRing'){data=<GiBigDiamondRing  color="yellow"/>}
else if(this.props.icon=='GiWeightScale'){data=<GiWeightScale color="red"/>}
else if(this.props.icon=='AiOutlineCar'){data=<AiOutlineCar color="red"/>}
else if(this.props.icon=='SiYourtraveldottv'){data=<SiYourtraveldottv color="red"/>}
else if(this.props.icon=='MdSportsBasketball'){data=<MdSportsBasketball color="red"/>}
else if(this.props.icon=='MdOutlineHomeWork'){data=<MdOutlineHomeWork color="red"/>}
else if(this.props.icon=='MdChildCare'){data=<MdChildCare color="red"/>}
else if(this.props.icon=='MdOutlineEngineering'){data=<MdOutlineEngineering color="red"/>}
else if(this.props.icon=='TiShoppingCart'){data=<TiShoppingCart color="red"/>}
    let done={}
    if(this.props.checked===true)
    {done={textDecoration:'line-through'}}
   
    return(
        <React.Fragment>
            <div id="listdoing">
         <label style={done}>
         <input type="radio" checked={this.props.checked} 
         onChange={(e)=>this.props.bxchnge(this.props.id)}
         />
         
         {this.props.content}
         </label>
       
       {data}
          </div> 

         
       
            </React.Fragment>
        
        
     
       )
  }
}

export default AddnewTrgt;