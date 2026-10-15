# Fruty Fantasty

Una tienda online de frutas frescas y exóticas. Fruty Fantasty es una aplicación de comercio electrónico que permite a los clientes descubrir, cotizar y pedir frutas de temporada y especiales a través de una experiencia web moderna y atractiva.

## 📝 Descripción General

Fruty Fantasty es una aplicación completa de comercio electrónico construida con **Next.js 16** y **TypeScript** que incluye:

- **Catálogo de productos** - Lista de frutas frescas y especiales con descripción, precio y disponibilidad
- **Sistema de pedidos** - Formulario para registrar pedidos con validación de cliente, teléfono y dirección
- **Conexión a base de datos** - Integración con MongoDB para persistencia de datos
- **Interfaz responsiva** - Diseño que se adapta desde dispositivos móviles hasta desktop

## 🛠️ Tecnologías Utilizadas

- **Next.js 16** - Framework React con App Router
- **TypeScript** - Tipado estático para mayor seguridad
- **Tailwind CSS** - Estilizado utilitario
- **MongoDB** - Base de datos NoSQL para persistencia

## 📦 Funcionalidades Principales

1. **Catálogo de productos** - Visualizar frutas disponibles con sus características
2. **Registro de pedidos** - Formulario validado para crear pedidos
3. **Gestión de inventario** - Control de stock y disponibilidad
4. **Interfaz moderna** - Diseño visual con gradientes y animaciones sutiles

## 🚀 Cómo Empezar

Ejecutar el servidor de desarrollo:

```bash
npm run dev
# o
pnpm dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador para ver el resultado.

## 📁 Estructura del Proyecto

```
├── src/                  # Código fuente
│   ├── app/              # Next.js 16 App Router
│   │   ├── page.tsx      # Página principal
│   │   ├── layout.tsx    # Layout raíz
│   │   ├── api/order/    # API POST /api/order
│   │   └── api/products/ # API GET /api/products
│   └── products/         # Página de catálogo
├── backend/              # Lógica y modelos
│   ├── mongodb.ts        # Conexión a base de datos
│   ├── order.ts          # Interfaces de pedidos
│   └── products.ts       # Interfaces de productos
├── package.json
├── next.config.ts
└── tsconfig.json
```

## 📱 Páginas Disponibles

- **/** - Página principal (Home)
- **/products** - Catálogo de productos
- **/api/products** - API para obtener productos
- **/api/order** - API para registrar pedidos