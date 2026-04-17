// app.js - API CRUD con Node.js y MySQL (CON IMÁGENES)
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json({ limit: '10mb' })); // Para imágenes grandes
app.use(express.static(__dirname));

// Conexión a MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'inventario_tienda',
    port: 3307
});

connection.connect((err) => {
    if (err) {
        console.error('❌ Error:', err.message);
        return;
    }
    console.log('✅ Conectado a MySQL en puerto 3307');
});

// GET - Listar productos
app.get('/api/productos', (req, res) => {
    connection.query('SELECT * FROM productos', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// POST - Crear producto con imagen
app.post('/api/productos', (req, res) => {
    const { nombre, precio, stock, imagen } = req.body;
    connection.query('INSERT INTO productos (nombre, precio, stock, imagen) VALUES (?, ?, ?, ?)',
        [nombre, precio, stock || 0, imagen || null], (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ id: result.insertId, mensaje: 'Producto creado' });
        });
});

// PUT - Actualizar producto con imagen
app.put('/api/productos/:id', (req, res) => {
    const { nombre, precio, stock, imagen } = req.body;
    let query, params;
    
    if (imagen) {
        query = 'UPDATE productos SET nombre=?, precio=?, stock=?, imagen=? WHERE id=?';
        params = [nombre, precio, stock, imagen, req.params.id];
    } else {
        query = 'UPDATE productos SET nombre=?, precio=?, stock=? WHERE id=?';
        params = [nombre, precio, stock, req.params.id];
    }
    
    connection.query(query, params, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ mensaje: 'Producto actualizado' });
    });
});

// DELETE - Eliminar producto
app.delete('/api/productos/:id', (req, res) => {
    connection.query('DELETE FROM productos WHERE id=?', [req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ mensaje: 'Producto eliminado' });
    });
});

app.listen(PORT, () => {
    console.log(`\n🚀 Servidor: http://localhost:${PORT}`);
    console.log(`📋 Interfaz web: http://localhost:${PORT}\n`);
});