import { TodoItem } from '../models/TodoItem';
import { TodoAccess } from '../dataLayer/TodoAccess';
import { CreateTodoRequest } from '../requests/CreateTodoRequest';

const uuidv4 = require('uuid/v4');
const todoAccess = new TodoAccess();

export function createTodo(
  createTodoRequest: CreateTodoRequest
): Promise<TodoItem> {
  const id = uuidv4();
  return todoAccess.createTodo({
    userId: '',
    todoId: id,
    createdAt: new Date().getTime().toString(),
    done: false,
    ...createTodoRequest
  });
}
