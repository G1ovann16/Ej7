import React, { useEffect, useState } from "react";

const ClockFunction = () => {
  const dataInitial = {
    fecha: new Date(),
    edad: 0,
    nombre: "Martín",
    apellidos: "San José",
  };
  const [data, setData] = useState(dataInitial);

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  });

  const tick = () => {
    setData({ ...data, fecha: new Date(), edad: data.edad + 1 });
  };

  return (
    <div>
      <h2>
        Hora Actual:
        {data.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {data.nombre} {data.apellidos}
      </h3>
      <h1>Edad: {data.edad}</h1>
    </div>
  );
};


export default ClockFunction;
