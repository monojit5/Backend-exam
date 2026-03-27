import detenv from 'dotenv';
detenv.config()
import cors from 'cors'
import express from 'express'
import dbConneect from './src/config/db.js';
import listRouter from './src/routers/listRouter.js';
const app = express()
const port = process.env.PORT ||9000
app.use(cors({
    origin:"http://localhost:5173",
    methods:"GET, POST, PATCH, DELETE"
}))
app.use(express.json());
app.use("/user", listRouter);

dbConneect()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))