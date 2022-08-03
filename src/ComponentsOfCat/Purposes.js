import React from 'react';
  import { FaMotorcycle, FaBuromobelexperte} from "react-icons/fa";
  import {GiBigDiamondRing,GiWeightScale} from "react-icons/gi";
  import {AiOutlineCar } from "react-icons/ai";
  import {SiYourtraveldottv } from "react-icons/si";
  import { MdSportsBasketball,MdOutlineHomeWork,MdChildCare,MdOutlineEngineering,MdOutlineDoneOutline} from "react-icons/md";
  import { TiShoppingCart} from "react-icons/ti";
  import{ v1 as UUID }  from "uuid"
import NewTrgt from"../subComponents/AddnewTrgt"
class Purposes extends  React.Component{
  constructor(props){
    super(props);
    this.state={
        list:[],nametag:'',
        tempinput:''}
       
      
  }
  hndsubmit=(event)=>
  {
   
      let newlist={
          key:UUID(),
    content:this.state.tempinput,
checked:false}
 let templist=[] 
 if(this.state.list){templist=this.state.list}
 templist.push(newlist);
 localStorage.setItem('trgt',JSON.stringify(this.state.tempinput));
 this.setState({list:templist,tempinput:''})
 event.preventDefault();

  }

  hndlInputchng=(event)=>
  {

    this.setState({...this.state,tempinput:event.target.value})

  }
 hndlchckboxUpdate=(key)=>
 {
this.setState((prevstate)=>
    {
let newlist=prevstate.list.map((row)=>{if(row.key===key){row.checked=!row.checked;}return row})
    return{list:newlist}
    })
}   
hndleclick1=(event)=>{
 
  let tgname=document.getElementById('SiYourtraveldottv');
  tgname=tgname.id;
   
  this.setState({nametag:tgname},()=>{console.log(this.state.nametag)});

  event.preventDefault();
}
hndleclick2=(event)=>{
 
  let tgname=document.getElementById('MdSportsBasketball');
  tgname=tgname.id;
    
  this.setState({nametag:tgname},()=>{console.log(this.state.nametag)});

  event.preventDefault();
}
hndleclick3=(event)=>{
 
  let tgname=document.getElementById('AiOutlineCar');
  tgname=tgname.id;
   
  this.setState({nametag:tgname},()=>{console.log(this.state.nametag)});

  event.preventDefault();
}
hndleclick4=(event)=>{
 
  let tgname=document.getElementById('MdOutlineHomeWork');
  tgname=tgname.id;
  
  this.setState({nametag:tgname},()=>{console.log(this.state.nametag)});

  event.preventDefault();
}
hndleclick5=(event)=>{
 
  let tgname=document.getElementById('FaMotorcycle');
  tgname=tgname.id;
   
  this.setState({nametag:tgname},()=>{console.log(this.state.nametag)});

  event.preventDefault();
}
hndleclick6=(event)=>{
 
  let tgname=document.getElementById('TiShoppingCart');
  tgname=tgname.id;
    
  this.setState({nametag:tgname},()=>{console.log(this.state.nametag)});

  event.preventDefault();
}
hndleclick7=(event)=>{
 
  let tgname=document.getElementById('GiBigDiamondRing');
  tgname=tgname.id;
   
  this.setState({nametag:tgname},()=>{console.log(this.state.nametag)});

  event.preventDefault();
}
hndleclick8=(event)=>{
 
  let tgname=document.getElementById('MdChildCare');
  tgname=tgname.id;
   
  this.setState({nametag:tgname},()=>{console.log(this.state.nametag)});

  event.preventDefault();
}
hndleclick9=(event)=>{
 
  let tgname=document.getElementById('GiWeightScale');
  tgname=tgname.id;
   
  this.setState({nametag:tgname},()=>{console.log(this.state.nametag)});

  event.preventDefault();
}
hndleclick10=(event)=>{
 
  let tgname=document.getElementById('FaBuromobelexperte');
  tgname=tgname.id;
  
  this.setState({nametag:tgname},()=>{console.log(this.state.nametag)});

  event.preventDefault();
}
hndleclick11=(event)=>{
 
  let tgname=document.getElementById('MdOutlineEngineering');
  
  this.setState({nametag:tgname},()=>{console.log(this.state.nametag)});

  event.preventDefault();
}
   render(){
    const data = localStorage.getItem('trgt');
    const list=this.state.list.map((row)=>{
      return(<NewTrgt id={row.key} key={row.key} 
      content={row.content} checked={row.checked} icon={this.state.nametag}
      bxchnge={this.hndlchckboxUpdate}/>)})
       return(
        <React.Fragment>
           
          
           
           <div className="contain" id="purp">
           <form onSubmit={(e)=>this.hndsubmit(e)}>
         <div className="emojiSelect" id="targetsSelct">
        
      <div className="mySlides">
       <p> <SiYourtraveldottv color="pink" size="30"
       id="SiYourtraveldottv" 
       onClick={(e)=>this.hndleclick1(e)}/> 
     </p></div>
    
     <div className="mySlides">
       <p> <MdSportsBasketball color="yellow"id="MdSportsBasketball"
        onClick={(e)=>this.hndleclick2(e)} size="30"/> 
     </p></div>
    
     <div className="mySlides">
       <p> <AiOutlineCar color="green" id="AiOutlineCar"
        onClick={(e)=>this.hndleclick3(e)}size="30" /> 
     </p></div>
     <div className="mySlides">
       <p> <MdOutlineHomeWork color="red" id="MdOutlineHomeWork"
        onClick={(e)=>this.hndleclick4(e)} size="30"/> 
     </p></div>
     <div className="mySlides">
       <p> <FaMotorcycle color="magenta" id="FaMotorcycle"
        onClick={(e)=>this.hndleclick5(e)} size="30"/> 
     </p></div>
     
     <div className="mySlides">
       <p> <TiShoppingCart color="purple" id="TiShoppingCart"
        onClick={(e)=>this.hndleclick6(e)} size="30"/> 
     </p></div>
     
     <div>
       <p> <GiBigDiamondRing color="pink" id="GiBigDiamondRing"
        onClick={(e)=>this.hndleclick7(e)} size="30"/> 
     </p></div>
     <div className="mySlides">
       <p> <MdChildCare color="red"
        onClick={(e)=>this.hndleclick8(e)} size="30"/> 
     </p></div>
     
     <div className="mySlides">
       <p> <GiWeightScale color="blue" id="GiWeightScale"
        onClick={(e)=>this.hndleclick9(e)} size="30"/> 
     </p></div>
     
    
     <div className="mySlides">
       <p> <FaBuromobelexperte color="brown" id="FaBuromobelexperte"
        onClick={(e)=>this.hndleclick10(e)} size="30"/> 
     </p></div>
    
    
     
     <div className="mySlides">
       <p> <MdOutlineEngineering color="yellow" id="MdOutlineEngineering"
        onClick={(e)=>this.hndleclick11(e)}size="30"/> 
     </p></div>
    
         </div>
         <div  id="inpPrp">
           <label>
             هدف:
           </label>
              <input type="text"  id="inp" value={this.state.tempinput}
             onChange={(e)=>this.hndlInputchng(e)}/>
              
              
           </div>
           < button type="submit" className="butndone">
<MdOutlineDoneOutline color="green" size="20"  />
</button>
{list}
</form>

     </div>
        </React.Fragment>
          
    
       )
   }
         

    
}

export default Purposes;
