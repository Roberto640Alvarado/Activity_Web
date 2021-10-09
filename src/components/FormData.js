
import React, { Fragment, useState } from 'react';


 const FormData = () => {

    const [datos, setDatos] = useState({
        form_data: ''
    })

    const AddForm = (e) => {
        console.log(e.target.value)
        setDatos({
            ...datos,
            [e.target.form_data] : e.target.value
        })

    }
        return(
            <Fragment>
               <h1>Lista de Actividades</h1>
               <form>
                  <input 
                   type = "text" placeholder = "Ingrese nueva tarea..." 
                   name = "form_data"
                   onChange = {AddForm}/>
                  <button type = "submit"> Agregar </button>
               </form>
               <h3>{datos.form_data}</h3>
            </Fragment>
        )
}
export default FormData;