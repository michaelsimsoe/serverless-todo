import { TodoItem } from '../models/TodoItem';
import { TodoAccess } from '../dataLayer/TodoAccess';
import { parseUserId } from '../auth/utils';
import { CreateTodoRequest } from '../requests/CreateTodoRequest';

const uuidv4 = require('uuid/v4');
const todoAccess = new TodoAccess();

export async function getAllTodos(jwtToken: string): Promise<TodoItem[]> {
  const userId = parseUserId(jwtToken);
  return todoAccess.getAllTodos(userId);
}

export function createTodo(
  createTodoRequest: CreateTodoRequest,
  jwtToken: string
): Promise<TodoItem> {
  const userId = parseUserId(jwtToken);
  const id = uuidv4();

  return todoAccess.createTodo({
    userId: userId,
    todoId: id,
    createdAt: new Date().getTime().toString(),
    done: false,
    ...createTodoRequest
  });
}
