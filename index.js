import express from "express";
import winston from "winston";
import cors from "cors";

import sequelize from "./config/instances/postgres.js"

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp })=>{
  return `${timestamp} [ ${label} ] ${level} ${message}`;
});
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({filename: "livraria_api.log"})
  ],
  format: combine(
    label({ label: "livraria_api" }),
    timestamp(),
    myFormat
  )
});

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req,res) => {
  res.send("Deu certo")
})

app.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
    res.status(400).send({error: err.message});
});


sequelize.sync().then(async () => {
    await console.log('Conectado ao banco de dados!');
});
  
app.listen(8000, () => { console.log(`Started server at http://localhost:8000`) });