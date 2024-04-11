import { promises } from "dns";
import { Pet } from "../schemas/pet.schema";

export default interface IPetRepository{
    deleteById(id: any): unknown;
    create(data: Partial<Pet>): Promise<Pet>
    getById(id:string): Promise<Pet>
    updateById(data: Partial<Pet>): Promise<void>
    DeletePetByIdUseCase(id: string): Promise<void>
    
}