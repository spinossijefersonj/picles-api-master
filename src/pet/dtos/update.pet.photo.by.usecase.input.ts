import { StringQueryTypeCasting } from "mongoose";

export default class UpdatePetPhotoByUsecaseInput {
    id: string 
    photoPath: string

    constructor(data: Partial<UpdatePetPhotoByIdUseCaseInput>){
		Object.assign(this, data);

}