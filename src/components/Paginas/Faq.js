import React from "react"
import Accordion from "react-bootstrap/Accordion";
  
const Faq = () =>{

    return (

	<section id="faq" class="faq section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Preguntas Frecuentes</h2>
        </div>

        <Accordion className="faq-list">
  <Accordion.Item eventKey="0">
    <Accordion.Header>¿Cómo calculo el costo de envío?</Accordion.Header>
    <Accordion.Body>
     <p id="faq-list-1">La misma tienda online, una vez que hayas puesto las prendas en el carrito, calcula el costo de envío ingresando tu código postal y el tiempo de demora en la entrega.
                </p>
    </Accordion.Body>
  </Accordion.Item>


  <Accordion.Item eventKey="1">
    <Accordion.Header>¿Cuándo recibiré la mercadería que compré?</Accordion.Header>
    <Accordion.Body>
     <p id="faq-list-2"> En caso de haber solicitado envío con moto, la entrega suele demorar entre 24hsy 48hs.y se maneja con franjas horarias. La moto suele retirar todos los pedidos entre las 10 y las 12hs, cada día, y de allí va realziando las entregas segun las cercanías de los destinos. Para las 15hs (dependiendo de la cantidad de pedidos que tenga para entregar) por lo general ya está todo repartido y entregado.<br/>
					          En caso de haber solicitado el envío por correo, el mismo correo te indicará la demora en la entrega dependiendo de la provincia a la que se dirige. Generalmente dentro de la semana, todo ha sido entregado.
                </p>
    </Accordion.Body>
  </Accordion.Item>


  <Accordion.Item eventKey="2">
    <Accordion.Header>¿Cómo hago el seguimiento de mi pedido?</Accordion.Header>
    <Accordion.Body>
     <p id="faq-list-3">Te va a llegar un mail confirmando un Nº de Tracking y con ese numero, podes seguir el estado de tu pedido a través de este link de <a href="https://seguimiento.andreani.com/">Andreani</a>
                </p>
    </Accordion.Body>
  </Accordion.Item>

 
  <Accordion.Item eventKey="3">
    <Accordion.Header>La mercadería que llegó no es lo que yo encargue o tiene algún defecto ¿Cómo reclamo?</Accordion.Header>
    <Accordion.Body>
     <p id="faq-list-4">Por favor, comunicate a nuestro whatsapp 115409-0544 o a traves de mail a <a href="mailto:reclamos@galantry.com.ar">reclamos@galantry.com.ar</a>
                </p>
    </Accordion.Body>
  </Accordion.Item>

  
  <Accordion.Item eventKey="4">
    <Accordion.Header>¿Cómo hago una devolución?</Accordion.Header>
    <Accordion.Body>
     <p id="faq-list-5"> Para realizar cambio de prendas, el cliente deberá acercarse a nuestra fabrica en Av. Directorio 7235, en el barrio de Mataderos, CABA y  presentar el ticket correspondiente a la compra, junto al producto con sus etiquetas y embalajes originales. Se realizan cambios UNICAMENTE por fallas. El plazo para cambios es de 30 días desde la compra, una vez pasada la fecha no se aceptarán reclamos.<br/>
                    Ingresá a la seccion de <a href="enviosydevoluciones.html">envíos y devoluciones</a>y encontrarás toda la información.
                </p>
    </Accordion.Body>
  </Accordion.Item>

  
  <Accordion.Item eventKey="5">
    <Accordion.Header>¿Cómo puedo contactarlos?</Accordion.Header>
    <Accordion.Body>
     <p id="faq-list-6">Ingresá a la seccion de <a href="contacto.html">contacto</a> y encontrarás toda la información.
                </p>
    </Accordion.Body>
  </Accordion.Item>

</Accordion>
</div>
</section>  
	)
	}

	export default Faq