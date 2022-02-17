# classroom-x


Debe tener instalado docker-compose

## limpiar todo

$ docker-compose down

## Compilar

$ docker-compose build backend 
$ docker-compose build frontend 

## Levantar cada contenedor en el siguiente orden

$ docker-compose up database
$ docker-compose up migration
$ docker-compose up backend
$ docker-compose up frontend

## Probar backend

https://localhost:3000

## Probar front

https://localhost:4000

login: admin
password: admin-1234.*Abcd


