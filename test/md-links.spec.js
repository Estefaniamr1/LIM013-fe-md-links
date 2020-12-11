/* const sum = require('../src/suma.js'); */
const validate = require('../src/validate.js');
const route = require('../src/archivo.js');
/* test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
}); */

/* Path existe */
describe('Path exits', () => {
  describe('Should be able to see if a path exists', () => {
    it('Should be is a function', () => {
      expect(typeof route.pathExiste).toBe('function');
    });
    it('Should return true', () => {
      expect(
        route.pathExiste(
          'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test',
        ),
      ).toBe(true);
    });
    it('Should return false', () => {
      expect(route.pathExiste('hola.js')).toBe(false);
    });
  });
});
/* Path es absoluta */
describe('Convert path relative to absolute', () => {
  describe('path is absolute', () => {
    it('should be is a function', () => {
      expect(typeof route.absolutaPath).toBe('function');
    });
    it('Should be a path is absolute ', () => {
      expect(route.absolutaPath('C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test')).toBe('C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test');
    });
    it('Should convert path relative to absolute', () => {
      expect(route.absolutaPath('./test')).toBe('C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test');
    });
  });
});
/* Path es archivo */
describe('File', () => {
  describe('is a file', () => {
    it('Should be is a function', () => {
      expect(typeof route.isFile).toBe('function');
    });
    it('Should return true when is file', () => {
      expect(route.isFile('C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\src\\archivo.js')).toBe(true);
    });
    it('Should return false when is not file', () => {
      expect(route.isFile('C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\')).toBe(false);
    });
  });
});


describe('Markdown', () => {
  describe('is a markdown file', () => {
    it('Should be is a function', () => {
      expect(typeof route.mdFile).toBe('function');
    });
    it('Should return true when is markdown file', () => {
      expect(route.mdFile('C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md')).toBe(true);
    });
    it('Should return false when is not markdown file', () => {
      expect(route.mdFile('C:\\Users\\vivia\\Documents\\md-links\\LIM013-fe-md-links\\src\\archivo.js')).toBe(false);
    });
  });
});
/* validar links */
const outputValidate = [
  {
    href: '#1-preámbulo',
    text: '1. Preámbulo',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: '500',
    statusText: 'Fail'
  },
  {
    href: '#2-resumen-del-proyecto',
    text: '2. Resumen del proyecto',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: '500',
    statusText: 'Fail'
  },
  {
    href: '#3-objetivos-de-aprendizaje',
    text: '3. Objetivos de aprendizaje',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: '500',
    statusText: 'Fail'
  },
  {
    href: '#4-consideraciones-generales',
    text: '4. Consideraciones generales',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: '500',
    statusText: 'Fail'
  },
  {
    href: '#5-criterios-de-aceptación-mínimos-del-proyecto',
    text: '5. Criterios de aceptación mínimos del proyecto',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: '500',
    statusText: 'Fail'
  },
  {
    href: '#6-entregables',
    text: '6. Entregables',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: '500',
    statusText: 'Fail'
  },
  {
    href: '#7-pistas-tips-y-lecturas-complementarias',
    text: '7. Pistas, tips y lecturas complementarias',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: '500',
    statusText: 'Fail'
  },
  {
    href: '#8-checklist',
    text: '8. Checklist',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: '500',
    statusText: 'Fail'
  },
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://nodejs.org/',
    text: 'Node.js',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://nodejs.org/es/',
    text: 'Node.js',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://developers.google.com/v8/',
    text: 'motor de JavaScript V8 de Chrome',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import',
    text: '<code>import</code>',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export',
    text: '<code>export</code>',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Glossary/Callback_function',
    text: 'Uso de callbacks.',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises',
    text: 'Consumo de Promesas.',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/',
    text: 'Creación de Promesas.',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://nodejs.org/api/fs.html',
    text: 'fs',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://nodejs.org/api/path.html',
    text: 'path',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://www.npmjs.com/',
    text: 'npm',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://nodejs.org/docs/latest-v0.10.x/api/modules.html',
    text: '(CommonJS)',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://docs.npmjs.com/files/package.json',
    text: 'Configuración de package.json.',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://docs.npmjs.com/misc/scripts',
    text: 'Configuración de npm-scripts',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://jestjs.io/docs/es-ES/getting-started',
    text: 'Testeo unitario.',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://jestjs.io/docs/es-ES/asynchronous',
    text: 'Testeo asíncrono.',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://jestjs.io/docs/es-ES/manual-mocks',
    text: 'Uso de librerias de Mock.',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://nodejs.org/api/http.html#http_http_get_options_callback',
    text: 'http.get',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://www.youtube.com/watch?v=lPPgY3HLlhQ',
    text: 'Recursión.',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://jestjs.io/',
    text: 'Jest',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://docs.npmjs.com/cli/install',
    text: 'docs oficiales de <code>npm install</code> acá',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://github.com/Laboratoria/course-parser',
    text: '<code>course-parser</code>',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://github.com/markdown-it/markdown-it',
    text: 'markdown-it',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
    text: 'expresiones regulares (<code>RegExp</code>)',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://github.com/markedjs/marked',
    text: 'marked',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://github.com/jsdom/jsdom',
    text: 'JSDOM',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://github.com/cheeriojs/cheerio',
    text: 'Cheerio',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://github.com/markedjs/marked',
    text: 'marked',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'http://community.laboratoria.la/c/js',
    text: 'foro de la comunidad',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://github.com/workshopper/learnyounode',
    text: 'learnyounode',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://github.com/workshopper/how-to-npm',
    text: 'how-to-npm',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://github.com/stevekane/promise-it-wont-hurt',
    text: 'promise-it-wont-hurt',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://nodejs.org/es/about/',
    text: 'Acerca de Node.js - Documentación oficial',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://nodejs.org/api/fs.html',
    text: 'Node.js file system - Documentación oficial',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://nodejs.org/api/http.html#http_http_get_options_callback',
    text: 'Node.js http.get - Documentación oficial',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://es.wikipedia.org/wiki/Node.js',
    text: 'Node.js - Wikipedia',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5',
    text: 'What exactly is Node.js? - freeCodeCamp',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://www.drauta.com/que-es-nodejs-y-para-que-sirve',
    text: '¿Qué es Node.js y para qué sirve? - drauta.com',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://www.youtube.com/watch?v=WgSc1nv_4Gw',
    text: '¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://www.ibm.com/developerworks/ssa/opensource/library/os-nodejs/index.html',
    text: '¿Simplemente qué es Node.js? - IBM Developer Works, 2011',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://www.genbeta.com/desarrollo/node-js-y-npm',
    text: 'Node.js y npm',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175',
    text: 'Módulos, librerías, paquetes, frameworks... ¿cuál es la diferencia?',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://carlosazaustre.es/manejando-la-asincronia-en-javascript',
    text: 'Asíncronía en js',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://docs.npmjs.com/getting-started/what-is-npm',
    text: 'NPM',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
    text: 'Publicar packpage',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://docs.npmjs.com/getting-started/publishing-npm-packages',
    text: 'Crear módulos en Node.js',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback',
    text: 'Leer un archivo',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback',
    text: 'Leer un directorio',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://nodejs.org/api/path.html',
    text: 'Path',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e',
    text: 'Linea de comando CLI',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://javascript.info/promise-basics',
    text: 'Promise',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1',
    text: 'Comprendiendo Promesas en Js',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://www.youtube.com/watch?v=lPPgY3HLlhQ&t=916s',
    text: 'Pill de recursión - video',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://github.com/merunga/pildora-recursion',
    text: 'Pill de recursión - repositorio',
    path: 'C:\\Users\\hp\\Desktop\\PORTAFOLIO\\LIM013-fe-md-links\\test\\README.md',
    status: 200,
    statusText: 'OK'
  }
]
describe('Link validation', () => {
  describe('should validate the links', () => {
    it('Should be a function', () => {
      expect(typeof validate.linksValids).toBe('function');
    });
    it('should return an array with the properties of: href,text, path, status y StatusText ', () => {
      expect(validate.linksValids('./test/README.md')).resolves.toEqual(outputValidate);
    });
  });
});

describe('Function to validate the Links found in md file', () => {
  it('Should return an array of object', (done) => {
    validate.validateLinks('test').then((response) => {
      expect(response).toEqual(outputValidate);
      done();
    });
  });
});
