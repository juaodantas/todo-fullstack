import { TodosDto } from "./todos";

describe('Todos', () => {
  it('should be defined', () => {
    expect(new TodosDto()).toBeDefined();
  });
});
