import { Todo } from './../../../../../backend/src/todos/entity/todo.entity';
import { Injectable } from "@angular/core";
import { environment } from "src/app/enviroment";
import { HttpClient} from '@angular/common/http';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Observable} from 'rxjs';

@UntilDestroy()
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private endpoint = environment.apiLocalURL;

  private controller = 'todos';

  constructor(private http: HttpClient) {}

  /**
   * Pega a listas de todas as tarefas
   * @returns
   */
  public getAll(): Observable<Todo[]> {
    console.log('url', `${this.endpoint}/${this.controller}`)
    return this.http.get<Todo[]>(`${this.endpoint}/${this.controller}`);
  }
}