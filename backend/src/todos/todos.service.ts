import { Todo } from './entity/todo.entity';
import { Injectable } from '@nestjs/common';
import { TodosDto } from './dto/todos';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TodosService {
    constructor(
        @InjectRepository(Todo)
        private todosRepository: Repository<Todo>
    ){}

    creteTodo(todos: TodosDto): Promise<TodosDto> {
        return this.todosRepository.save(todos);
    }

    getAllTodos(): Promise<Todo[]>{
        return this.todosRepository.find();
    }
}
