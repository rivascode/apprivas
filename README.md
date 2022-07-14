# Projecto Final del Curso React de CoderHouse 2021

## Inicializando el proyecto
Lo **primero** que se puede hacer para obtener el proyecto es clonarlo a través de [GitHub](https://github.com), especificamente para éste proyecto a través de: 

```bash

git clone https://github.com/rivascode/apprivas


```

Luego se debe instalar la versión npm recomendada, en caso de no tenerlo:

```bash

nvm install

```

Instalar las dependencias:

```bash

npm install

```

Por último iniciar el servidor:

```bash

npm start

```
Para visualizar el proyecto en el navegador, una vez instalado, abrir mediante [http://localhost:3000](http://localhost:3000) 

## Concepto del Proyecto
Esta pagina fue realizada durante el curso de Javascript de CoderHouse y luego se ha creado una aplicación ecommerce acorde con los lineamientos, desafíos y rubricas que se nos fueron presentando el curso de React de CoderHouse.

Es la pagina de un familiar que es fabricante de ropa masculina: Galantry Man.

Para el desarrollo de la aplicación se utilizó la librería de JavaScript [React](https://es.reactjs.org/) 
Para el diseño y estilos se utilizó [React-Bootstrap](https://react-bootstrap.github.io/) con un diseño responsive, iconos de [Bootstrap](https://icons.getbootstrap.com/), tipografías de [Google Fonts](https://fonts.google.com/)  y otros ajustes fueron personalizados en el archivo estilos.css 

### Recorrido por el Sitio


------------------------------------------
El header es sticky y contiene una barra de navegación con los siguientes vínculos: 

- Isologo.
- Tienda ecommerce con una barra de navegacion desplegable que discrimina por categorías de productos.
- Catálogo online descargable.
- Contacto que contiene un formulario de consultas y otros datos de contacto.
- Mayoristas que contiene un formulario de contacto para quienes quisieran hacer este tipo de compras o reventa de los productos.
- LogIn de usuario para consultar compras realizadas y datos del cliente (aun no implementado).
- Carrito de compras que guía el proceso de realizar una compra en la tienda. 
Contiene formulario para finalizar la compra de los productos seleccionados, muestra el detalle de la compra realizada y luego el código correspondiente a esa compra. 
- Buscador (aun no implementado).

### Body
Es el lugar donde se despliega el contenido de las diferentes secciones. 
Por defecto cuando la ruta es ' / ' donde se muestra el home o pagina de inicio. 
Otras opciones de contenido de la pagina son:
- tienda ecommerce cuya ruta es '/tienda' 
- catalogo online descargable cuya ruta es ' /catalogo ' 
- contacto cuya ruta es ' /contacto'  y
- mayoristas cuya ruta es ' /mayoristas ' 

### Footer
Se encuentra presente en la navegacion de todas las secciones del sitio. 
Contiene 4 divisiones con los siguientes vínculos: 
1) Isologo que redirige a la pagina de inicio,
2) Links Utiles:
- FAQ - Preguntas frecuentes,
- Atención al cliente, que conduce al formualrio de contacto,
- Envíos y Devoluciones,
- Términos y Condiciones, y 
- Mapa del sitio (aun no se ha desarrollado).
3) Formas de contacto: ubicacion en google maps, chat con whatsapp web y redireccionamiento para enviar correos electronicos.
4) Suscripción al Newsletter

------------------------------------------ 
## Navegación por la Tienda
El contenido que se muestra en la tienda es el catálogo completo de todos los productos. 

### Categorías
Se puede acceder a las diferentes categorias de los productos a traves de la barra de navegacion desplegable en el header o a traves del navegador ubicado a la izquierda dentro de la pagina de inicio.

### Ítem
Cada producto se presenta en un bloque que contiene: la imagen del producto, su nombre, una breve descripción, precio, aviso de disponibilidad de stock y un botón para acceder a mayores detalles del producto.

### Detalle del ítem
En esta sección se filtra el catálogo por el id del producto que se desea ver. Se muestra un solo bloque en pantalla que contiene: la imagen del producto en un mayor tamaño, nombre y descripción detallada del prodcuto, precio,  botones para seleccionar cantidad deseada y un botón para agregar al carrito.

Una vez presionado el boton "agregar al carrito", se agrega el id y categoria del producto y otro botón para "terminar la compra".

### Carrito
Esta sección muestra el detalle de cada ítem agregado al carrito. 
El detalle incluye: una pequeña imagen del producto, su nombre, precio, las unidades del producto dispobibles en stock, la cantidad del producto seleccionada, el subtotal por la compra de ese o esos productos y un icono de cesto para eliminar el producto del carrito si se quisiese. Tambien se puede modificar la cantidad de productos deseados al clickear nuevamente la imagen del producto.

Al final del detalle de productos, se visualiza el monto total a pagar y 3 botones: uno que permite borrar todos los productos del carrito y vaciarlo, otro para "seguir comprando" otros productos en la tienda y un último botón, que permite "finalizar la compra" a traves de un formulario que se abre debajo.

### Formulario de Compra y Número Orden
El formulario presenta 12 campos para que el usuario ingrese sus datos personales y si lo desea, alguna observación. Si se completan todos los campos requeridos, se muestra el botón "Pagar". 
Una vez procesado el pago se genera una orden de compra en la base de datos y se muestra al usuario el código de identificacion correspondiente a su compra junto al monto total abonado. 
Se ha agregado la opcion de salida, redireccionando a la pagina de inicio a través del botón "Volver al Home".
