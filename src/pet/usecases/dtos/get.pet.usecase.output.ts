import { PartialObserver } from "rxjs";
import PetResponse from "src/pet/dtos/pet.response";

export default class GetPetUseCaseOutput {
    currentPage: number;
    totalPages: number;
    items: PetResponse[];

    constructor(data: Partial<GetPetUseCaseOutput>) {
        Object.assign(this, data);
    }
} 