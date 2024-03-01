# ECCOMERCEDLG - E-market
## Descripción:
Somos una plataforma dedicada a ofrecerte una experiencia de compra en línea que simplifica tu vida diaria. Descubre la comodidad de tener tus productos de supermercado favoritos al alcance de un clic, con entrega rápida y opciones de calidad.

## Acerca del Proyecto
Desarrollado con React y librerias externas (firebase/sweetalert2), estilos con CSS.

## Requisitos previos:
* Node.js
* IDE (para ejecutar el proyecto e instalar los módulos necesarios. Ej: VS Code)
* Navegador web.

## Instrucciones de instalación y ejecución:
Una vez clonado o descargado el repositorio, abre tu IDE de preferencia y ejecuta los siguientes comandos en la consola:

- npm install
- npm start

El primer comando instalará los módulos necesarios para que funcione la aplicación, mientras que el segundo la ejecutará a nivel local para poder interactuar con la misma.

## Recursos externos:
Para el funcionamiento del proyecto, utiliza el servicio de Firestore Database almacenando en esta base de datos no sql:
* Productos    
* Ordenes de Compra

## Diseño responsive
La estructura del sitio tiene características distintas para pantallas de hasta 412 px (punto de quiebre) y superiores, a fin de poder mostrar de manera más organizada los datos al usuario.

## Uso del proyecto:

En la Página Principal, se presenta un listado aleatorio del contenido disponible en el sitio. Puede explorar el contenido a través del Navbar, interactuando con los rubros y/o categorias de productos. Se utilizan rutas dinámicas y reutilización de componentes para llegar a filtrar la opción elegida por el usuario, permitiendo a través de la opción "ver detalle", ingresar al producto seleccionado, ver todas sus características y agregarlo al carrito.

En el Navbar y sobre el margen superior derecho se muestra el carrito que muestra de manera dinámica su contenido actual (cantidad de Items, productos e importe total). También se destaca la posibilidad de mostrar de manera desplegable y hacia abajo el listado de productos agregados ante el desplazamiento del mouse por sobre el componente.
Todo esto permite tener una visión completa del carrito, antes de ingresar al mismo.

Durante la selección de productos, tenemos la posibilidad de seleccionar desde 1 elemento hasta la cantidad que cuente en el stock actual del mismo. Si un producto no tiene stock, no permite su selección ni se muestra su precio, si tiene hasta 3 unidades depliega una advertencia sobre su cantidad actual en stock.

Una vez completada la selección de productos, podemos acceder al carrito a través del "tooltip" que se despliega al desplazarse por el mismo ó haciendo click sobre su imagen.

El carrito nos muestra un detalle de los productos agregados, con la posibilidad de agregar, quitar o eliminar por completo. En este punto, también se realizan los controles sobre el stock actual.

Decidido su contenido y previo a poder comprar, debemos validar el stock. Esto así, porque no siempre la compra es inmediata a la carga del carrito, por lo tanto, el sistema obliga a validar las cantidades contra el stock actual, mostrando una leyenda que indica cuando un producto tiene más unidades que las disponibles. Solo se habilita la opción de compra cuando se ha ejecutado esta validación y no hay productos cargados por sobre su stock.

Una vez ejecutada la opción de compra, pasamos al formulario de validación, donde debemos cargar los datos necesarios para confeccionar la Orden de Compra. Aquí también hacemos validación de que no falten datos y que el email coincida con su confirmación. Una validad la entrada de datos por el usuario, se habilita el botón "confirmar".
Dicha confirmación genera una Orden de compra que se almacena en la base de datos, informando el ID de la misma para seguimiento al usuario.
En este punto se produce el alta de dicha orden de compra en la base de datos y además la actualización del stock de los productos involucrados en la misma.

## Despliegue de la aplicación

La aplicación se aloja en el servidor de hosting de Firebase, pudiendo acceder a la misma a través de:
- https://ecommerce-dlg.web.app/
- https://ecommerce-dlg.firebaseapp.com/

## Screenshots
![alt Vista Home](.//src/ImagenesReadme/home.jpg)
![alt Vista Rubros](.//src/ImagenesReadme/Rubros.jpg)
![alt Vista Categorias](.//src/ImagenesReadme/Categorias.jpg)
![alt Vista Detalle](.//src/ImagenesReadme/Detalle.jpg)
![alt Vista Carrito](.//src/ImagenesReadme/Carrito.jpg)
![alt Vista Mobile](.//src/ImagenesReadme/Mobile.jpg)

## Desarrollador
Juan Pablo Wibaux
De La Garma - Pcia de BsAs - Argentina
Estudiante Desarrollador Web Full Stack







