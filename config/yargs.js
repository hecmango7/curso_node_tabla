const argv = require('yargs')
                    .option('b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'base de la tabla de multiplicar'
                    })
                    .option('h', {
                        alias: 'hasta',
                        type: 'number',
                        demandOption: true,
                        describe: 'valor hasta el cual se hara la tabla'
                    })
                    .option('l', {
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'muestra la tabla en consola'
                    })
                    .check( (argv, options) => {
                        if(isNaN(argv.b)) {
                            throw 'La base tiene que ser un numero'
                        }
                        return true;
                    } )
                    .argv;

module.exports = argv;