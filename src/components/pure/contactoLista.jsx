import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/contacto'


const ContactoListaComponent = ({contacto})  => {

    const [conectado, setStatus] = useState(false);
    const status = () => {
        //Actualizar el Status
        if(conectado){
            setStatus(false);

        }else{
            setStatus(true);
        }
    }
  return (
    <div>
            <h2>
                Nombre: {contacto.nombre}
            </h2>
            <h2>
                Apellido: {contacto.apellido}
            </h2>
            <h2>
                Email: {contacto.email}
            </h2>
            <h2>
                Estatus: {conectado ? "Contacto En Línea":"Contacto No Disponible"}
            </h2>
            <div>
            {conectado ? <button onClick={status}>Offline</button>:<button onClick={status}>Online</button>}
            </div>
    </div>
  );
}

ContactoListaComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
}

export default ContactoListaComponent
