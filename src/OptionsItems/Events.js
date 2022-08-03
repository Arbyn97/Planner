import React from 'react';
 import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import DateObject from "react-date-object";
class Events extends React.Component {
  
  constructor(props){
    super(props);
   
  }
  
  render(){
   const date = new DateObject({ calendar: persian, locale: persian_fa })

    const calendr=date.format();
    const emoji = localStorage.getItem('emoji');
    const water = localStorage.getItem('water');
   return(

   <React.Fragment>
     <div id="ev" > 
   
     {/* <DatePicker calendar={persian} locale={persian_fa} /> */}
     {calendr}
      <div >{emoji}</div>
     <div> <p>{water}لیوان</p></div>
    
     
       </div>
 
      </React.Fragment>
      )
       }
  
}export default Events