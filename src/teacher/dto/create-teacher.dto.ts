import { Availability } from "@prisma/client";

export class CreateTeacherDto {
    cin:string;
    email:string;
    name:string;
    password:string;
    phoneNumber:string;
    availabilities:Availability[];
}