import * as express from 'express';
import Config from  './config';
//bodyparser

const app = express();

app.listen(Config.port, () => {
    console.log(`Estou rodando na porta ${Config.port}`);
});