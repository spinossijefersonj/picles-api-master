export default class GetPetByIdCaseInput {
    id: string

    constructor(data: Partial<GetPetByIdCaseInput>){
		Object.assign(this, data);
	}
}


