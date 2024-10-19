# Usa una imagen base de Node.js
FROM node:16 AS build

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia los archivos de package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos
COPY . .

# Compila la aplicación
RUN npm run build --prod

# Usa una imagen de Nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos construidos a la carpeta de Nginx
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Expone el puerto en el que corre Nginx
EXPOSE 80
