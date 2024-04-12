import CreatePetControllerInput from "src/pet/dtos/create.pet.controller.input";
import CreatePetUseCaseInput from "../usecases/dtos/create.pet.usecase.input";

export default class UpdatePetByIdUseCaseInput extends CreatePetUseCaseInput {
    id: string

    constructor(data:Partial<UpdatePetByIdUseCaseInput>){
        super(data)
        Object.assign(this, data)
    }
}