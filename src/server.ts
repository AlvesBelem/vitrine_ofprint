import express from 'express';
import dotenv from 'dotenv';
import mustacheExpress from 'mustache-express';
import path from 'path';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

function mustache(): (path: string, options: object, callback: (e: any, rendered?: string | undefined) => void) => void {
    throw new Error('Function not implemented.');
}


server.use(express.static(path.join(__dirname, '../public')));

//rotas


server.listen(process.env.PORT);