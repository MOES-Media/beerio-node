import express from "express"
import { json } from "body-parser"
import { beerRouter } from "./api/beer"

const app = express()
app.use(json())
app.use(beerRouter)

app.listen(3000, () => {
    console.log("Server is listening on port: 3000")
})
