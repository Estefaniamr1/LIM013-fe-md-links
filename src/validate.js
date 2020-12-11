const fetch = require('node-fetch');
const { getLinksMd } = require('./archivo.js');

const linksValids = (ruta) => {
  const arrayOfLinks = getLinksMd(ruta);
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


const totalLinks = (arrayLinksPromesas) => {
  const total = arrayLinksPromesas.length;
  return total;
};
const statsUnique = (arrayLinksPromesas) => {
  const unique = [...new set(arrayLinksPromesas.map((link) => link.href))];
  return `Unique: ${unique.length}`
  ;
};
/* linksValids('./test').then((res) => console.log(res)); */
/* console.log(totalLinks(total)); */
/* console.log(totalLinks('C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test')); */

module.exports = {
  linksValids,
  totalLinks,
  statsUnique
};
