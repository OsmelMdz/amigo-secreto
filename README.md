# Proyecto Amigo Secreto

## Descripción

Este proyecto es una aplicación web que permite a los usuarios ingresar nombres de amigos y realizar un sorteo aleatorio para determinar el "amigo secreto". Los usuarios pueden agregar nombres mediante un campo de texto, ver la lista de amigos, y realizar el sorteo con un solo clic.

## Funcionalidades

- **Agregar nombres**: Los usuarios pueden ingresar el nombre de un amigo en un campo de texto y añadirlo a una lista visible al hacer clic en "Añadir".
- **Validación de entrada**: Si el campo de texto está vacío, se muestra una alerta pidiendo un nombre válido.
- **Visualización de la lista**: Los nombres ingresados se mostrarán en una lista debajo del campo de entrada.
- **Sorteo aleatorio**: Al hacer clic en el botón "Sortear amigo", se selecciona aleatoriamente un nombre de la lista y se muestra el resultado en la página.

## Instrucciones para clonar y configurar el proyecto

### 1. Clonar el repositorio del proyecto desde GitHub. Abre una terminal en tu máquina local y ejecuta el siguiente comando:
```git clone https://github.com/OsmelMdz/amigo-secreto.git```

### 2. Acceder al directorio del proyecto con el siguiente comando:
```cd amigo-secreto```

### 3. Abre el archivo index.html en tu navegador para probar la aplicación.

## Uso
## 1. Ingresa el nombre de un amigo en el campo de texto.
## 2. Haz clic en el botón "Añadir" para agregarlo a la lista.
## 3. Una vez agregados varios nombres, haz clic en "Sortear amigo" para seleccionar un amigo aleatorio de la lista.
## 4. El nombre del amigo secreto se mostrará en pantalla.

## Dependencias

Este proyecto no tiene dependencias externas, solo utiliza HTML, CSS y JavaScript puro.

## Estructura del Proyecto

amigo-secreto/
│
├── assets/                # Imágenes y otros recursos estáticos
│   ├── amigo-secreto.png
│   └── play_circle_outline.png
│
├── style.css              # Estilos de la aplicación
├── app.js                 # Lógica de la aplicación en JavaScript
├── index.html             # Estructura HTML de la aplicación
├── favicon.ico            # Icono del sitio web
├── README.md              # Documentación del proyecto
└── LICENSE.txt            # Archivo de licencia

## Contribución
Si deseas contribuir a este proyecto, puedes hacer un fork y abrir un pull request. Asegúrate de seguir las buenas prácticas y de documentar cualquier cambio significativo que realices.

### 1. Haz un fork de este repositorio.
### 2. Crea una rama para tu funcionalidad o corrección.
### 3. Realiza los cambios y asegúrate de que todo esté probado.
### 4. Haz un pull request con una descripción clara de lo que cambiaste.

## Problemas y Soluciones Comunes

### 1. ¿El campo de texto no acepta nombres vacíos?
La aplicación tiene una validación para evitar que se agregue un nombre vacío. Si el campo está vacío, aparecerá una alerta.

### 2. ¿El sorteo aleatorio no funciona?

Asegúrate de que haya al menos un nombre agregado a la lista antes de hacer el sorteo. Si la lista está vacía, aparecerá una alerta.

## Licencia
Este proyecto está bajo la Licencia MIT. Puedes ver más detalles en el archivo LICENSE.

## Agradecimientos
Este proyecto fue posible gracias al apoyo de los siguientes instructores:

- **Ing. Christian Paul Velasco Algarañaz**
  - [GitHub](https://github.com/christianpva) | [LinkedIn](https://www.linkedin.com/in/christianpva)

- **Ing. Leonardo Jose Castillo Lacruz**
  - [GitHub](https://github.com/ljcl79) | [LinkedIn](https://www.linkedin.com/in/leonardo-castillo-4911571a)

- **Jose Dario Gonzalez Charris**
  - [GitHub](https://github.com/JoseDarioGonzalezCha) | [LinkedIn](https://www.linkedin.com/in/desenvolvedor-jose)