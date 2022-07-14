import React from "react"
import Accordion from "react-bootstrap/Accordion";

const Enviosydevoluciones = () =>{

  return (

  
    <section id="EnviosDevoluciones" class="envios_devoluciones section-bg">
      <div class="container">

        <div class="section-title">
          <h2 id="EnvDev">Envíos & Devoluciones</h2>
        </div>

        <Accordion className="envios_devoluciones-list">
  <Accordion.Item eventKey="0">
    <Accordion.Header>1. ENVÍOS</Accordion.Header>
    <Accordion.Body>
     <p id="envios">Todos los costos de envío que suceden por compras dentro de GALANTRY.COM.AR corren por cuenta exclusiva de nuestros clientes, excepto aclaración expresa en contrario. <br/>
                    Una vez que el producto haya sido entregado a la empresa transportista a cargo del delivery al Usuario, el Usuario recibirá un número de identificación para el seguimiento del producto, así como también el teléfono de atención al cliente de dicha empresa, para efectuar cualquier consulta.<br/> 
                    Es importante que conserve esa información recibida, para poder efectuar cualquier reclamo.<br/> 
                    Una vez despachada la orden de compra, no es posible cambiar la dirección de entrega.<br/> 
                    La entrega de la mercadería se pactará en el domicilio que el Usuario proporcionó para ello. Si la mercaderia ha sido enviada vía correo, de no encontrarse en el domicilio al momento de la entrega, el transportista hará una segunda visita. Si aún así no lograra entregar la mercadería, dejará un teléfono para que el Usuario pueda programar directamente la entrega con ellos.<br/> 
                    Si la mercadería fuera entregada vía servicio de moto, de no encontrarse nadie en el domicilio para recibirla, la empresa intentará contactarse con el Usuario, y en caso de no poder entregarla, la misma regresará a nuestra fabrica. El Usuario deberá decidir luego, si desea abonar otro servicio de moto para la entrega o si prefiere retirarla por cualquiera de nuestros 2 puntos de retiro ofrecidos como opción.<br/>
                    <br/>
                    En caso de haber solicitado envío con moto, la entrega suele demorar entre 24hsy 48hs.y se maneja con franjas horarias. La moto suele retirar todos los pedidos entre las 10 y las 12hs, cada día, y de allí va realziando las entregas segun las cercanías de los destinos. Para las 15hs (dependiendo de la cantidad de pedidos que tenga para entregar) por lo general ya está todo repartido y entregado.
                    En caso de haber solicitado el envío por correo, el mismo correo te indica la demora en la entrega dependiendo de la provincia a la que se dirige. Generalmente dentro de la semana, todo ha sido entregado.<br/>
                    GALANTRY MAN (RELAN SRL) tiene asegurada la mercadería durante el tiempo en que la mercadería está en tránsito hacia la dirección de entrega. A partir del momento en que la mercadería es entregada en condiciones y luego de firmar el acuse de recibo, la responsabilidad sobre los productos entregados pasa a ser del Usuario.
                </p>
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="1">
    <Accordion.Header>2. DEVOLUCIONES</Accordion.Header>
    <Accordion.Body>
      <p id="devoluciones">  Para realizar cambio de prendas, el cliente deberá acercarse a nuestra fabrica en Av. Directorio 7235, en el barrio de Mataderos, CABA y  presentar el ticket correspondiente a la compra, junto al producto con sus etiquetas y embalajes originales. Se realizan cambios UNICAMENTE por fallas. El plazo para cambios es de 30 días desde la compra, una vez pasada la fecha no se aceptarán reclamos.
                </p>
    </Accordion.Body>
  </Accordion.Item>

            
  </Accordion>
      </div>
    </section>
    )
  }

export default Enviosydevoluciones