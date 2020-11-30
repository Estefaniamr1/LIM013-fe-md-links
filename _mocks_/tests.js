/* creando objeto con metodos */

/* fs.readdir para leer ruta. fs.readfile para leer cada doc md */
const fs= {
    
    readdir: () => {},
    readFile: () => {},
    existsSync: () => {}
},

const readdir = () => {
    return {
        path,
        options,
        callback
    }
}

/* path.resolve para convertir la ruta en absoluta. 
path extname para identificar los archivos con extension .md
y guardar la ruta absoluta de cada archivo en un arreglo */
const path= {
    resolve: () => {},
    extname: () => {}
}

/* md.render para convertir el doc en lenguaje html */
/* encontrar los links de https para pasarlos a https.get y obtener su statuCode */
/* hacer peticion a http y https.get para conocer cuantos links rotos hay */
/* pintar links con su nombre, url, status code y si estan rotos o no */
/* crear contador para conocer cantidad total del arreglo de links */
/* restar cantidad de links repetidos para saber cantidad de links unicos */
/* retornar el total de links encontrados y links unicos */
