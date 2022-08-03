import React  from 'react';
import{MdOutlineDoneOutline}from  "react-icons/md";
import AddNewEve from"../subComponents/AddNewEve"
  import { TbMedicineSyrup,TbPills} from "react-icons/tb";
  import { GiMedicalDrip} from "react-icons/gi";
 
  import { CgPill} from "react-icons/cg";
  import{ v1 as UUID }  from "uuid"
class Medicions extends React.Component 
{
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
     localStorage.setItem('medicions',JSON.stringify(this.state.tempinput));
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
    hndleclick=(event)=>{
     
      let tgname=document.getElementById('TbMedicineSyrup');
      tgname=tgname.id;
      
      this.setState({nametag:tgname},()=>{console.log(this.state.nametag)});
      
  
     
      event.preventDefault();
   
      // https://youtu.be/rWfhwW9forg
      // https://youtu.be/rWfhwW9forg
    }
    hndleCclick=(event)=>{
     
      let tgname=document.getElementById('CgPill');
      tgname=tgname.id;
      
      this.setState({...this.state,nametag:tgname},()=>{console.log(this.state.nametag)});
      
  
     
      event.preventDefault();
   
      // https://youtu.be/rWfhwW9forg
      // https://youtu.be/rWfhwW9forg
    }
    hndleTclick=(event)=>{
     
      let tgname=document.getElementById('TbPills');
      tgname=tgname.id;
      
      this.setState({...this.state,nametag:tgname},()=>{console.log(this.state.nametag)});
      
  
     
      event.preventDefault();
   
      // https://youtu.be/rWfhwW9forg
      // https://youtu.be/rWfhwW9forg
    }
    hndleGclick=(event)=>{
     
      let tgname=document.getElementById('GiMedicalDrip');
      tgname=tgname.id;
      
      this.setState({...this.state,nametag:tgname},()=>{console.log(this.state.nametag)});
      
  
     
      event.preventDefault();
   
      // https://youtu.be/rWfhwW9forg
      // https://youtu.be/rWfhwW9forg
    }
 render(){
  const data = localStorage.getItem('medicions');

  const list=this.state.list.map((row)=>{
    return(<AddNewEve id={row.key} key={row.key} 
    content={row.content} checked={row.checked} icon={this.state.nametag}
    bxchnge={this.hndlchckboxUpdate} add={data}/>)})
  return(
    <React.Fragment>

<div  className="contain"id="medistyle">
 <form onSubmit={(e)=>this.hndsubmit(e)} id="medicform">
<p id="medicon">:نماد دارو</p>
<div className="emojiSelect" id="med">


<div className=" MedicionSelct">
 
<TbMedicineSyrup color="brown" size="20" id="TbMedicineSyrup" 
onClick={(e)=>this.hndleclick(e)}/> 
</div>
<div  className=" MedicionSelct">

<CgPill color="purple" size="20" id="CgPill" onClick={(e)=>this.hndleCclick(e)}/> 
</div>
<div  className=" MedicionSelct">
<TbPills color="yellow" size="20" id="TbPills" onClick={(e)=>this.hndleTclick(e)}/> 
</div>
<div className=" MedicionSelct" >
<GiMedicalDrip color="red" size="20" id="GiMedicalDrip" onClick={(e)=>this.hndleGclick(e)}/> 
</div>

</div>

<div className="subjct">
 <label >نام دارو:</label>
<input  type="text" placeholder="مثال:ویتامین C" id="inp" value={this.state.tempinput}
             onChange={(e)=>this.hndlInputchng(e)}/>
</div>
< button type="submit"  id="medbtn">
 
<MdOutlineDoneOutline color="green" size="20" />

</button>
{list}
{/* {data} */}
</form>
</div>



    </React.Fragment>

)
 }
 

}
export default Medicions;