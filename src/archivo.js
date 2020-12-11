const fs = require('fs');
/* const { resolve } = require('path'); */
const path = require('path');
const marked = require("marked");

/* ruta existe */
const pathExiste = (ruta) => fs.existsSync(ruta);
/* console.log(pathExiste(myPath)); */

//Operador ternario: ruta absoluta
const absolutaPath = (ruta) => (path.isAbsolute(ruta) ? ruta : path.resolve(ruta));

const mdFile = (ruta) => path.extname(ruta) === '.md';
const isFile = (ruta) => fs.statSync(ruta).isFile();

/* funcion para extraer archivos md */
const getPathDirectory = (ruta) => {
/* se crea un array para guardar archivos md */
  const archivos = [];
  /* metodos funcionan con rutas absolutas */
  const newPath = absolutaPath(ruta);
  if (isFile(newPath)) {
    if (mdFile(newPath)) {
      archivos.push(newPath);
    }
  } else {
      fs.readdirSync(newPath).forEach((file) => {
        const filePath = getPathDirectory(path.join(newPath, file));
        archivos.push(...filePath);
        /* console.log(filePath); */
      });
    }
    /* console.log(filePath); */
    return archivos;
  };
getPathDirectory('C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\Directory\\prueba.md');

/* funcion extraer links de mis archivos md */
const getLinksMd = (ruta) => {
    const arrayMd = getPathDirectory(ruta);
    const renderer = new marked.Renderer();
    const arrayLinks = [];
    arrayMd.forEach((fileRuta) =>{
      const file = fs.readFileSync(fileRuta, 'utf8');
      renderer.link = (urlFile, _, urlText) => {
        arrayLinks.push({
          href: urlFile,
          text: urlText,
          path: fileRuta,
        });
       /*  console.log(renderer);
        console.log(arrayLinks); */
      };
      marked(file, { renderer });
    });
    return arrayLinks;
  }
/* console.log(marked); */
getLinksMd('C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test');

module.exports = {
mdFile,
isFile,
pathExiste,
absolutaPath,
getPathDirectory,
getLinksMd,
}

/* node src/archivo.js 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\Directory\\prueba.md' */
/* 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\Directory\\prueba.md' */
/* 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test' */