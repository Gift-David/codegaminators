const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const routes = require("./routes")
const connectDB = require("./db")

const app = express()

app.use(express.json())
app.use("/api", routes)

const PORT = process.env.PORT || 8000

 app.listen(PORT, ()=>{
     console.log(`listening at port ${PORT}`)
 })

 connectDB()
 
 app.get("/", (req, res)=>{
     console.log({msg: "welcome"})
 })