import React, { useState } from 'react';
import './App.css';
import Formulario from './componentes/Formulario'; 
import Resultado from './componentes/Resultado'; 


function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword:""
   
  });

  return (
    <>
    <div className='App'>
      <Formulario inputs={state} setInputs={setState} />
      <Resultado data={state}  />
    </div>
    </>
  );
}

export default App;
