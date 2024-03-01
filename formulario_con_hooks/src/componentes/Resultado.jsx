import React from 'react';
const Resultado = props => {
    const {firstName,lastName,email,password,confirmPassword}=props.data;
    return(
        <div>
            <h2>Resultado</h2>
            <p>Nombre:{firstName}</p>
            <p>Apellido:{lastName}</p>
            <p>Emial:{email}</p>
            <p>Contraseña:{password}</p>
            <p>Confirmar Contraseña:{confirmPassword}</p>
        </div>
    )
       
    
}
export default Resultado;