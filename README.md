# classroom-x


Debe tener instalado docker-compose

## limpiar todo

$ docker-compose down
$ docker-compose stop
$ docker-compose rm -s -f

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
password: admin


El administrador puede crear materias.

Cualquier usuario se puede registrarse como profesor o estudiante.

Los profesores pueden seleccionar que materias pueden impartir.

Los estudiantes pueden seleccionar que materia y profesor pueden tomar como clases a cursar.

:)