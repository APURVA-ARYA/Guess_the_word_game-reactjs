import React ,{useEffect}from 'react'
import {checkWin  } from "./Helper";



const Popup= ({correctLetters,wrongLetters,selectedWord,setPlayable,playagain})=> {
  let finalMessage='';
  let finalMessageRevealWord= "";
  let playable=true;

  if(checkWin(correctLetters,wrongLetters,selectedWord)==='win'){
    finalMessage="CONGRATULATIONS!! YOU WON ";
    playable=false;
  

  }
  else if(checkWin(correctLetters,wrongLetters,selectedWord)==='lose'){
    
    finalMessage="BETTER LUCK NEXT TIME you loose";
     finalMessageRevealWord= `The word was :${selectedWord}`;
     playable= false;
  
  }

  useEffect(()=>setPlayable(playable));
    return (
        <div className="popup-container" id="popup-container" style={finalMessage!==''?{display:'flex'}:{}}>
      <div className="popup">
        <h2 >{finalMessage}</h2>
        <h3 >{finalMessageRevealWord}</h3>
        <button onClick={playagain}>Play Again</button>
      </div>
    </div>
    )
}

export default Popup
