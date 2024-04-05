import { Module } from '@nestjs/common';
import { ShelterController } from './shelter.controller';
import ShelterToken from './shelter.tokens';
import GetShelterDetailsUseCaseOutput from './usecases/dtos/get.shelter.details.usecase.output';
import GetShelterDetailsUseCase from './usecases/get.shelter.details.usecase';
import { Shelter, ShelterSchimas } from './schemas/shelter.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [ShelterController],

  imports:[
    MongooseModule.forFeature([{name: Shelter.name, schema: ShelterSchimas}])
  ],
  providers: [
  {
	provide: ShelterToken.getShelderDetailsUseCase,
	useClass: GetShelterDetailsUseCase
  }
]
})
export class ShelterModule {}
