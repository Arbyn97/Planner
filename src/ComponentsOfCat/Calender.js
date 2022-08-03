import React,{ useState } from 'react';
//import 'react-calendar/dist/Calendar.css';
// import Calendar from 'react-calendar';
import { Calendar } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
function Calender(){
   
  
    const [value, onChange] = useState(new Date());
    
       return(
        <React.Fragment>
           
          
         
     
           <div id="cal">
           <Calendar className="clndrcal"
      calendar={persian}
      locale={persian_fa}
    />
           {/* <Calendar onChange={onChange} value={value}  />  */}
           </div>
        
          
        
        </React.Fragment>
          
    
       )
   }
         

    


export default Calender;
