#!/usr/bin/env node

const { mdLinks } = require('./md-links.js');
const {stats, statsValidate} = require('./stats.js');

/* const yargs = require('yargs');

const { mdLinks } = require('./md-links.js');

const {validate} = yargs
  .option('validate', {
    alias: 'v',
    description: 'Validando links',
    type: 'boolean',
  })
  .option('stats', {
    alias: 's',
    description: 'Estadisticas de Links',
    type: 'boolean',
  })
  .help()
  .alias('help', 'h')
  .argv; */

/* .slice: omitir los dos primeros argumentos */
/* const myArgs = process.argv.slice(2); */
/* console.log(process.argv,'myArgs: ', myArgs); */
/* const myPath = myArgs[0]; */
/* 
const mdLinks = mdLinks(myPath, {validate:true});
if (!mdLinks) {
  console.log('Not Found');
}
console.log(validate); */
/* 
mdLinks((file) => file.forEach((propietiesyObjects) =>)) */

/* CLI
 Expone ejecutable md-links en el path (configurado en package.json)
 Se ejecuta sin erro / output esperado
 Implementa --validate
 Implementa --stats */



/* #!/usr/bin/env node */
const program = require ('commander');
const validate = require('./validate.js');
// eslint-disable-next-line import/extensions

program.version('0.0.1');

// Commands
program
  .command('md-links <ruta>')
  .description('llama a los links md')
  .option('-v, --validate', 'muestra validez')
  .option('-s,--stats', 'muestra estadisticas de los links')
  /* .option('-h,--help', 'Opciones') */
  .action((path, options) => {
    console.log(path, options.validate, options.stats);
    mdLinks(path, options)
      .then((links)=> {
        links.forEach(link=> {
          if(!options.validate && !options.stats) {
            console.log(link.path, link.href, link.text)
            }
            if(options.validate && !options.stats) {
              console.log(link.path, link.href, link.text, link.status, link.statusText);
            }
        })
        if(!options.validate && options.stats) {
          console.log(stats(links));
        }
        if(options.stats && options.validate) {
          console.log(statsValidate(links));
        } 

      })
      .catch(e =>console.error(e));
  });
  /* .slice: omitir los dos primeros argumentos */
/* const myArgs = process.argv.slice(2); */
/* console.log(process.argv,'myArgs: ', myArgs); */
/* const myPath = myArgs[0]; */

program.parse(process.argv);
