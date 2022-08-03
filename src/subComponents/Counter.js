import React from 'react';
import '../cssFile.css'
class Counter extends React.Component
{
    constructor(props){
        super(props);
      
      }
          
  render(){ 
    localStorage.setItem('water',JSON.stringify(this.props.counter));
    console.log("counter");
    return(
        <React.Fragment>
            <div >
          
            <p className="addsub">لیوان {this.props.counter}</p>
          </div> 
       
            </React.Fragment>
        
        )
  }
 
}
export default Counter;