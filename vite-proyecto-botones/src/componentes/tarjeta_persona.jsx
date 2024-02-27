import React, { useState } from 'react';

function PersonCard(props) {
  const { firstName, lastName, age, hairColor } = props;
  const [personAge, setPersonAge] = useState(age); // Estado local para la edad

  const increaseAge = () => {
    setPersonAge(personAge + 1); // Aumentar la edad en 1
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '5px', width: '300px' }}>
      <h2>{firstName} {lastName}</h2>
      <p>Age: {personAge}</p> {/* Mostrar la edad actualizada */}
      <p>Hair Color: {hairColor}</p>
      <button onClick={increaseAge}>Increase Age {firstName} {lastName}</button> {/* Botón para aumentar la edad */}
    </div>
  );
}

export default PersonCard;
