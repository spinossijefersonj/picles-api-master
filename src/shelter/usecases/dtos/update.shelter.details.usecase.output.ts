export default class UpdateShelterDetailsUseCaseOutput{
    name: string;
    whatsApp: string;
    email: string;
    phone: string;
    updateAt: Date;
    createAt: Date;

    constructor(data: Partial<UpdateShelterDetailsUseCaseOutput>){
        Object.assign(this, data);
    }
}