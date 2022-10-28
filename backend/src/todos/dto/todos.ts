import {IsBoolean, IsNumber, IsString} from "class-validator";

export class TodosDto {
    @IsNumber()
    id: number;

    @IsString()
    content: string;

    @IsBoolean()
    isDone: boolean;
}
