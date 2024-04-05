import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import {HydratedDocument} from "mongoose"

export type ShelterDocument = HydratedDocument<Shelter>

@Schema({versionKey:false})
export class Shelter{
    @Prop({Requiret: true})

    name: string
    @Prop({Requiret: true})
    whatsApp: string
    @Prop({Requiret: true})
    email: string
    @Prop({Requiret: true})
    phone: string
    @Prop({Requiret: true})
    createdAT: Date
    @Prop({Requiret: true})
    update: Date
}

export const ShelterSchimas = SchemaFactory.createForClass(Shelter)