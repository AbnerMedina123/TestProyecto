#!/bin/sh

until nc -z db 3306; do
  echo "Esperando a que MySQL esté disponible..."
  sleep 2
done

# Luego ejecuta tu aplicación
npm start
