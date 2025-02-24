import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}
  @Post()
  create(@Body() createTeacherDto: CreateTeacherDto[]) {
    return this.teacherService.create(createTeacherDto);
  }
  @Get()
  findAll() {
    return this.teacherService.findAll();
  }
  @Get(':cin')
  findOne(@Param('cin') cin: string) {
    return this.teacherService.findOne(cin);
  }
  @Patch(':cin')
  update(@Param('cin') cin: string, @Body() updateTeacherDto: UpdateTeacherDto) {
    return this.teacherService.update(cin, updateTeacherDto);
  }
  @Delete(':cin')
  remove(@Param('cin') cin: string) {
    return this.teacherService.remove(cin);
  }
}
