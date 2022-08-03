import pln from './planner.png';
import './App.css';

import Club from "./Club"
import Home from"./Components/Home"
import Start from "./Components/Start"
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Webpage from "./Components/Webpage"
function App() {
  return (
    <div className="App">
      
            <Router>
            <Routes>
           
                  <Route  index="/" element={  <Webpage/>}/>
                  <Route exact path="/" element={  <Webpage />}/>
                  <Route  path="/home/*" element={  <Home/>}/>
                  <Route  path="*" element={ <h1>Error: 404 Not found!</h1>}/>
                  {/* <Route exact path="/login" element={<Start/>}/> */}
                   </Routes>
            
             
               
             </Router> 
           </div>
           
         
  );
}

export default App;
