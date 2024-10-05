import express from 'express';
const app = express();
import dotenv from 'dotenv'
import { conexion } from './conexion.js';
import { router } from './rutas.js';
const port = process.env.PORT || 3001;


app.use(express.json());
dotenv.config();
app.use('/producto',router);
app.listen(port, function(err){
    if (err) {
throw err;
    }else{
        console.log(`listening on port ${port}`)
    }
});
