# dvp API Rest

API para obtener los productos.

## Configuración para ejecutar localmente la aplicación

Primero sera construir nuestra base de datos y crear las tablas y para esto se va a utilizar las migraciones de typeorm.

### Ejecución de la aplicación localmente

Primero debemos de preparar el entorno para poder ejecutar la aplicación.

Los únicos requisitos son instalar Node y Docker.

* [Node](https://nodejs.org/es/)
* [Docker](https://docs.docker.com/get-docker/)

Ahora vamos a crear la base de datos con Docker y Postgres.

```sh
docker run --name postgres -e POSTGRES_PASSWORD=Z3vAZgz87w -e POSTGRES_USER=postgres -e POSTGRES_DB=dvpdb -p 5432:5432 -d postgres
```

Una vez creada la base de datos, vamos a ejecutar la aplicación ya que esta esta configurada para sincronizarse con la base de datos y lo primero que se hara el arrancar esta sera crear la tabla product.

```sh
npm run dev
```

Ya para finalizar y solo debemos de correr el comando de migration:rum para llenar los datos por defecto de la tabla.

```sh
npm run migration:run
```