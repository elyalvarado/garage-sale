import * as React from "react";
import styled from "styled-components";

const ContactDetails = styled.div`
  display: flex;
`;

const ContactInfo = styled.h3`
  margin-top: 0;
  flex: 2 1 0;
`;

const ContactNumbers = styled.ul`
  font-size: 1.5em;
  flex: 1 1 0;
`;

// markup
const Contact = () => {
  return (
    <div id="contact">
      <h2>Información de Contacto</h2>
      <ContactDetails>
        <ContactInfo>
          Para cualquier información acerca de alguno de los items arriba,
          aclarar dudas, o realizar una compra, pueden contactarnos por WhatsApp
          a los siguientes números:
        </ContactInfo>
        <ContactNumbers>
          <li>+57 (321) 900-8726</li>
          <li>+57 (322) 328-4804</li>
        </ContactNumbers>
      </ContactDetails>
    </div>
  );
};

export default Contact;
