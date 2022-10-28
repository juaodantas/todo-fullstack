import { Todo } from './../../model/todo.model';
import { TodosStateModel } from './todos.state';
import { Selector } from "@ngxs/store";

export class TodoSelectors {
    @Selector([TodosStateModel])
    public static getTodoList(state: TodosStateModel): Todo[] {
      return state.todos as Todo[];
    }

    @Selector([TodosStateModel])
    public static selectedTodo(state: TodosStateModel): Todo {
      return state.selectedTodo as Todo;
    }

  }
  