import React from 'react';
import './Banner.css'
import pflie from'./profilehome.png'
class Banner extends React.Component
{constructor()
    {
        super();
        this.state={nam:"زهرا"}

    }
   tarikh=()=>{let clocktime=new Date();
   let clocktostring=clocktime.toString();
   let slicetime=clocktostring.slice(0,16);
   return slicetime;
   }
    render()
    {
        return(
        <React.Fragment>
            <div id="welcomtext">
   <h2 style={{direction:'rtl',padding:'5% 10%'}}>روز خوش {this.state.nam}!</h2>
   </div>
   <div id="leftside">
   <img id="circlpic"  alt="yourprofile" src={pflie}  />
    <p id="trkh">{this.tarikh()}</p>
  
   </div>

</React.Fragment>)
         

    }
}
export default Banner;