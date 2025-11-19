import Car from './car';
import Apple from './Apple';

function Gar()
{
 // const brand = "BMferarW";
  //const color = "red";

  const carinfo ={brand:"BMW", color:"red"};
  const appleinfo ={type:"fruit", color:"red"};
 
  return(
  <>
    <h1>who is this</h1>
    {/* <Car brand={brand}  color={color} /> */}
    <Car carinfo={carinfo} />
    <Apple appleinfo={appleinfo}/>
    </>
  );
} 


export default Gar;