import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { UpdateClassroomDto } from './dto/update-classroom.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClassroomService {
  constructor(private prismaService: PrismaService) { }
  async create(dtos: CreateClassroomDto[]) {
    console.log(dtos);
    const classRoom = await this.prismaService.classRoom.createMany({
      data: dtos.map(dto => ({
        number: dto.classRoomNumber,
      }))
    });
    return classRoom;
  }
  async findAll() {
    const classes = await this.prismaService.classRoom.findMany();
    return classes;
  }
  async findOne(number: number) {
    const classRoom = this.prismaService.classRoom.findUnique({ where: { number } })
    if (classRoom == null) {
      throw new NotFoundException("this classRoom doasn't exist");
    }
    return classRoom;
  }
  async update(number: number, updateClassroomDto: UpdateClassroomDto) {
    const classRoom = await this.findOne(number);
    if (classRoom == null) {
      throw new NotFoundException("this classRoom doasn't exist");
    }
    const updatedClassRoom = await this.prismaService.classRoom.update({
      where: {
        number
      },
      data: {
        number: updateClassroomDto.classRoomNumber
      }
    });
    return updatedClassRoom;
  }
  async remove(number: number) {
    const classRoom = await this.findOne(number);
    if (classRoom == null) {
      throw new NotFoundException("this classRoom doasn't exist");
    }
    await this.prismaService.classRoom.delete({ where: { number } });
    return `Classroom ${number} has been successfully deleted.`;
  }
}
