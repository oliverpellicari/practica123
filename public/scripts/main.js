// routes/usuario.js
const express = require('express');
const router = express.Router();
const mysql = require('mysql2/promise');
const { sumar, enMayusculas, Persona } = require('../public/scripts/secondary');

// Configuración de la conexión a la base de datos
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test_db'
};

// Definir la ruta principal (GET /)
router.get('/', async (req, res) => {
  try {
    // Conectar a la base de datos
    const connection = await mysql.createConnection(dbConfig);
    // Realizar una consulta para obtener todos los registros de la tabla "datos"
    const [rows] = await connection.query('SELECT * FROM datos');
    // Cerrar la conexión a la base de datos
    await connection.end();

    // Llamar a las funciones para obtener los resultados
    const sumaResultado = sumar(5, 3);
    const textoEnMayusculas = enMayusculas('hola');
    const persona = new Persona('Juan', 30);
    const presentacionPersona = persona.presentar();

    // Renderizar la vista 'index.ejs' y pasarle los datos obtenidos de la base de datos
    res.render('index', {
      sumaResultado,
      textoEnMayusculas,
      presentacionPersona,
      data: rows
    });
  } catch (error) {
    // Si ocurre un error, imprimirlo en la consola y enviar una respuesta de error al cliente
    console.error(error);
    res.status(500).send('Error al conectarse a la base de datos');
  }
});

// Exportar el enrutador para que pueda ser usado en otros archivos
module.exports = router;