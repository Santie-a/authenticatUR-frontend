# Proyecto React con npm

Este es un proyecto basado en React creado y gestionado con npm. Proporciona una estructura básica para el desarrollo de aplicaciones web modernas.

## Requisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión recomendada: LTS)
- npm (incluido con Node.js)

## Instalación

Clona este repositorio y navega al directorio del proyecto:

```bash
git clone https://github.com/santie-a/authenticatur-frontend.git
cd authenticatur-frontend
```

Instala las dependencias necesarias:

```bash
npm install
```

## Variables de entorno

La única variable de entorno configurada `.env` contiene la dirección del backend. `REACT_APP_API_BASE`

## Uso

Para iniciar el servidor de desarrollo:

```bash
npm start
```

La aplicación estará disponible en `http://localhost:3000/` por defecto.

## Scripts disponibles

- `npm start`: Inicia el servidor de desarrollo.
- `npm run build`: Genera una versión optimizada para producción.

## Despliegue

Para generar la versión de producción:

```bash
npm run build
```

Esto creará una carpeta `build/` con los archivos listos para ser desplegados en un servidor.

## Contribución

Si deseas contribuir, por favor sigue estos pasos:

1. Realiza un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature-nueva`).
3. Realiza los cambios y confirma (`git commit -m "Agrega nueva funcionalidad"`).
4. Envía los cambios (`git push origin feature-nueva`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT. Puedes ver más detalles en el archivo `LICENSE`.

