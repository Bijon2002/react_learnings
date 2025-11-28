import { useState } from 'react';

function Scooter() {
    const [color, setColor] = useState('red');
    const [model, setModel] = useState('2020');
    const [brand, setBrand] = useState('honda');

    return (
    <>
   <h1>my scooter </h1>
   <p>color : {color}</p>
    <p>model : {model}</p>
    <p>brand :  {brand}</p>
    
            </>
    );

}

export default Scooter;
