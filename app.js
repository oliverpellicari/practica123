// Importar las dependencias necesarias
const express = require('express'); // Framework para manejar peticiones HTTP y construir el servidor
const path = require('path'); // Módulo para trabajar con rutas de archivos y directorios
const indexRouter = require('./routes/usuario'); // Importar el archivo de rutas

// Crear una instancia de la aplicación Express
const app = express();

// Configuración del motor de plantillas EJS
app.set('view engine', 'ejs'); // Usar EJS como motor de plantillas
app.set('views', path.join(__dirname, 'views')); // Definir la ruta donde están las vistas (carpeta "views")

// Configurar archivos estáticos (CSS, JS del cliente, imágenes, etc.)
app.use(express.static(path.join(__dirname, 'public'))); // Definir la carpeta "public" para archivos estáticos

// Usar las rutas definidas en el archivo index.js para manejar las peticiones
app.use('/', indexRouter);

// Definir el puerto del servidor
const port = 3000; // El servidor correrá en el puerto 3000
// Iniciar el servidor y escuchar en el puerto definido
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`); // Imprimir mensaje en la consola al iniciar el servidor
});

const usuarioRoutes = require('./routes/usuario');
app.use('/usuario', usuarioRoutes);