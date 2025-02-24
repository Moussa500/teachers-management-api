import { Availability } from "@prisma/client";
import { IsAlpha, IsEmail, IsNumberString, IsStrongPassword } from "class-validator";

export class CreateTeacherDto {
    cin:string;
    @IsEmail()
    email:string;
    name:string;
    password:string;
    @IsNumberString()
    phoneNumber:string;
    availabilities:Availability[];
}