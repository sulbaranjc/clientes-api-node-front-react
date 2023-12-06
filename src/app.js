console.log("hola mundo soy una API de JC")
import express, { query } from "express"
import cors from "cors"
import clientsRoutes from "./routes/clients.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express()

app.use(express.json())
app.use(cors())


app.use("/api",clientsRoutes)

app.use(indexRoutes)


app.use((req, res, next) => {
  res.status(404).json({ message : 'endpoint not found'})
})

export default app;