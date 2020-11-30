const fs = require('fs');
const { resolve } = require('path');
/* const { url } = require('inspector'); */
const path = require('path');

/* .slice: omitir los dos primeros argumentos */
const myArgs = process.argv.slice(2);
/* console.log(process.argv,'myArgs: ', myArgs); */
const myPath = myArgs[0];
/* ruta existe */
const pathExiste = (ruta) => fs.existsSync(ruta);
/* console.log(pathExiste(myPath)); */

// If the file does not exist 

//Operador ternario: ruta absoluta
const absolutaPath = (ruta) => path.isAbsolute(ruta) ? ruta : path.resolve(ruta);
const file = (ruta) => fs.statSync(ruta).isFile();
const directory = (ruta) => readDirectoy (ruta);
/* const directory = (ruta) => ruta.isDirectory() ? console.log('exitoso') : file(ruta);
const file = (ruta) => ruta.isFile() ? console.log('file') : console.log('Directory'); */

const mdLinks = (ruta, options) => {
  if (!pathExiste(ruta)) {
    return Promise.reject('no existe');
  }
  const rutaAbs = absolutaPath(ruta);
  let archivos = [];
  if(file()){
    const leerFile = fs.dir.readdirSync (ruta);
    fileList.forEach((file))
  }
  return Promise.resolve(rutaAbs);
  

}

/* console.log(myPath, 'hola mundo'); */

/*  const absolutaPath = path.isAbsolute(myPath); */
/*  console.log(absolutaPath);
  console.log(path.isAbsolute(myPath)); */



//Operador ternario: is file/isDirectory


mdLinks(myPath).then(result => {
  console.log(result)
});

/* if (path.isAbsolute(ruta)) {
  console.log('listooo es absoluta');
  return ruta;
} else {
  const rutaAbsoluta = path.resolve(ruta)
  console.log(rutaAbsoluta);
  return rutaAbsoluta;
} */
/* C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\README.md */
/*
const fileDirectory: (path) => {
  if (fs.statSync(path).isFile() === true){
    return 'file';
  } if (fs.statSync(path).isDirectory() === true){
    return 'directory';
  } */


/* const filedirectory = !fs.statSync().isFile() ? fs.statSync().isDirectory();
console.log() */

/*
let pathname = window.location.pathname;
console.log(pathname);

 */
/*
function getAbsolutePath()
  let loc = window.location;
  //.lastIndexOf devuelve la posicion indice del valor de la busqueda
  // .substring devuelve un subconjunto de un objeto string

  let pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
  console.log(loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length)));

 */
