import React from 'react';

const Formulario = props => {
    // Desestructuración de props para obtener 'inputs' y 'setInputs'
    const { inputs, setInputs } = props;

    // Función que maneja los cambios en los campos de entrada
    const onChange = e => {
        // Actualiza el estado 'inputs' con los nuevos valores del campo de entrada
        setInputs ({
            ...inputs, // Conserva los valores anteriores del estado 'inputs'
            [e.target.name]: e.target.value // Actualiza el valor del campo de entrada correspondiente
        });
    };

    // Renderiza el formulario con campos de entrada y etiquetas
    return (
        <form className='formulario'>
            <label htmlFor="firstName">Nombre</label>
            {/* Campo de entrada para el nombre con el evento 'onChange' vinculado a la función 'onChange' */}
            <input onChange={onChange} type="text" name="firstName" placeholder="First Name" />

            <label htmlFor="lastName">Apellido</label>
            {/* Campo de entrada para el apellido con el evento 'onChange' vinculado a la función 'onChange' */}
            <input onChange={onChange} type="text" name="lastName" placeholder="Last Name" />

            <label htmlFor="email">Correo</label>
            {/* Campo de entrada para el correo con el evento 'onChange' vinculado a la función 'onChange' */}
            <input onChange={onChange} type="text" name="email" placeholder="Email" />

            <label htmlFor="password">Contraseña</label>
            {/* Campo de entrada para la contraseña con el evento 'onChange' vinculado a la función 'onChange' */}
            <input onChange={onChange} type="password" name="password" placeholder="Password" />
            <label htmlFor="password">Contraseña</label>
            {/* Campo de entrada para la contraseña con el evento 'onChange' vinculado a la función 'onChange' */}
            <input onChange={onChange} type="confirmPassword" name="confirmPassword" placeholder="confirmPassword" />

            
        </form>
    );
}

export default Formulario;
