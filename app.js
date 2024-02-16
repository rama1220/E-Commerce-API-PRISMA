import express from 'express'
import cors from "cors"
import mainRoute from './src/routes/mainRoute.js'


const app = express()
app.use(cors())
app.use(express.json())
app.use(mainRoute)




export default app