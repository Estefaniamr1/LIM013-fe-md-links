/*  funcion md.links  */
const functionsG = require('./archivo.js');
const { linksValids } = require('./validate.js');

const mdLinks = (ruta, options) => {
/*   if (!functionsG.pathExiste(ruta)) {
    return Promise.reject('no existe');
  } */
   let arrLinks = [];
  if (!options.validate) {
    return Promise.resolve(functionsG.getLinksMd(ruta));
  }
  if (options.validate) {
    return Promise.resolve(linksValids(ruta));
  }
};
/*  mdLinks('C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md', {validate: true}).then(result => {
  console.log(result) 
}).catch((err) => console.log(err)); */
 
module.exports = {
  mdLinks,
};

/* if (functionsG.mdFile(ruta)) {
  arrLinks = functionsG.getLinksMd(ruta);
} else if (functionsG.getPathDirectory(ruta)) {
  arrLinks = functionsG.archivos(ruta); */
