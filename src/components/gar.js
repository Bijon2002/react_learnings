import Car from './car';
import Apple from './Apple';

function Gar()
{

  const isdooropened = false;
 // const brand = "BMferarW";
  //const color = "red";

  const carinfo ={brand:"BMW", color:"red"};
  // const carinfo={};
  const appleinfo ={type:"fruit", color:"red"};

  const carlist=[
    {brand:"BMW", color:"red"},
    {brand:"Toyota", color:"blue"},
    {brand:"Honda", color:"green"}
  ]

  const numberlist =[1,2,3,4,5,6,7,8,9];
  const showcarinfo=carinfo.brand !== undefined && carinfo.color !== undefined ;
 
  return(
  <>
    <h1>who is this</h1>
    {/* <Car brand={brand}  color={color} /> */}
 { showcarinfo && <Car carinfo={carinfo} />}
    <Apple appleinfo={appleinfo}/>
   {isdooropened? <h2>door is opened</h2>: <h2>door is closed</h2>}

<ul>
  
  {carlist.map((carinfo)=>     <li key={carinfo.brand}>  <Car carinfo={carinfo}/></li>
  )}


  
  
  
  </ul>

  <ul>
    {numberlist.map((e,index) =><p key ={index}>{}</p>)}
  </ul>


    </>
  );
} 


export default Gar;