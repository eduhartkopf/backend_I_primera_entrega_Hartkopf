# E-commerce Backend con Node.js, Express y JSON

## Descripción

Este proyecto es un backend para un sistema de e-commerce desarrollado con **Node.js** y **Express**, que permite gestionar **productos** y **carritos de compras** de manera simple usando **archivos JSON** como base de datos.

Durante su desarrollo aprendí a:

- Configurar un servidor con Express y rutas REST.
- Implementar un CRUD completo para productos.
- Gestionar carritos de compras con operaciones de creación, lectura y agregación de productos.
- Manipular archivos JSON de manera asíncrona usando `fs/promises`.
- Probar rutas y operaciones con **Postman**.
- Diseñar una arquitectura organizada usando **routers** y **managers**.
- Detectar y corregir errores de rutas, IDs inválidos y validaciones.

---

## Instalación

Clonar el repositorio:

```bash
git clone <https://github.com/eduhartkopf/backend_I_primera_entrega_Hartkopf>
cd <backend_I_primera_entrega_Hartkopf>
```

Instalar dependencias:

```bash
npm install
```

Iniciar el servidor:

```bash
npm start
```

El servidor escuchará en [http://localhost:8080/](http://localhost:8080/).

---

## Estructura del Proyecto

```
├─ src/
│  ├─ routes/
│  │  ├─ products.router.js
│  │  └─ carts.router.js
│  ├─ managers/
│  │  ├─ ProductManager.js
│  │  └─ CartManager.js
│  └─ data/
│     ├─ products.json
│     └─ carts.json
├─ app.js
└─ package.json
```

- **app.js**: Configura el servidor y los routers.
- **routes/**: Define las rutas de productos y carritos.
- **managers/**: Contiene la lógica de negocio para productos y carritos.
- **data/**: Archivos JSON que actúan como base de datos.

---

## Endpoints

### Productos

- `GET /products` → Obtiene todos los productos.
- `GET /products/:id` → Obtiene un producto por ID.
- `POST /products` → Crea un nuevo producto (body en JSON).
- `PUT /products/:id` → Actualiza un producto existente (body con campos a actualizar).
- `DELETE /products/:id` → Elimina un producto por ID.

### Carritos

- `POST /api/carts` → Crea un nuevo carrito vacío.
- `GET /api/carts/:cid` → Obtiene un carrito por ID con todos sus productos.
- `POST /api/carts/:cid/product/:pid` → Agrega un producto al carrito, o incrementa `quantity` si ya existe.

---

## Ejemplos de uso con Postman

**Crear un carrito:**

```
POST http://localhost:8080/api/carts
```

**Leer carrito por ID:**

```
GET http://localhost:8080/api/carts/1
```

**Agregar producto al carrito:**

```
POST http://localhost:8080/api/carts/1/product/2
```

---

## Validaciones Implementadas

- Se valida que los IDs sean números válidos.
- Se verifica que el carrito exista antes de agregar productos.
- Se verifica que el producto exista antes de agregarlo al carrito.
- Si el producto ya está en el carrito, se incrementa la cantidad (`quantity`) en lugar de duplicarlo.

---

## Aprendizajes del Proyecto

Durante este proyecto reforcé y aprendí:

- **Arquitectura organizada** usando routers y managers.
- **CRUD básico con JSON**: cómo leer, escribir y actualizar archivos de manera asíncrona.
- **Validaciones y manejo de errores** en Express.
- **Integración con Postman** para probar endpoints y depurar respuestas.
- **Razonamiento lógico** para manejar IDs, incrementos de cantidad, y control de existencia de productos y carritos.
- **Detección de errores comunes**, como rutas no importadas o problemas de tipado en IDs.
