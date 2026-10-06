# 💼 Portfolio – Jordan Tejada

Portfolio personal desarrollado con Next.js para presentar mi perfil profesional, conocimientos técnicos y proyectos desarrollados como Full Stack Developer.

## 🚀 Demo

🌐 **Portfolio:**  
https://TU-PORTFOLIO.vercel.app

---

## 📌 Descripción

Este proyecto es mi portfolio personal, desarrollado con Next.js y React.

El objetivo es presentar de forma clara mi perfil profesional, las tecnologías que utilizo y algunos de los proyectos Full Stack que he desarrollado.

El portfolio también cuenta con un formulario de contacto funcional que permite recibir mensajes mediante una API interna de Next.js y el servicio de envío de correos Resend.

---

## 🛠️ Tecnologías utilizadas

### Frontend

- React
- Next.js
- JavaScript
- Tailwind CSS
- React Icons
- HTML
- CSS

### Backend / Server

- Next.js API Routes
- Resend

### Herramientas

- Git
- GitHub
- Vercel
- npm

---

## ✨ Características

- 👨‍💻 Presentación de perfil profesional
- 🛠️ Sección de tecnologías y conocimientos
- 📁 Sección de proyectos
- 🔗 Enlaces a demos y repositorios de GitHub
- 📄 Descarga de CV
- 📧 Formulario de contacto funcional
- 📬 Envío de mensajes mediante Resend
- 📱 Diseño responsive
- 🎨 Animaciones y efectos visuales
- ⚡ Despliegue mediante Vercel

---

## 📂 Proyectos

El portfolio presenta los siguientes proyectos:

### 🛒 E-commerce

Plataforma e-commerce Full Stack con gestión de productos, categorías, carrito de compras, usuarios, direcciones y pedidos.

**Tecnologías principales:**

- React
- Java
- Spring Boot
- Spring Security
- PostgreSQL
- JPA / Hibernate
- Cloudinary

🔗 **Demo:**  
https://portfolio-seven-gules-55.vercel.app

🔗 **Frontend:**  
https://github.com/jordantejadadev/ecommerce-frontend

🔗 **Backend:**  
https://github.com/jordantejadadev/ecommerce

---

### 🎫 SupportDesk

Sistema de gestión de tickets de soporte con autenticación, autorización basada en roles, administración de usuarios y actualización de información en tiempo real.

**Tecnologías principales:**

- React
- Java
- Spring Boot
- Spring Security
- PostgreSQL
- JWT
- WebSocket
- Docker

🔗 **Demo:**  
https://supportdesk-frontend-nine.vercel.app

🔗 **Frontend:**  
https://github.com/jordantejadadev/supportdesk-frontend

🔗 **Backend:**  
https://github.com/jordantejadadev/supportdesk-backend

---

### 💬 Chat

Aplicación de chat en tiempo real desarrollada con React y Spring Boot, utilizando WebSocket para la comunicación entre usuarios.

**Tecnologías principales:**

- React
- Spring Boot
- Supabase
- Tailwind CSS
- WebSocket

🔗 **Demo:**  
https://chat-frontend-delta-navy.vercel.app

🔗 **Frontend:**  
https://github.com/jordantejadadev/chat-frontend

🔗 **Backend:**  
https://github.com/jordantejadadev/chat-backend

---

## 📂 Estructura del proyecto

```text
portfolio/
├── public/
│   └── ...
│
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.jsx
│   │   │
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.js
│   │   │
│   │   ├── contact/
│   │   │   └── page.jsx
│   │   │
│   │   ├── projects/
│   │   │   └── page.jsx
│   │   │
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   │
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── TechStacks.jsx
│   │
│   └── services/
│       └── contactService.js
│
├── .env.local
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
└── README.md
```