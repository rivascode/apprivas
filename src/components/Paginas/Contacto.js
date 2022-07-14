import React from "react"

const Contacto = () =>{

  return (

<section id="contacto" class="contacto">
  <div class="container">

    <div class="section-title mt-4 pt-4">
      <h2>Contacto</h2>
    </div>
  </div>

  <div class="container">
    <div class="row">

      <div class="atencion col-lg-4">
        <h2>Atención al Cliente</h2>
            <h4>Si ya sos cliente de Galantry,<br/> comunicate con nosotros<br/> a través de: </h4>
        <div class="info">
          <div class="email">
            <h4>Email:</h4>
            <a href="mailto:clientes@galantr.com.pe" target="_blank"><i class="bi bi-envelope"></i>clientes@galantry.com.pe</a>
          </div>

          <div class="phone">
            <h4>Whatsapp o Celular:</h4>
            <a href="https://api.whatsapp.com/send?phone=05xxxxxxxxx" target="_blank"><i class="bi bi-whatsapp"></i>+51 999 999 999</a>
          </div>

        </div>

      </div>

      <div class="atencion col-lg-8 mt-5 mt-lg-0">
        <h2>¿Consultas, dudas... Comentarios?</h2>
        <h4>Escribinos por cualquier inquietud acerca de nuestros productos y servicios.</h4>
        <form id="ContactForm"action="forms/contact.php" method="post" role="form" class="php-email-form">
          <div class="row">
            <div class="col-md-6 form-group">
              <input type="text" name="name" class="form-control" id="name" placeholder="Nombre y Apellido" required></input>
            </div>
            <div class="col-md-6 form-group mt-3 mt-md-0">
              <input type="email" class="form-control" name="email" id="email" placeholder="Email" required></input>
            </div>
          </div>
          <div class="form-group mt-3">
            <input type="text" class="form-control" name="subject" id="subject" placeholder="Motivo del Mensaje" required></input>
          </div>
          <div class="form-group mt-3">
            <textarea class="form-control" name="message" rows="5" placeholder="Mensaje" required></textarea>
          </div>
          <div class="my-3">
            <div class="loading">Cargando</div>
            <div class="error-message"></div>
            <div class="sent-message">Su mensaje ha sido enviado con éxito. Muchas gracias!</div>
          </div>
          <div class="text-center mb-4"><button type="submit">Enviar Mensaje</button></div>
        </form>

      </div>

    </div>

  </div>
</section>
)
}

export default Contacto