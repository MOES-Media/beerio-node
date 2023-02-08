import express, { Request, Response } from "express";
import { Beer } from "./models";

const router = express.Router()

router.get("/beer", async (req: Request, res: Response) => {
    const beers = await Beer.find()
    res.status(200).json(beers)
})

router.post("/beer",async (req: Request, res: Response) => {
    const {name, brewery} = req.body
    const beer = Beer.build({name, brewery})
    await beer.save()
    console.log(beer)
    res.status(201).json(beer)
})

router.put("/beer", async (req: Request, res: Response) => {
    const {id, name, brewery} = req.body
    const filter = {_id: id}
    const update = {name, brewery}
    await Beer.findOneAndUpdate(filter, update)
    res.sendStatus(204)
})

router.get("/beer/:id", async (req: Request, res: Response) => {
    const beer = await Beer.findOne({_id: req.params.id})
    res.status(200).json(beer)
})

router.delete("/beer/:id", async (req: Request, res: Response) => {
    await Beer.deleteOne({_id: req.params.id})
    res.sendStatus(204)
})

export {router as beerRouter}