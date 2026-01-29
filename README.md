# Ionic AR MVP

Aplicación móvil híbrida de Realidad Aumentada construida con Ionic, Angular y Capacitor. Permite visualizar contenido 3D interactivo en experiencias AR multiplataforma.

## Tecnologías

- **Ionic 8.x** - Framework de desarrollo móvil híbrido
- **Angular 17.3.17** - Framework frontend
- **Capacitor 6.x** - Bridge nativo para iOS/Android
- **A-Frame + AR.js** - Motor de realidad aumentada web
- **TypeScript 5.x** - Lenguaje tipado

## Funcionalidades

| Módulo              | Estado        |
| ------------------- | ------------- |
| Company Store       | Implementado  |
| AR GPS-based        | En desarrollo |
| Soporte iOS/Android | Disponible    |
| Progressive Web App | Disponible    |

## Instalación

### Prerrequisitos

- Node.js 18+
- npm 9+
- Ionic CLI (`npm i -g @ionic/cli`)

### Setup

```bash
git clone https://github.com/daremappdaniel-dev/Ionic_mvp_ar.git
cd Ionic_mvp_ar
npm install
ionic serve
```

La aplicación estará disponible en `http://localhost:8100`

## Estructura del proyecto

```
src/
├── app/
│   ├── core/              # Servicios, guards, interceptors
│   ├── shared/            # Componentes reutilizables
│   └── features/
│       └── company-store/ # Módulo de tienda AR
├── assets/                # Modelos 3D, recursos
└── environments/          # Configuración por entorno
```

## Scripts

| Comando          | Descripción                  |
| ---------------- | ---------------------------- |
| `ionic serve`    | Servidor de desarrollo       |
| `ng build`       | Build de producción          |
| `ng test`        | Tests unitarios              |
| `ionic cap sync` | Sync con plataformas nativas |

## Build nativo

```bash
ionic build --prod
ionic cap sync
ionic cap open ios      # Abre Xcode
ionic cap open android  # Abre Android Studio
```

## Contribución

Seguimos [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>(<scope>): <descripción>
```

| Tipo       | Descripción         |
| ---------- | ------------------- |
| `feat`     | Nueva funcionalidad |
| `fix`      | Corrección de bug   |
| `docs`     | Documentación       |
| `refactor` | Refactorización     |
| `test`     | Tests               |
| `chore`    | Mantenimiento       |

## Requisitos para AR

- Dispositivo móvil con GPS y cámara
- Conexión HTTPS
- Permisos de cámara y ubicación
