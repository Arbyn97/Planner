import React from 'react';
import Banner from'../Banner'
import '../cssFile.css'
import { BrowserRouter as Router } from "react-router-dom";
import Items from'../Items'
import Water from '../OptionsItems/Water'
import Events from '../OptionsItems/Events'
import TodoList from '../OptionsItems/TodoList'
import Emotion from '../OptionsItems/Emotions'
import Medicions from '../OptionsItems/Medicions'
import ThanksFor from '../OptionsItems/ThanksFor'
import Calender from '../ComponentsOfCat/Calender'
import Purposes from '../ComponentsOfCat/Purposes'
import FilmvsSeries from '../ComponentsOfCat/FilmvsSeries'
import ShopList from '../ComponentsOfCat/ShopList'

import LottieAnimation from "../Lottie";
import shop from "../shop.json";
import done from "../eve.json";
import film from "../film.json";
import glass from "../water.json";
import emoji from "../emojies.json";
import target from "../target.json";
import tablet from "../medic.json";
import tnks from "../thnks.json";
import tasks from "../tasks.json";

class Home extends React.Component
{
  constructor(props){
    super(props);
    
  }
  render(){
   
  
    return(  
    <React.Fragment>
<div id="bgcolor">
    <Banner />  
   <div className='container'>
    {/* <Router> */}
        <Items id="water" masir="Water" comp={<Water/>} 
        anime={ <LottieAnimation lotti={glass}  />}
        name="iwater"/>
     <Items id="Emotion" masir="Emotion" comp={<Emotion/>}
     anime={  <LottieAnimation lotti={emoji} />}
     name="iemoji"/>
     <Items id="Medicions" masir="Medicions" comp={<Medicions/>}
     anime={  <LottieAnimation lotti={tablet}   />}
     name="imedic"/> 
     <Items id="Purposes" masir="Purposes" comp={<Purposes/>}
     anime={  <LottieAnimation lotti={target}   />}
     name="itarget"/> 
    <Items id="TodoList" masir="TodoList" comp={<TodoList/>}
    anime={ <LottieAnimation lotti={tasks} />}
    name="itask"/> 
      <Items id="FilmvsSeries" masir="FilmvsSeries" comp={<FilmvsSeries/>}
      anime={ <LottieAnimation lotti={film}  />}
      name="ifilm"/> 
   <Items id="shoplist" masir="ShopList" comp={<ShopList/>}
   anime={ <LottieAnimation lotti={shop}  />}
   name="ishop"/> 
  <Calender />
   <Items id="thanksfor" masir="ThanksFor" comp={<ThanksFor/>}
   anime={  <LottieAnimation lotti={tnks}   />}
   name="itnks"/>  
   <Items id="Events" masir="Events" comp={<Events/>}
   anime={  <LottieAnimation lotti={done} />}
   name="idone"/>
   
   
    
   
   
  
      
      
      
    
    </div>
    </div>
    </React.Fragment>
     
     
    
    
    
     
    
     
     
      
      )
    
    
  }
}

export default Home;
