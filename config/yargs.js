const opt = {
        base:{
            demand: true ,
            alias: 'b'
        },
        limite:{
            alias: 'l',
            default: 10
        }
    }

const argv = require('yargs')
                .command('listar', 'Imprime en consola tabla de multiplicar', opt)
                .command('crear', 'Crea archivo texto con tabla de multiplicar', opt)                
                .argv;

module.exports = {
    argv
}