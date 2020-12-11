/* stats */
const stats = (arrayLinksPromesas) => {
    const total = arrayLinksPromesas.length;
    /* misma cantidad de elementos del array original, devuelva el .href, el map me devolvera solo los links del arreglo de objetos */
    const unique = new Set(arrayLinksPromesas.map((element => element.href))).size;
    return `Unique: ${unique}, total: ${total}`;
};
/* total, unico y broken */
const statsValidate = (arrayLinksPromesas) => {
    /* nuevo array de objetos, new set convierte datos a unicos, size contabiliza cuantos elementos hay en ese set */
    const total = arrayLinksPromesas.length;s
    const unique = new Set(arrayLinksPromesas.map((element => element.href))).size;
    /* me va a filtrar los links rotos */
    const broken = arrayLinksPromesas.filter(links => links.statusText==='Fail').length
    return `Unique: ${unique}, total: ${total}, broken: ${broken}`;
};

module.exports = {
stats,
statsValidate,
}
