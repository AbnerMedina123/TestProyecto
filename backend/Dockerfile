# Usa una imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia los archivos de configuración de tu aplicación
COPY package*.json ./
COPY tsconfig.json ./
COPY .env.* ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto de tu código fuente al contenedor
COPY ./src ./src

# Copia el script para esperar a la base de datos
COPY wait-for-db.sh ./
RUN chmod +x wait-for-db.sh

# Compila TypeScript (si es necesario)
RUN npm run build  # Asegúrate de que esto esté configurado en tu package.json

# Expone el puerto que tu aplicación utiliza (ajusta según sea necesario)
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["./wait-for-db.sh"]
