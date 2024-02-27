
import './App.css'

import React from 'react';
import PersonCard from './componentes/tarjeta_persona';

function App() {
  return (
    <div>
      <PersonCard firstName="Doe" lastName="Jane" age={45} hairColor="Black" />
      <PersonCard firstName="Jane" lastName="Smith" age={25} hairColor="Blonde" />
      <PersonCard firstName="Michael" lastName="Johnson" age={40} hairColor="Black" />
      <PersonCard firstName="Emily" lastName="Williams" age={35} hairColor="Red" />
    </div>
  );
}

export default App;