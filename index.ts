import express, { Request, Response } from "express";
import userRouter from "./routes/user";
const app = express()
const port = 3000

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

app.use('/user', userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})