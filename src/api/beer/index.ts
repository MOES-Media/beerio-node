import express, { Request, Response } from "express";

const router = express.Router()

router.get("/beer", (req: Request, res: Response) => {
    res.json({foo: "bar"})
})

router.post("/beer",(req: Request, res: Response) => {
    res.sendStatus(201)
})

router.put("/beer", (req: Request, res: Response) => {
    res.sendStatus(204)
})

router.get("/beer/:id", (req: Request, res: Response) => {
    res.json([{foo: "bar"}])
})

router.delete("/beer/:id", (req: Request, res: Response) => {
    res.sendStatus(204)
})

export {router as beerRouter}