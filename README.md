# 🤖 QA Portfolio - David García

<div align="center">

![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)

**Portafolio profesional de QA Lead & Automation Engineer**

[🌐 Ver Demo](https://davidg97.github.io/portafolio-qa/) • [📧 Contacto](mailto:e.davidgv@hotmail.com)

</div>

---

## 📋 Descripción

Portafolio personal con temática **robot/terminal** diseñado para mostrar experiencia en Quality Assurance y Automatización de pruebas. Incluye animaciones de scroll, efectos de glitch, neon glow y una experiencia de usuario inmersiva.

### ✨ Características

- 🌙 **Modo oscuro/claro** con persistencia en localStorage
- �� **Animaciones de scroll** con Intersection Observer
- ⚡ **Boot sequence** animado en cada página
- 📱 **Diseño responsive** optimizado para móvil y desktop
- 🔗 **SPA routing** compatible con GitHub Pages
- 🎨 **Efectos visuales**: glitch text, neon glow, scanlines

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Uso |
|------------|---------|-----|
| **React** | 18.2 | Librería UI |
| **Vite** | 5.0 | Build tool |
| **Tailwind CSS** | 3.4 | Estilos utilitarios |
| **React Router** | 6.14 | Navegación SPA |
| **React Icons** | 5.5 | Iconografía |
| **GitHub Actions** | - | CI/CD |

---

## 🚀 Instalación

```bash
# Clonar repositorio
git clone https://github.com/davidG97/portafolio-qa.git

# Entrar al directorio
cd portafolio-qa

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## 📁 Estructura del Proyecto

```
portafolio-qa/
├── .github/
│   └── workflows/
│       └── deploy.yml        # CI/CD para GitHub Pages
├── public/
│   └── 404.html              # Manejo de rutas SPA
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Navegación principal
│   │   ├── Footer.jsx        # Pie de página
│   │   └── ScrollReveal.jsx  # Animaciones de scroll
│   ├── hooks/
│   │   └── useScrollAnimation.js  # Hook de animación
│   ├── pages/
│   │   ├── Home.jsx          # Página principal
│   │   ├── Projects.jsx      # Experiencia QA
│   │   ├── About.jsx         # Información personal
│   │   ├── Contact.jsx       # Formulario de contacto
│   │   └── ProjectDetail.jsx # Detalle de proyecto
│   ├── static/
│   │   └── photo_profile.jpeg  # Foto de perfil
│   ├── styles/
│   │   └── index.css         # Estilos globales + animaciones
│   ├── App.jsx               # Componente raíz
│   └── main.jsx              # Punto de entrada
├── docs/                     # Documentación adicional
├── tests/                    # Tests (próximamente)
├── index.html                # HTML base
├── package.json              # Dependencias
├── vite.config.ts            # Configuración Vite
├── tailwind.config.js        # Configuración Tailwind
└── postcss.config.js         # Configuración PostCSS
```

---

## 📜 Scripts Disponibles

| Script | Comando | Descripción |
|--------|---------|-------------|
| **dev** | `npm run dev` | Servidor de desarrollo |
| **build** | `npm run build` | Build para producción |
| **preview** | `npm run preview` | Vista previa del build |
| **test** | `npm run test` | Ejecutar tests (Vitest) |

---

## 🎨 Diseño

### Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Cyan Principal | `#06B6D4` | Acentos, títulos |
| Cyan Oscuro | `#0E7490` | Hover, bordes |
| Negro | `#000000` | Fondo dark mode |
| Blanco | `#FFFFFF` | Fondo light mode |
| Verde | `#22C55E` | Estados activos |

### Tipografía

- **Mono**: Para todo el texto (estética terminal)
- **Animaciones**: glitch-text, neon-glow, scanlines

---

## 🌐 Deploy

El proyecto se despliega automáticamente en **GitHub Pages** con cada push a `main`.

**URL de producción:** https://davidg97.github.io/portafolio-qa/

### Deploy Manual

```bash
# Build de producción
npm run build

# El directorio 'dist' contiene los archivos para deploy
```

---

## 👤 Autor

**David García**
- 💼 QA Lead Tech @ Banco de Bogotá
- 📧 e.davidgv@hotmail.com
- 🔗 [LinkedIn](https://www.linkedin.com/in/davidg97)
- 🐙 [GitHub](https://github.com/davidG97)

---

## 📄 Licencia

Este proyecto es de uso personal. © 2026 David García
