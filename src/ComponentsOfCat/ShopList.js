import React from 'react';
import{ v1 as UUID }  from "uuid"
import ListDo from"../subComponents/ListDo"
import { MdAdd } from "react-icons/md";
class ShopList extends  React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
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
     localStorage.setItem('shop',JSON.stringify(this.state.tempinput));
     this.setState({list:templist,tempinput:''});
     event.preventDefault();
    
      }
      hndlInputchng=(event)=>
      {

        this.setState({...this.state,tempinput:event.target.value})

      }
     hndlchckboxUpdate=(key)=>
     {
    this.setState((prevstate)=>
        {let newlist=prevstate.list.map((row)=>{if(row.key===key){row.checked=!row.checked;}return row})
        return{list:newlist}
        })
    }   
  
   render(){
    const data = localStorage.getItem('shop');
    const list=this.state.list.map((row)=>{
        return(<ListDo id={row.key} key={row.key}
        content={row.content} checked={row.checked}
        bxchnge={this.hndlchckboxUpdate}/>)})
       return(
        <React.Fragment>
        
      
        <form onSubmit={(e)=>this.hndsubmit(e)} id="shopform">
            <input type="text" value={this.state.tempinput}
             onChange={(e)=>this.hndlInputchng(e)} id="wth"/>
            <button type="submit"className="btnshop" >
            <MdAdd color="green" size="27"  id="mdaddshop" />
            </button> 
            <div id="shoplist">
                {list}
            <br/>
            <input type="checkbox" id="checklist"
         onChange={(e)=>{this.hndlchckboxUpdate(e)}}/>
         {data}
            </div>
             
             
        </form>
    </React.Fragment>
          
    
       )
   }
         

    
}

export default ShopList;
