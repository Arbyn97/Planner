import React from 'react'


  import { TbMedicineSyrup,TbPills} from "react-icons/tb";
  import { GiMedicalDrip} from "react-icons/gi";
 
  import { CgPill} from "react-icons/cg";

class AddNewEve extends React.Component {
 

 render(){
  
let data={}
if(this.props.icon=='TbMedicineSyrup'){data=<TbMedicineSyrup color="brown"/>}
else if(this.props.icon=='TbPills'){data=<TbPills color="purple"/>}
else if(this.props.icon=='GiMedicalDrip'){data=<GiMedicalDrip  color="yellow"/>}
else if(this.props.icon=='CgPill'){data=<CgPill color="red"/>}
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

export default AddNewEve