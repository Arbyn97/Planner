import React from 'react';
import{MdOutlineDoneOutline}from  "react-icons/md";

class ThanksFor extends React.Component 
{
  constructor(props){
    super(props);
    this.state={
     
        tempinput:''}
  }

  chnge=(event)=>{
 var x=   document.getElementById("inptThnks")
 x.style.border="none"

 event.preventDefault();
 alert(x.value);
 localStorage.setItem('tnks',JSON.stringify(this.state.tempinput));
  }
  hndlInputchng=(event)=>
  {

    this.setState({...this.state,tempinput:event.target.value})

  }
render()
{
  const data = localStorage.getItem('tnks');
  return<div>
   
     <form id="myform" onSubmit={(e)=>this.chnge(e)}>
     <h2 id="thnksh2">...خدایا شکرت بابت</h2>
     <input type="text" id="inptThnks"  
     onChange={(e)=>this.hndlInputchng(e)} value={data}/>
     <button className="butndoneThnks">
       <MdOutlineDoneOutline color="green" size="20"/></button> 
     </form>
    
     </div>
}
    

}
export default ThanksFor;
