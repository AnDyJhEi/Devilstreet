#version de la imagen 
FROM httpd
#busca  los archivos 
WORKDIR /usr/local/apache2/htdocs/
#copia todos los archivos
COPY . .