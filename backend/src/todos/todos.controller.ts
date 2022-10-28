import { TodosService } from './todos.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodosDto } from './dto/todos';
import { Todo } from './entity/todo.entity';

@Controller('todos')
export class TodosController {
    constructor(private todosService: TodosService){}

    @Post('/')
    creteTodo(@Body() todo: TodosDto): Promise<TodosDto>{
        return this.todosService.creteTodo(todo);
    }

    @Get('/')
    getAllTodos(): Promise<Todo[]>{
        return this.todosService.getAllTodos();
    }
}
