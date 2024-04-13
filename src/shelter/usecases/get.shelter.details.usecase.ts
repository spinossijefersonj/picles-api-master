import { IUseCase } from "src/domain/iusecase.interface"
import GetShelterDetailsUseCaseOutput from "./dtos/get.shelter.details.usercase.output"
import { Inject } from "@nestjs/common"
import ShelterTokens from "../shelter.tokens"
import ShelterRepository from "../shelter.repository";
import IShelterRepository from "../interfaces/shelter.repository.interface"
import shelterTokens from "../shelter.tokens"

export default class GetShelterDetailsUseCase
implements IUseCase<null, GetShelterDetailsUseCaseOutput>{
	
		constructor(
			@Inject(shelterTokens.shelterRepository)
			private readonly ShelterRepository: IShelterRepository,
		){}
	async run(input: null): Promise<GetShelterDetailsUseCaseOutput> {
		
		const shelter = await this.ShelterRepository.get();
		return new GetShelterDetailsUseCaseOutput({
			shelterName: shelter.name,
			shelterEmail: shelter.email,
			shelterPhone: shelter.phone,
			shelterWhatsApp: shelter.whatsApp,
			createdAt: shelter.createdAT,
			updatedAt: shelter.updateAt,
	});
	}
}
	

