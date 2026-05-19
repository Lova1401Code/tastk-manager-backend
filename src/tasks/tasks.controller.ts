import { Controller, Post, Body, Patch, Delete, Get, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Post()
    create(@Body() createTaskDto: CreateTaskDto) {
        return this.tasksService.create(createTaskDto);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() updateTaskDto: CreateTaskDto) {
        return this.tasksService.update(id, updateTaskDto);
    }

    @Get()
    findAll() {
        return this.tasksService.findAll();
    }

    @Get(':id') 
    findOne(@Param('id') id: number) {
        return this.tasksService.findOne(id);
    }

    @Delete()
    delete(@Body('id') id: number) {
        return this.tasksService.remove(id);
    }
}
