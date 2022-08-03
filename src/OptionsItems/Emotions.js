import React ,{useState}from 'react';
import { BsEmojiLaughing,BsEmojiNeutral,
  BsEmojiFrown,BsEmojiAngry } from "react-icons/bs";
import {FaRegTired} from "react-icons/fa";
import {ImSleepy,ImConfused } from "react-icons/im";
import{MdOutlineDoneOutline}from  "react-icons/md";
// import{MdDownloadDone}from "react-icons/md";
import Evnt from "./Events"

function Emotions(props) 
{
  
  let [emoji, setEmoji] = useState('vv');
  let [title, setTitle] = useState('');
  const hndlcick1=(event)=>{
let element=document.getElementById('BsEmojiNeutral');
element=element.id;
emoji=element;
setEmoji(element);
setTitle("معمولی");
event.preventDefault()
}
const hndlcick2=(event)=>{
  let element=document.getElementById('BsEmojiLaughing');
  element=element.id;
  emoji=element;
  setEmoji(element);
  alert(emoji);
  setTitle("خوشحال");
  event.preventDefault()
  }
  const hndlcick3=(event)=>{
    let element=document.getElementById('BsEmojiFrown');
    element=element.id;
    emoji=element;
    setEmoji(element);
    setTitle("ناراحت");
    event.preventDefault()
    }
    const hndlcick4=(event)=>{
      let element=document.getElementById('BsEmojiAngry');
      element=element.id;
      emoji=element;
      setEmoji(element);
      setTitle("عصبانی");
      event.preventDefault()
      }
      const hndlcick5=(event)=>{
        let element=document.getElementById('ImSleepy');
        element=element.id;
        emoji=element;
        setEmoji(element);
        setTitle("خسته");
        event.preventDefault()
        }
        const hndlcick6=(event)=>{
          let element=document.getElementById('FaRegTired');
          element=element.id;
          emoji=element;
          setEmoji(element);
          setTitle("بی حوصله");
          event.preventDefault()
          }
          const hndlcick7=(event)=>{
            let element=document.getElementById('ImConfused');
            element=element.id;
            emoji=element;
            setEmoji(element);
            setTitle("استرس");
            event.preventDefault()
            }
      const submt=(event)=>{
        
        localStorage.setItem('emoji',JSON.stringify(title));
          event.preventDefault();
       
           console.log(emoji);
      }

 return(
 <React.Fragment>
     <div className="contain" id="emoj">
     
     <div className="emojiSelect" id="emotionsSelct">
     <div className="mySlides">
     <BsEmojiLaughing id="BsEmojiLaughing" size="120" 
      onClick={(e)=>hndlcick2(e)}/> 
     </div>
     <div className="mySlides">
     <BsEmojiNeutral color="green" size="120" id="BsEmojiNeutral"
      onClick={(e)=>hndlcick1(e)}/> 
   </div>
     <div className="mySlides">
      <BsEmojiFrown color="red" size="120"
       onClick={(e)=>hndlcick3(e)} id="BsEmojiFrown"/> 
     </div>
     <div className="mySlides">
      <BsEmojiAngry color="orange" size="120" 
       onClick={(e)=>hndlcick4(e)}id="BsEmojiAngry"/> 
     </div>
     <div className="mySlides">
      <ImSleepy color="black" size="120"
       onClick={(e)=>hndlcick5(e)} id="ImSleepy"/> 
     </div>
     <div className="mySlides">
     <FaRegTired color="pink" size="120"
      onClick={(e)=>hndlcick6(e)} id="FaRegTired"/> 
    </div>
     <div className="mySlides">
     <ImConfused color="blue" size="120"
      onClick={(e)=>hndlcick7(e)} id="ImConfused"/> 
    </div>
     </div>
     < button type="submit" className="butndone" id="emoBTN" onClick={(e)=>submt(e)}>
<MdOutlineDoneOutline color="green" size="20" />
</button>

   </div> 

     </React.Fragment>
 
 )
}
export default Emotions;