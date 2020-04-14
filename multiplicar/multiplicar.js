// Requireds
const fs = require('fs'); // Requerired de un proyecto propio de node
// const fs = require('express'); // Libreria que no es propia de node 
// const fs = require('../fs'); // Es un required que nosotros mismos escribimos 


// Colors, se debe importar en cada libreria que se necesite
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    console.log('================='.green);
    console.log(`Tabla de ${ base }`.green);
    console.log('================='.green);

    for (let i = 1; i <= limite; i++) {

        // \n es salto de línea
        console.log(`${ base } * ${ i } = ${ base*i }`);

    }
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido a base: ${ base } no es un número`);
            return;
        } else {
            if (!Number(limite)) {
                reject(`El valor introducido a limite: ${ limite } no es un número`);
                return;
            }
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {

            // \n es salto de línea
            data += `${ base } * ${ i } = ${ base*i }\n`;

        }


        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`)
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla
}