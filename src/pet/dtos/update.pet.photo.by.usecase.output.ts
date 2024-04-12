export default class UpdatePetPhotoByIdUseCaseOutput extends
UpdatePetPhotoByIdUseCaseOutput {   

    constructor(data: Partial<UpdatePetPhotoByIdUseCaseOutput>){
        super();
		Object.assign(this, data);
}