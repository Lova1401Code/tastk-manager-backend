import { IsIn, IsOptional, IsString, MinLength } from "class-validator";

export class CreateTaskDto {
    id?: number;

    @IsString()
    @MinLength(3)
    title!: string;

    @IsString()
    @MinLength(10)
    description!: string;    

    @IsString()
    @IsOptional()
    @IsIn([
        'OPEN', 
        'IN_PROGRESS', 
        'DONE', 
        'ARCHIVED', 
        'DELETED', 
        'CANCELED', 
        'PENDING', 
        'REJECTED', 
        'APPROVED'  
    ])
    status?: string;


}

