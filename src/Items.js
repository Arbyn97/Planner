import React from 'react';
import { Link, Route,Routes  } from "react-router-dom";
import './cssFile.css'

class Options extends React.Component
{constructor(props)
    {
        super();
   

    }
   
       
  render(){
  
      return(
 <React.Fragment>
     <div className='itms' id={this.props.id} >  
     <Link  to={this.props.id} id={this.props.name} > {this.props.anime}</Link>
     <div >


       <Routes>
       {/* <Route path="*" element={<Notfound />} /> */}
           <Route exact path={this.props.masir} element={this.props.comp} />
          
       </Routes>
      
 </div>
     </div>

   
 </React.Fragment>
      )
  }
         

    
}
export default Options;