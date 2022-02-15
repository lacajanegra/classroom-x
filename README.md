# classroom-x


Debe tener instalado docker-compose

## limpiar todo

$ docker-compose down

## Compilar

$ docker-compose build backend 
$ docker-compose build frontend 

## Levantar cada contenedor en el siguiente orden

$ docker-compose --env-file ./config/.env.dev up database
$ docker-compose --env-file ./config/.env.dev up migration
$ docker-compose --env-file ./config/.env.dev up backend
$ docker-compose --env-file ./config/.env.dev up frontend

## Probar backend

https://localhost:3000

## Probar front

https://localhost:4000

login: admin
password: admin-1234.*Abcd


