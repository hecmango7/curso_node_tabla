const {crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs');

console.clear();


// console.log(process.argv);
// console.log(argv);


crearArchivo(argv.b,argv.h, argv.l )
    .then(nombreArchivo => console.log(`${nombreArchivo} creado con exito`))
    .catch(err => console.log(err))