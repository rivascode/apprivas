import React, { useState, useContext } from 'react'
import contexto from "../../Context/contexto"
import { firestore } from "../../firebase";
import firebase from 'firebase/app';
import "./OrderForm.css"



const OrderForm = ({checkout, resumen}) => {
    const { carrito, precioTotal, clear, compradorData, setCompradorData, setIdCompra } = useContext(contexto);
   
   
    const [payingProcess, setPayingProcess] = useState(false);

    const payProcess = () =>{
        setPayingProcess(!payingProcess);
    }

    const guardarDatos = (e) => {
      setCompradorData({ ...compradorData, [e.target.name] : e.target.value });
  }
  const [provincia, setProvincia] = useState('')
  const guardarProvincia = (e) => {
    setProvincia(e.target.value)
}

    const validarCampos = () => {
        if ((compradorData.nombre.trim().length && compradorData.apellido.trim().length && compradorData.telefono.trim().length && compradorData.email.trim().length && compradorData.calle.trim().length && compradorData.altura.trim().length && compradorData.piso.trim().length && compradorData.dpto.trim().length && compradorData.cp.trim().length && compradorData.localidad.trim().length && compradorData.provincia.trim().length && compradorData.message.trim().length)) {
            return true;
        } else {
            return false;
        }
    }

    async function stockUpdate () {
      const itemsUpdate = firestore.collection("items").where(firebase.firestore.FieldPath.documentId(), 'in', carrito.map(itemsBuy => itemsBuy.id));
      
      const query = await itemsUpdate.get();

      const batch = firestore.batch();

      query.docs.forEach((itemtoUpDate, itemid) => {
          batch.update(itemtoUpDate.ref, {stock: itemtoUpDate.data().Stock - carrito[itemid].cantidad}); 
      })
      await batch.commit().then(r=>r);
  }

    const sendBuyerInfo = (e) => {
      e.preventDefault();
      if (validarCampos) {
        const buyOrder = firestore.collection("orders");
        const newBuyOrder ={
          comprador: compradorData,
          items: carrito,
          total: precioTotal,
          fecha: firebase.firestore.Timestamp.fromDate(new Date()),
        }
        payProcess();
        buyOrder.add(newBuyOrder)
        .then( ({ id }) => {
          setIdCompra(id); 
        }).catch(error => {
          return error;
        }).finally( () => {
          setCompradorData({
          nombre: '',
          apellido: '',
          telefono: '',
          email: '',
          calle: '',
          altura: '',
          piso: '',
          dpto: '',
          cp: '',
          localidad: '',
          provincia: '',
          message: '',
        });
        checkout();
        resumen();
        stockUpdate ();
        clear();
        
      });
    }
}

    return (
    <> 
      <section class="form_mayorista section-bg mt-5">
        <div class="container d-flex justify-content-center">
        { payingProcess ? <div className="procesando_pago">Procesando el pago...</div> : null}
          <div class="row section-bg">
            <div class="col-lg-12 mt-5 d-flex align-items-stretch">
              <div class="content">    
                    <h5 id="Formulario_Compra">Si el pedido es correcto, ingresá tus datos para finalizar la compra!</h5>

                <form id="Formulario_Compra" action="forms/compra.php" method="post" role="form" class="php-email-form" onSubmit={sendBuyerInfo}>
              
                  <div class="row section-bg">
                    <div class="col-md-6 form-group">
                      <input type="text" class="form-control" id="name" placeholder={compradorData.nombre.length ? compradorData.nombre: "Nombre"} onChange={guardarDatos} compradorData={compradorData.nombre.length ? compradorData.nombre : ""} name="nombre" required/>
                    </div>
                
                    <div class="col-md-6 form-group mt-3 mt-md-0">
                      <input type="text" class="form-control" id="lastname" placeholder={compradorData.apellido.length ? compradorData.apellido: "Apellido"} onChange={guardarDatos} value={compradorData.apellido.length ? compradorData.apellido : ""} name="apellido" required/>
                    </div>
                  </div>
    
                  <div class="row section-bg">
                    <div class="col-md-6 form-group">
                      <input type="phone" class="form-control" id="phone" placeholder={compradorData.telefono.length ? compradorData.telefono: "Telefono"} onChange={guardarDatos} value={compradorData.telefono.length ? compradorData.telefono : ""} name="telefono" required/>
                    </div>
                
                    <div class="col-md-6 form-group mt-3 mt-md-0">
                      <input type="email" class="form-control" id="email" placeholder={compradorData.email.length ? compradorData.email: "Email"} onChange={guardarDatos} value={compradorData.email.length ? compradorData.email : ""} name="email" required/>
                    </div>
                  </div>
                  
                  <div class="row section-bg">
                    <div class="col-md-6 form-group">
                      <input type="text" class="form-control" id="street" placeholder={compradorData.calle.length ? compradorData.calle: "Calle"} onChange={guardarDatos} value={compradorData.calle.length ? compradorData.calle : ""} name="calle" required/>
                    </div>
                
                    <div class="col-md-2 form-group mt-3 mt-md-0">
                      <input type="number" class="form-control" id="streetNumber" placeholder={compradorData.altura.length ? compradorData.altura: "Altura"} onChange={guardarDatos} value={compradorData.altura.length ? compradorData.altura : ""} name="altura" required/>
                    </div>

                    <div class="col-md-2 form-group mt-3 mt-md-0">
                      <input type="text" class="form-control" id="piso" placeholder={compradorData.piso.length ? compradorData.piso: "Piso"} onChange={guardarDatos} value={compradorData.piso.length ? compradorData.piso : ""} name="piso" required/>
                    </div>

                    <div class="col-md-2 form-group mt-3 mt-md-0">
                      <input type="text" class="form-control" id="Dpto" placeholder={compradorData.dpto.length ? compradorData.dpto: "Dpto"} onChange={guardarDatos} value={compradorData.dpto.length ? compradorData.dpto : ""} name="dpto" required/>
                    </div>

                  </div>
                  
                  <div class="row section-bg">
                    <div class="col-md-4 form-group">
                      <input type="text" class="form-control" id="localidad" placeholder={compradorData.localidad.length ? compradorData.localidad: "Localidad"} onChange={guardarDatos} value={compradorData.localidad.length ? compradorData.localidad : ""} name="localidad" required/>
                    </div>

                    <div class="col-md-2 form-group mt-3 mt-md-0">
                      <input type="number" class="form-control" id="CP" placeholder={compradorData.cp.length ? compradorData.cp: "CP"} onChange={guardarDatos} value={compradorData.cp.length ? compradorData.cp : ""} name="cp" required/>
                    </div>
                
                    <div class="col-md-6 form-group mt-3 mt-md-0">
                      <div class="input-group mb-1">
                        <label class="input-group-text" for="inputGroupSelect01" required>Provincia</label>

                        <select name="provincia" class="form-select" id="provincia" onChange={guardarProvincia} required>
                          <option selected>Seleccioná tu provincia...</option>
                          <option value="Buenos Aires">Buenos Aires</option>
                          <option value="CABA">CABA</option>
                          <option value="Catamarca">Catamarca</option>
                          <option value="Chaco">Chaco</option>
                          <option value="Chubut">Chubut</option>
                          <option value="Cordoba">Cordoba</option>
                          <option value="Corrientes">Corrientes</option>
                          <option value="Entre Rios">Entre Rios</option>
                          <option value="Formosa">Formosa</option>
                          <option value="La Pampa">La Pampa</option>
                          <option value="La Rioja">La Rioja</option>
                          <option value="Mendonza">Mendonza</option>
                          <option value="Misiones">Misiones</option>
                          <option value="Neuquen">Neuquén</option>
                          <option value="Río Negro">Río Negro</option>
                          <option value="Salta">Salta</option>
                          <option value="San Juan">San Juan</option>
                          <option value="San Luis">San Luis</option>
                          <option value="Santa Cruz">Santa Cruz</option>
                          <option value="Santa Fe">Santa Fe</option>
                          <option value="Santiago del Estero">Santiago del Estero</option>
                          <option value="Tierra del Fuego">Tierra del Fuego</option>
                          <option value="Tucuman">Tucumán</option>
                          <option value="Otro pais">Otro país</option>
                        </select>
                      </div>
                    </div>
              
                  <div class="form-group mt-0 section-bg">
                    <textarea class="form-control" rows="2" placeholder={compradorData.message.length ? compradorData.message: "Observaciones sobre la compra o los datos del envío?"} onChange={guardarDatos} value={compradorData.message.length ? compradorData.message : ""} name="message"/>
                  </div>
              
                  <div className="row">
                    <div className="col-md-12 text-center mb-4 section-bg">
                    <button type="submit" className="comprar">Pagar</button>
                  </div>
                </div>
                </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
</>
    )
}
export default OrderForm