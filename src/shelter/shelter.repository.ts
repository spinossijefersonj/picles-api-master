import { InjectModel } from "@nestjs/mongoose";
import { Shelter } from "./schemas/shelter.schemas";
import { Model } from "mongoose";
import { promises } from "dns";

export class ShelterRepository {
    @InjectModel(Shelter.name)
    private readonly shelterModel
}