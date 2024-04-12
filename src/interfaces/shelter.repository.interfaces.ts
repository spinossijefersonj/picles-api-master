import { Shelter } from "../shelter/schemas/shelter.schema";

export default interface IShelterRepository{
    get(): Promise<Shelter>
    update(data: Partial<Shelter>): Promise<void>
}