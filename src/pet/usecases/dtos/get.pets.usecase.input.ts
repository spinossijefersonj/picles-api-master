export default class GetPetsUseCaseInput {
    type?: string;
    size?: string;
    gender?: string;
    page?: number;
    itemPerPage?: number;

    constructor(data: Partial<GetPetsUseCaseInput>){
		Object.assign(this, data);

}