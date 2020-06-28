
const argv = require( './config/yargs' ).argv;
const { crearArchivo, listarTabla } = require( './multiplicar/multiplicar' );
var colors = require('colors');
var colors2 = require('colors/safe');

let argv2 = process.argv;
let parametro = argv2[2];
let base = parametro.split('=')[1]
let comando = argv._[0];

console.log('********************************************');
console.log('base    : ' + argv.base);
console.log('limite  : ' + argv.limite);
console.log(`comando : ${comando}` );

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then( data => {
                console.log('================='.green);
                console.log(`== Table del ${argv.base} ==`.green);
                console.log('================='.green);
                console.log( data );
                console.log('==============='.green)
            })
            .catch( e => console.log(e) );
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log( `Archivo creado: ${ colors2.red( archivo ) }` )  )
            .catch( e => console.log(e) );
        break;

    default:
        console.log('comando no reconodio')
        break;

}


