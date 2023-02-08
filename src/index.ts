import express from "express";
import { json } from "body-parser";
import mongoose from "mongoose";
import { beerRouter } from "./api/beer";

const app = express();
app.use(json());
app.use(beerRouter);

mongoose.set('strictQuery', false)
mongoose.connect(
  "mongodb://localhost:27017/beer_io",
  () => console.log("Connected to mongoDB")
);

app.listen(3000, () => {
  console.log("Server is listening on port: 3000");
});
