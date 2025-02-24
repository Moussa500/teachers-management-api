import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) { }

  @Post()
  create(@Body() createGroupDto: CreateGroupDto) {
    console.log(createGroupDto.name);
    return this.groupService.create(createGroupDto);
  }

  @Get()
  findAll() {
    return this.groupService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.groupService.findOne(name);
  }

  @Patch(':name')
  update(@Param('name') name: string, @Body() updateGroupDto: UpdateGroupDto) {
    return this.groupService.update(name, updateGroupDto);
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.groupService.remove(name);
  }
}
