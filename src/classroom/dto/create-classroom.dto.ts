import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateClassroomDto {
    @IsNumber()
    @IsNotEmpty()
    classRoomNumber: number;
}
