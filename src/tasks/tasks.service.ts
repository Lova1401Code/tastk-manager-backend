import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
    constructor(private readonly prisma: PrismaService) {}

    async testTaskInDatabase(taskId: number) {
        const id = taskId;
        const task = await this.prisma.task.findUnique({
            where: {
                id
            }
        });

        if (!task) {
            throw new NotFoundException(`Task with id ${id} not found`);
        }
    }

    async create(createTaskDto: CreateTaskDto){
        return await this.prisma.task.create({
            data: createTaskDto,
        });
    }
    
    async update(id: number, updateTaskDto: UpdateTaskDto){

        this.testTaskInDatabase(id);

        return await this.prisma.task.update({
            where: { id },
            data: updateTaskDto,
        });
    }

    async findAll() {
        return await this.prisma.task.findMany();
    }

    async findOne(id: number) {
        this.testTaskInDatabase(id)

        return await this.prisma.task.findUnique({
            where: { id },
        });
    }

    async remove(id: number) {
        this.testTaskInDatabase(id)

        return await this.prisma.task.delete({
            where: { id },
        });
    }
}
