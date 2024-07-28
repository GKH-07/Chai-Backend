import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()
// origin me wo frontend address jo backend se connect kr skta hai
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// excepting json data from client
app.use(express.json({ limit: "16kb" }))
//URL se data lene ke liye
app.use(express.urlencoded({ extended: true }))
// for the asset like pdf,image,{Public : folder name}
app.use(express.static("public"))
app.use(cookieParser())





export { app }