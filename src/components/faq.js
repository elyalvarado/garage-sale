import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

// markup
const FAQ = () => {
  const data = useStaticQuery(graphql`
    {
      infoJson {
        dates
        lastDay
      }
    }
  `);

  const lastDay = data.infoJson.lastDay;

  return (
    <div id="faq">
      <h2>Preguntas Frecuentes</h2>
      <dl>
        <dt>¿En qué consiste una Venta de Garaje online?</dt>
        <dd>
          Es como una venta de garaje normal, pero por Internet. Si te interesa
          algún producto puedes contactarnos por WhatsApp y acordamos para que
          pases a buscarlo. La diferencia es que en lugar de hacer la venta de
          garaje en un solo día la misma transcurre por más tiempo, con la
          salvedad que algunos items solo pueden ser retirados el último día (
          {lastDay}).
        </dd>

        <dt>¿Qué significa disponible para entrega inmediata?</dt>
        <dd>
          Que si acordamos por WhatsApp la compra pueden pasar a recoger el item
          inmediatamente.
        </dd>

        <dt>
          ¿Porqué el item que quiero no se puede entregar hasta el {lastDay}?
        </dt>
        <dd>
          Por que nos estamos mudando, pero algunas cosas necesitamos para
          nuestro día a día antes de mudarnos.
        </dd>

        <dt>¿Pueden enviarme el item que quiero?</dt>
        <dd>
          En general no estamos haciendo envíos, ya que por la mudanza estamos
          muy ocupados. Dependiendo del item, podemos hacer excepciones, en
          estos casos solicitaremos el pago por adelantado. Contactanos para
          llegar a un acuerdo.
        </dd>

        <dt>
          Me interesa un item disponible solo el último día ¿Puedo reservarlo?
        </dt>
        <dd>
          Si, sin embargo para reservar deberás realizar el pago por adelantado
          para garantizar que no lo vendamos a alguien más. Ten en cuenta que
          los precios ya son bastante económicos.
        </dd>
      </dl>
    </div>
  );
};

export default FAQ;
