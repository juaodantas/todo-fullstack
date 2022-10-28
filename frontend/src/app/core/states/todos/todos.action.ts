import { Todo } from "../../model/todo.model";

export namespace TodosActions {
    export class GetAllTodos {
      public static readonly type = '[API] Get All Todos';
    }
    export class CreateTodo {
      public static readonly type = '[API] Create Todo';
      constructor(public todo: Todo) {}
    }

    export class SetSelectedTodo {
      public static readonly type = '[API] Set Todo';
      constructor(public todo: Todo) {}
    }
  }