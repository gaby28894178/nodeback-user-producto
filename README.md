# nodeback-user-producto📄 README.md
markdown
Copiar
Editar
# 🛠️ Proyecto CRUD de Usuarios y Productos con Express + JSON Server

Este proyecto es una API básica con rutas personalizadas para gestionar usuarios y productos. Se apoya en `json-server` para simular una base de datos REST y en `Express.js` para tener un backend personalizado.

---

## 🚀 Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
📦 Instalación de dependencias
Instalá las dependencias necesarias:

bash
Copiar
Editar
npm install
🧪 Estructura del Proyecto
pgsql
Copiar
Editar
📁 tu-repo
├── db.json                # Base de datos simulada
├── index.js               # Servidor Express
├── controllers/
│   ├── usersController.js
│   └── productsController.js
├── routes/
│   ├── usersRoutes.js
│   └── productsRoutes.js
└── package.json
🖥️ Ejecutar el Proyecto
1. Iniciar json-server (base de datos falsa)
bash
Copiar
Editar
npm run start-api
Esto levanta la API REST en:
http://localhost:3001

2. Iniciar el servidor Express
En otra terminal:

bash
Copiar
Editar
npm run start-server
Esto levanta el servidor personalizado en:
http://localhost:3000

📡 Endpoints disponibles
Usuarios
GET /api/users → Obtener todos los usuarios

GET /api/users/:id → Obtener un usuario por ID

POST /api/users → Crear un nuevo usuario

PUT /api/users/:id → Actualizar un usuario

DELETE /api/users/:id → Eliminar un usuario

Productos
GET /api/products → Obtener todos los productos

GET /api/products/:id → Obtener un producto por ID

POST /api/products → Crear un nuevo producto

PUT /api/products/:id → Actualizar un producto

DELETE /api/products/:id → Eliminar un producto

📁 Datos de prueba (db.json)
json
Copiar
Editar
{
  "users": [
    { "id": 1, "name": "Alice", "email": "alice@example.com" }
  ],
  "products": [
    { "id": 1, "name": "Mouse", "price": 25 }
  ]
}
💡 Notas
Asegurate de tener Node.js instalado.

Podés usar herramientas como Postman, Thunder Client o Insomnia para probar las rutas.

🧑‍💻 Autor
Gabriel G. – gabgabrielligabriel@gmail.com

yaml
Copiar
Editar

---

¿Querés que te lo genere como archivo descargable o que lo suba directamente si me das el contenido del repo?







