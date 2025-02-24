import { IsEmail, IsNumberString, IsOptional } from "class-validator"

export class CreateStudentDto {
    cin:string
    name: string
    @IsOptional()
    groupName:string
    @IsEmail()
    email:string
    @IsNumberString()
    phoneNumber:string
}
