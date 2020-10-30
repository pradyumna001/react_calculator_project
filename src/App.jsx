import React from 'react';
import add from './Add';
import sub from './Sub';
import div from './Div';
import mul from './Mul';

function App() {
  

var d=new Date();

let hours=d.getHours(); 


let wish="";
let wishcss={}

if(hours>=1 && hours<12){
   wishcss={
  color:'green',
}
 wish="Good Morning"
}
else if (12 <= hours && hours< 19) {
   wishcss={
    color:'orange',
  }
   wish="Good Afternoon";
}
else if (19<= hours && hours< 24) {
 wishcss={
  
  color:'black',
}
 wish="Good Night";

}
    return ( 
      <>
        <div className = "parent" >
        <h1> Hello Sir <span style = {wishcss}> {wish} </span> </h1>
        </div> 
        <div>
         <ul>
           <li>sum of two no is {add(40,2)}</li>
           <li>sub of two no is {sub(40,2)}</li>
           <li>multipliaction of two no is {mul(30,2)}</li>
           <li>division of two no is {div(30,2)}</li>
         </ul>
        </div>
        
      </>
    )
    
}

export default App;