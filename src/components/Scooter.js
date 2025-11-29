import { useState } from 'react';

function Scooter() {
    // const [color, setColor] = useState('red');
    // const [model, setModel] = useState('2020');
    // const [brand, setBrand] = useState('honda');

    //uisng only one state a dn give values to properties
    const [scooter, setScooter] = useState(
        
        {
        color: 'red',
        model: '2020', 
        brand: 'honda'});


        function changeColor() {
            setScooter(previousState => {
                return{...previousState, color: 'blue' };    
            });     

        

        }

        console.log('current state',scooter);

    return (
    <>
   <h1>my scooter </h1>
   <p>color : {scooter.color}</p>
    <p>model : {scooter.model}</p>
    <p>brand :  {scooter.brand}</p>
<button onClick={changeColor}>change color</button>

    
            </>
    );

}

export default Scooter;
