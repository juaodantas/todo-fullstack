import { Todo } from './../../model/todo.model';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { Action, State, StateContext, Store } from "@ngxs/store";
import { TodosActions } from "./todos.action";
import { TodoService } from "src/app/core/services/todos.service";

export class TodosStateModel {
    public todos?: Todo[];
    public selectedTodo?: Todo;
  }
  @State<TodosStateModel>({
    name: 'todos',
    defaults: {
      todos: [],
      selectedTodo: undefined,
    }
  })
  @Injectable()
  export class TodoState {
    constructor(private store: Store, private TodoService: TodoService) {}
    
    /**
     * Select Todo 
     * @param action 
     * @returns Todo
     */
    @Action(TodosActions.SetSelectedTodo)
    public getTodos({ getState, setState }: StateContext<TodosStateModel>, action: TodosActions.SetSelectedTodo): void {
      const state = getState();
      return ;
    }

    /**
     * Get All Todos
     * @returns List of Todos
     */
    @Action(TodosActions.GetAllTodos)
    public setSelectedTodo({ getState, setState }: StateContext<TodosStateModel>): Observable<Todo[]> {
      const state = getState();
      return this.TodoService.getAll().pipe(
      
      );
    }

    
    /**
     * Create Todo
     * @returns 
     */
    @Action(TodosActions.CreateTodo)
    public createTodos( ctx: StateContext<TodosStateModel>, action: TodosActions.CreateTodo): void {
     
    }


  }