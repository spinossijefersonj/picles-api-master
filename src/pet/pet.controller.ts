import { BadRequestException, Body, Controller, Delete, Get, Inject, Param, Patch, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import CreatePetControllerInput from './dtos/create.pet.controller.input';
import PetTokens from './pet.tokens';
import { IUseCase } from 'src/domain/iusecase.interface';
import CreatePetUseCaseInput from './usecases/dtos/create.pet.usecase.input';
import CreatePetUseCaseOutput from './usecases/dtos/create.pet.usecase.output';
import GetPetByIdUseCaseInput from './usecases/dtos/get.pet.by.id.usecase.input';
import GetPetByIdUseCaseOutput from './usecases/dtos/get.pet.by.id.usecase.output';
import UpdatePetControllerInput from './dtos/update.pet.controller.input';
import UpdatePetByIdUseCaseInput from './dtos/update.pet.by.id.usecase.input';
import UpdatePetByIdUseCaseOutput from './dtos/update.pet.by.id.usecase.output';
import DeletePetByIdUseCaseInput from './usecases/dtos/delete.pet.by.id.usecase.input';
import DeletePetByIdUseCaseOutput from './usecases/dtos/delete.pet.by.id.usecase.output';
import { FileInterceptor } from '@nestjs/platform-express';
import multerConfig from 'src/config/muler.config';
import { PetSchema } from './schemas/pet.schema';

@Controller('pet')
export class PetController {

    @Inject(PetTokens.createPetUseCase)
    private readonly createPetUseCase: IUseCase<CreatePetUseCaseInput, CreatePetUseCaseOutput>

    @Inject(PetTokens.getPetByIdUseCase)
    private readonly getPetByIdUseCase: IUseCase<GetPetByIdUseCaseInput, GetPetByIdUseCaseOutput>

    @Inject(PetTokens.getPetByIdUseCase)
    private readonly updatePetByIdUseCase: IUseCase<UpdatePetByIdUseCaseInput, UpdatePetByIdUseCaseOutput>

    @Inject(PetTokens.getPetByIdUseCase)
    private readonly deletePetByIdUseCase: IUseCase<DeletePetByIdUseCaseInput, DeletePetByIdUseCaseOutput>

    @Inject(PetTokens.updatePetByIdUseCase)
    private readonly dupdatePetByIdUseCase: IUseCase<UpdatePetByIdUseCaseInput, UpdatePetByIdUseCaseOutput>

    @Post()
    async createPet(@Body() input: CreatePetControllerInput): Promise<CreatePetUseCaseOutput> {
        const useCaseInput = new CreatePetUseCaseInput({ ...input })
        return await this.createPetUseCase.run(useCaseInput)
    }

    @Get()
    async getPets(
        @Query('type') type?: string,
        @Query('size') size?: string,
        @Query('gender') gender?: string,
        @Query('page') page?: string,
        @Query('itemsPerPage') itemsPerPage?: string,
    ){
        const FIRST_PAGE = 1
        const DEFAULT_ITENS_PER_PAGE = 10
        const useCaseImput = GetPetsUseCaseInput({
            type: !!type ? type: null,
            size: !!size ? size: null,
            gender: !!gender ? gender: null,
            page: !!page ? parseInt(page) : FIRST_PAGE,
            itemsPerPage: !!itemsPerPage ? parseInt(itemsPerPage) : DEFAULT_ITENS_PER_PAGE,
        })
    }


    @Get(':id')
    async getPetById(@Param('id') id: string): Promise<GetPetByIdUseCaseOutput> {
        try {
            const useCaseInput = new GetPetByIdUseCaseInput({ id })
            return await this.getPetByIdUseCase.run(useCaseInput)
        } catch (error) {
            throw new BadRequestException(JSON.parse(error.message))
        }
    }

    @Put(':id')
    async updatePet(@Body() input: UpdatePetControllerInput, @Param('id') id: string): Promise<UpdatePetByIdUseCaseOutput> {

        try {
            const useCaseInput = new UpdatePetByIdUseCaseInput({
                ...input,
                id
            })
            return await this.updatePetByIdUseCase.run(useCaseInput)
        } catch (error) {
            throw new BadRequestException(JSON.parse(error.message))
        }
    }

    @Delete(':id')
    async deletePet(@Param('id') id: string): Promise<DeletePetByIdUseCaseOutput> {
        try {
            const useCaseInput = new DeletePetByIdUseCaseInput({ id })
            return await this.deletePetByIdUseCase.run(useCaseInput)
        } catch (error) {
            throw new BadRequestException(JSON.parse(error.message))
        }
    }

    @Patch(':id/photo')
 @UseInterceptors(FileInterceptor('photo', multerConfig))
 async updadePhoto(
 @UploadedFile()photo: Express.Multer.File,
 @Param('id') id: string,
 ): Promise<UpdatePetByIdUseCaseOutput>{
  const useCaseInput = new UpdatePetByIdUseCaseInput({
   id,
   photoPatch: photo.path
  })
  return await this.updatePetByIdUseCase.run(useCaseInput)
 }