import mysql2 from 'mysql2';
export const conexion = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    port: 3305,
    database: 'lims1'
})

conexion.connect(function(err, conn) {
    if (err) {
        throw err;
    }else{
        console.log("conexion exitosa");
        
    }
})
