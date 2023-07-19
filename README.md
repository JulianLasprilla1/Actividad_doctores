# Actividad_doctores
Taller número 6 para certificación backend

## SRC

-Folder que contiene la lógica de los componenetes (principal)
-En **src** tendremos una estructura compuesta por lo siguiente
### API
    - Api contendrá los componentes propios del aplicativo REST
#### Components
        -Rutas, controladores, modelos, repositorios, políticas y test
        - Componente tiene como objetivo representar un proceso importante
##### Middleware
    Carpeta que contiene todos  los procesos de autenticación y validación, loggin  o procesos de auditoría posterior a un request
#### routes.js
Es el que se encarga de registrar todas las rutas que pasan a través del middleware y de los componentes 

#### server.js
    -Es donde se inicializa el servicio y se configura absolutamente todo lo que requiera el servidor de express
    -Importación de middlewares, componentes, rutas
    -Manejo de errores
    -Configuración de puertos

### Config
    Es un directorio  que contiene todos los procesos que se encargan de configurar la aplicación a nivel transversal
 *   **variables globales** variables que son globales para toda la aplicación
 *   **logger** configuración propia o específica de el loggueo 
 *   **ACL** Lista de control de acceso

### test
    Son test que permiten correr los test de cada uno de los componentes

**clients** Procesos locales que se encargan de la lógica de comunicación o particularidades del proceso de comunicación con los entes externos, conexión a una API externa, conexión a servicios en la nube

**Controller.js(ts)** Clase que maneja los request entrantes y envía la respuesta del back hacia el usuario final

**service** Se encarga de toda la lógica del componente

**model.js(ts)** representa los modelos de la base de datos para el componente que tiene la estructura de datos y es usado por el repositorio

**repository** Interpretador para la base de datos, es aquí donde interactúa el ORM
**routes.js(ts)** la redirección de los endpoints del componente , es el que asigna los métodos del controlador 






**policy (opcional)** Reglas de acceso a las operaciones (basado en roles)

