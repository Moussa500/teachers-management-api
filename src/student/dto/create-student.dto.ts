import { IsEmail, IsNumberString } from "class-validator"

export class CreateStudentDto {
    cin:string
    name:string
    groupId:string
    @IsEmail()
    email:string
    @IsNumberString()
    phoneNumber:string
}
