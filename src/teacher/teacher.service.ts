import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TeacherService {
  constructor(private prismaService:PrismaService){}
  async create(createTeacherDto: CreateTeacherDto) {
    const teacher= await this.prismaService.teacher.create({
        data:{
            cin:createTeacherDto.cin,
            name:createTeacherDto.name,
            email:createTeacherDto.email,
            password:createTeacherDto.password,
            phoneNumber:createTeacherDto.phoneNumber,
          }
});
return teacher;
}

  findAll() {
    return `This action returns all teacher`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teacher`;
  }

  update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return `This action updates a #${id} teacher`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacher`;
  }
}
