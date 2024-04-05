import { Shelter } from "../schemas/shelter.schemas";

export default interface IShelterRepository{
    get(): Promise<Shelter>
}