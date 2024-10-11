import express from 'express';
import dotenv from 'dotenv'
import { conexion } from './src/db/conexion.js';
import { router } from './src/routes/route.js';
const port = process.env.PORT || 3001;

const app = express();

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
