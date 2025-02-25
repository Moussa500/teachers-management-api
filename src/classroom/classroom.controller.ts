import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClassroomService } from './classroom.service';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { UpdateClassroomDto } from './dto/update-classroom.dto';

@Controller('classroom')
export class ClassroomController {
  constructor(private readonly classroomService: ClassroomService) {}

  @Post()
  create(@Body() dtos: CreateClassroomDto[]) {
    console.log(dtos);
    return this.classroomService.create(dtos);
  }

  @Get()
  findAll() {
    return this.classroomService.findAll();
  }

  @Get(':number')
  findOne(@Param('number') number: number) {
    return this.classroomService.findOne(number);
  }

  @Patch(':number')
  update(@Param('number') number: number, @Body() updateClassroomDto: UpdateClassroomDto) {
    return this.classroomService.update(number, updateClassroomDto);
  }

  @Delete(':number')
  remove(@Param('number') number: number) {
    return this.classroomService.remove(number);
  }
}
