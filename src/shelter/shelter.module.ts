import { Module } from '@nestjs/common';
import { ShelterController } from './shelter.controller';
import ShelterTokens from './shelter.tokens';
import GetShelterDetailsUseCase from './usecases/get.shelter.details.usecase';
import GetShelterDetailsUseCaseOutput from './usecases/dtos/get.shelter.details.usecase.output';

import { MongooseModule } from '@nestjs/mongoose';
import { Shelter, ShelterSchima } from '@nestjs/mongoose';

@Module({
  controllers: [ShelterController],

  imports: [
    MongooseModule.forFeature([{name: Shelter.name, schema: ShelterSchima}])
  ],
  providers: [
  {
	provide: ShelterTokens.getShelderDetailsUseCase,
	useClass: GetShelterDetailsUseCase
  }
]
})
export class ShelterModule {}
