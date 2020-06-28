
// requireds
const fs = require('fs');
var colors = require('colors');


let crearArchivo = ( base, limite ) => {

    return new Promise( (resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor base introducido ${base} no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor limite introducido ${limite} no es un número`);
            return;
        }

        let data = obtenerTabla(base, limite);

        fs.writeFile( `tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err) reject(err)
            else resolve(`tabla-${base}.txt`)

        });

    } ) ;

};

let listarTabla = ( base, limite) => {

    return new Promise( (resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor base introducido ${base} no es un número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor limite introducido ${limite} no es un número`);
            return;
        }

        let data = obtenerTabla(base, limite);

        resolve(data);

    });
}


let obtenerTabla = (base, limite) => {

    let data = ''

    for (let i = 0; i <= limite; i++) {
        data +=(`${ base } x ${ i } = ${ base * i } \n`);
    }

    return data;

}


module.exports = {
    crearArchivo, 
    listarTabla
}