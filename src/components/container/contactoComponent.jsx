import React from 'react';
import { Contacto } from '../../models/contacto';
import ContactoListaComponent from '../pure/contactoLista';

const ContactoComponent = () => {
    const contacto = new Contacto("Victor","Reveron","victor@gmail.com");
    return (
        <div>
            <h1>
                Contacto
            </h1>
            <ContactoListaComponent contacto={contacto}></ContactoListaComponent>
        </div>
    );
};



export default ContactoComponent;
