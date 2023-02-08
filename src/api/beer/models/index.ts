import { Model, model, Schema, Document } from "mongoose";

interface IBeer {
    name: string,
    brewery: string
}

interface IBeerModelInterface extends Model<any>{
    build(attr: IBeer): IBeerDoc
}

interface IBeerDoc extends Document<any> {
    name: string,
    brewery: string
}

const beerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    brewery: {
        type: String,
        required: true
    },
})

beerSchema.statics.build = (attr: IBeer) => new Beer(attr)

export const Beer = model<any, IBeerModelInterface>('Beer', beerSchema)
