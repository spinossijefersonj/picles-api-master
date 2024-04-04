import { IsEmail, IsNotEmpty, IsNumber, IsString, Length,} from "class-validator"

export default class UpdateShelterDetailsUseCaseInput {
	@IsString()
	@IsNotEmpty()
	name: string
	@IsNotEmpty()
	@IsString()
	@Length(10,11)
	whatsapp: string
	@IsNotEmpty()
	@IsEmail()
	@IsString()
	email: string
	@Length(10,11)
	@IsNotEmpty()
	@IsString()
	@IsNumber()
	phone: string

}