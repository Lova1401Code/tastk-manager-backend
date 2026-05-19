import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
    constructor(private readonly prisma: PrismaService) {}

    create(createTaskDto: CreateTaskDto){
        return this.prisma.task.create({
            data: createTaskDto,
        });
    }
    
    update(updateTaskDto: UpdateTaskDto){
        return this.prisma.task.update({
            where: { id: updateTaskDto.id },
            data: updateTaskDto,
        });
    }

    findAll() {
        return this.prisma.task.findMany();
    }

    findOne(id: number) {
        return this.prisma.task.findUnique({
            where: { id },
        });
    }

    remove(id: number) {
        return this.prisma.task.delete({
            where: { id },
        });
    }
}
