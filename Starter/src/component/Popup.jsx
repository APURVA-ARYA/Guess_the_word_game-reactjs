import React ,{useEffect}from 'react'
import {checkWin  } from "./Helpers";






const Popup= ()=> {
 
    return (
        <div className="popup-container" id="popup-container" style={finalMessage!==''?{display:'flex'}:{}}>
      <div className="popup">
    
      </div>
    </div>
    )
}

export default Popup
