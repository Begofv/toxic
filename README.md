
# Proyecto Api: Toxic Awards

## Descripción del Proyecto
El objetivo de este proyecto es crear una API para que un grupo de amigos pueda votar que amigo es el mas toxico, con unas categorias ya predefinidas. Los usuarios podran crear un listado de amigos, y entre ellos votar quien es el mas cuñado o el mas falton, por ejemplo.

## Características
- **Usuarios:**
  - Crear su grupo de amigos
  - Votar a sus amigos

- **Administradores:**
  - Ver todos los usuarios.
  - Modificar los roles de un usuario.
  - Ver todos los votos de un usuario por grupos.


## Tecnologías Utilizadas
- Node.js
- Express
- Docker (para la contenedorización)
- Base de Datos MongoDBCompass (configurada en el archivo `.env`)
- bcrypt
- dotenv
- jsonwebtoken
- postman


### Instalación

1. Clonar el repositorio en terminal:
   git clone <URL-del-repositorio>
   cd <nombre-del-proyecto>

2. Instalar las dependencias:
    npm install
    Configurar las variables de entorno:
    Crear un archivo .env en la raíz del proyecto con el siguiente contenido (actualizar con sus propios valores):

3. Crear en raiz .env 

    APP_PORT=3015
    APP_HOST=toxic

    DB_HOST= mongo_toxic
    DB_PORT= 27020
    DB_USER= tu_usuario
    DB_PASSWORD=tu_contraseña
    DB_NAME= toxic
    JWT_SECRET= secretos



4.  Iniciar el servidor desde la terminal de VSC:
    - npm start
    - docker-compose up --build


    Uso
    Navegador Web:
    Abre tu navegador web y ve a http://localhost:3015 para interactuar con la aplicación.

