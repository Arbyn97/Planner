import React from 'react';
import { MdAdd } from "react-icons/md";
import{ v1 as UUID }  from "uuid"
import ListDo from"../subComponents/ListDo"
import axios from 'axios'
class TodoList extends React.Component 
{
    constructor(props){
        super(props);
        this.state={
            list:[],
            tempinput:'',
            posts:[] 
            
        }
       
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
     this.setState({list:templist,tempinput:''}) ;
     axios.post('https://jsonplaceholder.typicode.com/posts/',this.state.list).then(response=>{console.log(response);})
    
     localStorage.setItem('Do',JSON.stringify(this.state.tempinput));
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
    render()
    {
        const data = localStorage.getItem('Do');
        const posts = this.state.posts.map(post => {
            return <ListDo id={post.key} content={post.content} checked={post.checked} />
        });
       
        const list=this.state.list.map((row)=>{
        return(<ListDo id={row.key} key={row.key}
        content={row.content} checked={row.checked}
        bxchnge={this.hndlchckboxUpdate}/>)});
       
        return(

            <React.Fragment>
              
                <form onSubmit={(e)=>this.hndsubmit(e)} id="todoForm">
                    <input type="text" value={this.state.tempinput}
                      onChange={(e)=>this.hndlInputchng(e)}
                   
                     className="inpttodo"/>
            
                   
                    <button type="submit" className="btndo">
        <MdAdd color="green" size="27"  id="mdadd" />   
                         </button>
                         <div id="list">
                        {posts}
                        {list}      
                         </div>
                  
                         
                </form>
                
            </React.Fragment>
        )
    }

 
}
export default TodoList;
