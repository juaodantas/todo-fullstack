import { Todo } from './todo.entity';

describe('TodoEntity', () => {
  it('should be defined', () => {
    expect(new Todo()).toBeDefined();
  });
});
