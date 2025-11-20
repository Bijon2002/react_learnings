import {useState} from 'react';

function Favouritecolor()
{
  
    //  let color = "yellow";

    const [color, setColor] = useState('yellow');
    
         return(
         <>
         <h1>My favourite color is {color}</h1>
         <button onClick={()=>{ setColor('red')}}>  change color</button>
          <button onClick={()=>{ setColor('blue')}}>  change color</button>
           <button onClick={()=>{ setColor('green')}}>  change color</button>
         </>
            ); 
    
}

export default Favouritecolor;