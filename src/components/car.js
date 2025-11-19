//any file name  you can give

function Car(props)
{
  // const {brand, color} = props;
  const {carinfo} = props;
  const {brand, color} = carinfo;

  // const {appleinfo} = props;
  // const {type, colors} = appleinfo;

  const test = `hii im a ${color} ${brand} car `;
  
  return(
    <h1>{test}</h1>
  );
}

export default Car;