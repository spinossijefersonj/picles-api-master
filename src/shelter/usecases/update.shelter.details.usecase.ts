import { Inject, Injectable } from "@nestjs/common";
import { IUseCase } from "src/domain/iusecase.interface";
import GetShelterDetailsUseCaseOutput from "./dtos/get.shelter.details.usercase.output";
import { promises } from "dns";
import UpdateShelterDetailsUseCaseInput from "./dtos/update.shelter.details.usecase.input";
import UpdateShelterDetailsUseCaseOutput from "./dtos/update.shelter.details.usecase.output";
import ShelterRepository from "../shelter.repository";
import { Shelter } from "../schemas/shelter.schema";
import ShelterTokens from "../shelter.tokens";

@Injectable()
export default class UpdateShelterDetailsUseCase
implements IUseCase<UpdateShelterDetailsUseCaseInput, UpdateShelterDetailsUseCaseOutput>
{

    constructor(
        @Inject(ShelterTokens.shelterRepository)
        private readonly ShelterRepository: ShelterRepository
    ){}

    async rum(input:UpdateShelterDetailsUseCaseInput): Promise<UpdateShelterDetailsUseCaseOutput> {
        await this.ShelterRepository.update(input)

        const shelter = await this.ShelterRepository.get()

        return new UpdateShelterDetailsUseCaseOutput({
           name: Shelter.name,
           phone: Shelter.phone,
           whatsApp: Shelter.whatsApp,
           email: Shelter.email,
           updateAt: Shelter.updatedAt,
           createAt: Shelter.createdAt
        })
    }

    run(input: UpdateShelterDetailsUseCaseInput):
    Promise<UpdateShelterDetailsUseCaseOutput>{
        throw new Error("Method not implemented.");
    }
    
}