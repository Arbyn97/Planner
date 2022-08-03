import React from 'react';
// import { MdAdd } from "react-icons/md";
import '../cssFile.css'

class ListDo extends React.Component
{
  constructor(props)
  {
    super(props);
   
  }
 
  render(){

   
 let key=this.props.id;
 const data = localStorage.getItem(key);
    let done={}
    if(this.props.checked===true)
    {done={textDecoration:'line-through'}}
   
    return(
        <React.Fragment>
            <div id="listdoing">
         <label style={done}id={this.props.id}>
         <input type="checkbox" checked={this.props.checked} 
         onChange={(e)=>this.props.bxchnge(this.props.id)}
         />
       
         {this.props.content}
        
         {/* <br/>  */}
        {data}
       
         
         </label>
       
          </div> 
       
            </React.Fragment>
        
        )
  }
 
}
export default ListDo;
