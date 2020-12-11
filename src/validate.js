const fetch = require('node-fetch');
const { getLinksMd } = require('./archivo.js');

const linksValids = (ruta) => {
  const arrayOfLinks = getLinksMd(ruta);
  /* fetch me devuelve una promesa, hace fetch de href*/
   const arrayLinksPromesas = arrayOfLinks.map((file) => fetch(file.href)
   /* spread: destructura y me devuelve todos los elementos */ 
   .then((res) => ({
      ...file,
      status: res.status,
      statusText: res.statusText,
      }))
    .catch (() => ({
    ...file,
     status: '500',
    statusText: 'Fail',
  })));

return Promise.all(arrayLinksPromesas);
}; 


/* linksValids('./test').then((res) => console.log(res)); */
/* console.log(totalLinks(total)); */
/* console.log(totalLinks('C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test')); */

module.exports = {
  linksValids,
};
