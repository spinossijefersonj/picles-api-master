import { Module } from '@nestjs/common';
import { ShelterController } from './shelter.controller';
import ShelterTokens from './shelter.tokens';
import GetShelterDetailsUseCase from './usecases/get.shelter.details.usecase';

import { MongooseModule } from '@nestjs/mongoose';
import { Shelter } from './schemas/shelter.schemas';

@Module({
  controllers: [ShelterController],
  providers: [{
	provide: ShelterTokens.getShelderDetailsUseCase,
	useClass: GetShelterDetailsUseCase
  }]
})
export class ShelterModule {}
