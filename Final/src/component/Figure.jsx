import React from 'react'

const Figure = ({wrongLetters}) => {
  const errors = wrongLetters.length;

    return (

      <svg className="smiley figure-container" width="256" height="256" viewBox="0 0 256 256">
     {errors>0 && <circle className="face" cx="128" cy="128" r="120"/>}
     {errors>1 && <circle className="left-eye" cx="100" cy="104" r="12"/>}
      {errors>2 &&<circle className="right-eye" cx="150" cy="104" r="12"/>}
      {errors > 3 &&<path className="mouth" d="M100,160,Q128,190,156,160"/>}
      {errors >4 &&<rect className="left-eyebrow" x="97" y="66" width="6" height="32" rx="4" ry="4"/>}
      {errors >5 &&<rect className="right-eyebrow" x="153" y="66" width="6" height="32" rx="4" ry="4"/>}

      </svg>
    )
}

export default Figure













// import React from 'react'

// function Figure() {
//     return (
//         <div>
//             {/* <svg className="smiley figure-container" width="256" height="256" viewBox="0 0 256 256">
//             <circle className="face" cx="128" cy="128" r="120"/>
//             <circle className="left-eye" cx="100" cy="104" r="12"/>
//             <circle className="right-eye" cx="150" cy="104" r="12"/>
//             <path className="mouth" d="M100,160,Q128,190,156,160"/>
//             <rect className="left-eyebrow" x="97" y="66" width="6" height="32" rx="4" ry="4"/>
//             <rect className="right-eyebrow" x="153" y="66" width="6" height="32" rx="4" ry="4"/>

//             </svg> */}

// <svg className="smiley figure-container" width="256" height="256" viewBox="0 0 256 256">
//      {errors>0 && <circle className="face" cx="128" cy="128" r="120"/>}
//      {errors>1 && <circle className="left-eye" cx="100" cy="104" r="12"/>}
//       {errors>2 &&<circle className="right-eye" cx="150" cy="104" r="12"/>}
//       {errors > 3 &&<path className="mouth" d="M100,160,Q128,190,156,160"/>}
//       {errors >4 &&<rect className="left-eyebrow" x="97" y="66" width="6" height="32" rx="4" ry="4"/>}
//       {errors >5 &&<rect className="right-eyebrow" x="153" y="66" width="6" height="32" rx="4" ry="4"/>}

//       </svg>
            
//         </div>
//     )
// }

// export default Figure
