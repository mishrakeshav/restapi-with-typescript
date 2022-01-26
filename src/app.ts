import express from "express";
import config from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";
import routes from './routes';
const app = express();

const port = config.get<number>('port');

app.listen(port,'127.0.0.1', async ()=>{
    logger.info(`App is running at http://localhost:${port}`);
    await connect();
    routes(app);
})