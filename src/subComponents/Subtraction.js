import React from 'react';
import {BiMinus} from "react-icons/bi";
import { MdAdd } from "react-icons/md";
import '../cssFile.css'
class Subtraction extends React.Component
{
    constructor(props){
        super(props);
        this.state={counter:7};
      }
        subt= () =>{
        
        this.setState((prevstate)=>{if(this.state.counter>0)return{counter:prevstate.counter-1}})
        console.log("f1");
    }
    add= () =>{
        
        this.setState((prevstate)=>{if(this.state.counter<7)return{counter:prevstate.counter+1}})
        console.log("f1");
    }
  render(){
      console.log("sub")
    return(
        <React.Fragment>
            <div >
            {this.props.rend(this.state.counter)}
            <div style={{marginTop:'16%',marginLeft:'30px'}}>
               <BiMinus color="yellow"size="50" onClick={this.subt}className="btnsW"/> 
           

               <MdAdd color="yellow" size="50" onClick={this.add} className="btnsW" /> 
           
            </div>
           
          </div> 
       
            </React.Fragment>
        
        )
  }
 
}
export default Subtraction;