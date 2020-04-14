// un const o let con llaves despues es destructuracion
const argv = require('./config/yargs').argv;
// npm colors
// const colors = require('colors');
// Safe es para que no se confunda con variable green y que se pueda implementar de forma colors.green
const colors = require('colors/safe');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log('Archivo creado: ', colors.green(archivo))).catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

console.log(argv);


// let argv2 = process.argv;
// console.log(argv.base);
// console.log('Limite', argv.limite);
// console.log(argv2);


// let base = '5';

// console.log(process.argv);

// let argv = process.argv;
// let parametro = argv[2];
// // Split separa terminos por signo
// let base = parametro.split('=')[1];


// crearArchivo(base).then(archivo => console.log(`Archivo creado: ${ archivo }`)).catch(e => console.log(e));