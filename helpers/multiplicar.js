    const fs = require('fs');
    const colors = require('colors');


    const crearArchivo = async(base= 5, hasta= 10, listar = false) => {


        
        try {
            let salida = '';
            for(let i=1; i <=hasta; i++) {
                salida += (`${base} x ${i} = ${base*i}\n`);
            }
            if (listar) {
                console.log('================='.rainbow);
                console.log(`Tabla del ${base}`.inverse);
                console.log('================='.rainbow);                               
                console.log(salida.rainbow);
            }
            
            fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida)
    
            return `Tabla-${base}.txt`
        } catch (err) {
            throw err;
        }

    }

    module.exports ={
        crearArchivo
    }

