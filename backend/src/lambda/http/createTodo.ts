import 'source-map-support/register';

import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult
} from 'aws-lambda';

import { CreateTodoRequest } from '../../requests/CreateTodoRequest';
import { createTodo } from '../../businessLogic/todos';
import { createLogger } from '../../utils/logger';

const logger = createLogger('createTodo');

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  logger.info('Processing Event ', event);
  const newTodo: CreateTodoRequest = JSON.parse(event.body);
  const newTodoItem = await createTodo(newTodo);

  return {
    statusCode: 201,
    body: JSON.stringify({
      item: newTodoItem
    })
  };
};
