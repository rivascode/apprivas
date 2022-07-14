import React from "react"
import 'react-bootstrap-icons'

const Mayoristas = () =>{

  return (
    <>
 <section id="Mayoristas" class="d-flex align-items-center">
  <div class="container">
    <h1 id="TituloMayoristas">Mayoristas</h1>
    <h2 id="TituloMayoristas">Sumate a nuestra red nacional de vendedores </h2>
    <a href="#MayoristaFormulario" class="btn-get-started scrollto">Completar Formulario</a>
  </div>
</section>

<section id="MayoristasCards" class="mayoristas_cards">
    <div class="container">

      <div class="row">
        <div class="col-lg-4 d-flex align-items-stretch">
          <div class="content">
            <h3>Galantry Man</h3>
            <p>Somos una fabrica textil con más 25 años de experiencia en el mercado.
              <br/>
              <br/>
              Fabricamos indumentaria masculina de estilo tradicional, refinado y clásico. Prendas que además, son cómodas y confortables.
              <br/>
              <br/>
            </p>
            <div class="text-center">
              <a href="#MayoristaFormulario" class="more-btn">Mas info <i class="bx bx-chevron-right"></i></a>
            </div>
          </div>
        </div>
        <div class="col-lg-8 d-flex align-items-stretch">
          <div class="icon-boxes d-flex flex-column justify-content-center">
            <div class="row">
              <div class="col-xl-4 d-flex align-items-stretch">
                <div class="icon-box mt-4 mt-xl-0">
                  <i class="bi bi-truck"></i>
                  <h4>Envíos a todo el País</h4>
                  <p>Hacemos envíos a todo el país a través de expresos y correos</p>
                </div>
              </div>
              <div class="col-xl-4 d-flex align-items-stretch">
                <div class="icon-box mt-4 mt-xl-0">
                  <i class="bi bi-scissors"></i>
                  <h4>Materiales de Calidad</h4>
                  <p>Trabajamos con diseños clásicos utilizando materias primas de primera calidad.</p>
                </div>
              </div>
              <div class="col-xl-4 d-flex align-items-stretch">
                <div class="icon-box mt-4 mt-xl-0">
                  <i class="bi bi-rulers"></i>
                  <h4>Amplia Curva de Talles</h4>
                  <p>Fabricamos desde el talle 38 al 60 y <br/>desde el talle S al XXL.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>

  <section class="form_mayorista section-bg mt-5">
    <div class="container d-flex justify-content-center">

      <div class="row section-bg">
        <div class="col-lg-12 mt-5 d-flex align-items-stretch">
          <div class="content">    
        
            <h2 id="MayoristaFormulario">¡Conocé más sobre nuestros productos!</h2>
        
            <h4>Completá el formulario y nos contactaremos a la brevedad.</h4>
        
            <form id="ContactFormMayo"action="forms/contact.php" method="post" role="form" class="php-email-form">
          
              <div class="row section-bg">
            
                <div class="col-md-6 form-group">
              
                  <input type="text" name="name" class="form-control" id="name" placeholder="Nombre" required/>
            
                </div>
            
                <div class="col-md-6 form-group mt-3 mt-md-0">
              
                  <input type="text" name="lastname" class="form-control" id="lastname" placeholder="Apellido"/>
            
                </div>
          
              </div>

              <div class="row section-bg">
            
                <div class="col-md-6 form-group">
              
                  <input type="phone" name="phone" class="form-control" id="phone" placeholder="(Código de área) Teléfono"/>
            
                </div>
            
                <div class="col-md-6 form-group mt-3 mt-md-0">
              
                  <input type="email" class="form-control" name="email" id="email" placeholder="Email" required/>
            
                </div>
          
              </div>

              <div class="row section-bg">
            
                <div class="col-md-6 form-group">
              
                  <input type="text" name="localidad" class="form-control" id="localidad" placeholder="Localidad" required/>
            
                </div>
            
                <div class="col-md-6 form-group mt-3 mt-md-0">

                  <div class="input-group mb-1">
                    <label class="input-group-text" for="inputGroupSelect01">Provincia</label>
                    <select class="form-select" id="provicnia" required>
                      <option selected>Seleccioná tu provincia...</option>
                      <option value="1">Buenos Aires</option>
                      <option value="2">CABA</option>
                      <option value="3">Catamarca</option>
                      <option value="4">Chaco</option>
                      <option value="5">Chubut</option>
                      <option value="6">Córdoba</option>
                      <option value="7">Corrientes</option>
                      <option value="8">Entre Ríos</option>
                      <option value="9">Formosa</option>
                      <option value="10">Jujuy</option>
                      <option value="11">La Pampa</option>
                      <option value="12">La Rioja</option>
                      <option value="13">Mendoza</option>
                      <option value="14">Misiones</option>
                      <option value="15">Neuquén</option>
                      <option value="16">Río Negro</option>
                      <option value="17">Salta</option>
                      <option value="18">San Juan</option>
                      <option value="19">San Luis</option>
                      <option value="20">Santa Cruz</option>
                      <option value="21">Santa Fe</option>
                      <option value="22">Santiago del Estero</option>
                      <option value="23">Tierra del Fuego</option>
                      <option value="24">Tucumán</option>
                      <option value="25">Otro país</option>
                    </select>
                  </div>
            
                </div>
          
              </div>
          
              <div class="form-group mt-0 section-bg">
            
                <textarea class="form-control" name="message" rows="5" placeholder="Dejanos tu mensaje" required></textarea>
          
              </div>
          
              <div class="my-3">
            
                <div class="loading">Cargando</div>
            
                <div class="error-message"></div>
            
                <div class="sent-message">El formulario ha sido enviado con éxito. Muchas gracias!</div>
          
              </div>
          
              <div class="text-center mb-4 section-bg"><button type="submit">Enviar</button></div>
        
            </form>

      
          </div>
   
        </div>
   
      </div>
      
    </div>
      
  </section>

  </>

  )
}

export default Mayoristas
