const colors = require('colors');
const fs = require('fs');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try{   

        let salida, consola = '';

        for ( let i = 1 ; i <= hasta ; i++ ){
            salida += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base } ${'x'.magenta} ${ i } ${'='.magenta} ${ base * i }\n`;
        }

        if ( listar ){
            console.log('======================='.cyan);
            console.log('   Tabla del:', colors.blue( base ));
            console.log('======================='.cyan);

            console.log(consola);
        }

        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida);

        return `tabla-${ base }.txt`;

    } catch (err){
        throw err;
    }
}

module.exports = {
    crearArchivo
}