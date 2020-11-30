const specRuta = require('../src/md-links.js');
const { pathExiste } = require('../src/md-links.js');
/* mdLinks debería ser una función */
describe('mdLinks', () => {
  it('should be a function', () => {
    expect(typeof medLinks).toBe('function');
    console.log('FIX ME!');
  });
});

/* path existe */
describe('analizar si path existe', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof pathExiste).toBe('function');
  });
  it('ruta valida', () => {
    expect(specRuta.pathExiste()).toBe(true);
  });
});
/* path is file */
describe('analizar si path es un archivo', () => {
  it('Deberia ser una funcion', () => {
    expect(path.isFile()).toEqual('function');
  });
  it('recibe path absoluto y retorna boolean', () => {
    expect(absolutePath(ruta)).toBe(true);
  });
});

/* Se debería poder leer la ruta */
