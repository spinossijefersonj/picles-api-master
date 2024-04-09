import { Module } from '@nestjs/common';
import { ShelterController } from './shelter.controller';
import ShelterToken from './shelter.tokens';
import GetShelterDetailsUseCaseOutput from './usecases/dtos/get.shelter.details.usercase.output';
import GetShelterDetailsUseCase from './usecases/get.shelter.details.usecase';
import { Shelter, ShelterSchimas } from './schemas/shelter.schema';
import { MongooseModule } from '@nestjs/mongoose';
import ShelterTokens from './shelter.tokens';
import UpdateShelterControllerInput from './usecases/dtos/update.shelter.details.usecase.output';
import UpdateShelterDetailsUseCase from './usecases/update.shelter.details.usecase';
import { ShelterRepository } from './shelter.repository';

@Module({
  controllers: [ShelterController],

  imports:[
    MongooseModule.forFeature([{name: Shelter.name, schema: ShelterSchimas}])
  ],
  providers: [
  {
	provide: ShelterToken.getShelderDetailsUseCase,
	useClass: GetShelterDetailsUseCase
  },

  {
    provide: ShelterToken.shelterRepository,
    useClass: ShelterRepository,
  },
  {
    provide: ShelterTokens.updateShelderDetailsUseCase,
    useClass: UpdateShelterDetailsUseCase
  }

]
})
export class ShelterModule {}
