# 📦 API de Inventario - Tienda de Electrónicos

API RESTful para gestión de inventario desarrollada con **Node.js**, **Express** y **MySQL**.

## 🚀 Tecnologías
- Node.js
- Express
- MySQL
- HTML/CSS/JavaScript
- Git & GitHub

## 📋 Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/productos` | Listar todos los productos |
| GET | `/api/productos/:id` | Obtener un producto por ID |
| POST | `/api/productos` | Crear nuevo producto |
| PUT | `/api/productos/:id` | Actualizar producto |
| DELETE | `/api/productos/:id` | Eliminar producto |

## 🔧 Instalación y ejecución

```bash
# 1. Clonar repositorio
git clone https://github.com/DANIEL-EDU-RACUA-RAMOS/inventario-electronico-api.git

# 2. Instalar dependencias
npm install

# 3. Configurar MySQL
# - Crear base de datos 'inventario_tienda'
# - Ejecutar el script SQL

# 4. Iniciar servidor
node app.js

# 5. Abrir navegador
http://localhost:3000