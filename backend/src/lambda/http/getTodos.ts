import 'source-map-support/register';

import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  APIGatewayProxyHandler
} from 'aws-lambda';

import { getAllTodos } from '../../businessLogic/todos';
import { createLogger } from '../../utils/logger';
import * as middy from 'middy';
import { cors } from 'middy/middlewares';

const logger = createLogger('createTodo');

export const handler = middy(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    logger.info('Processing Event ', event);
    const authorization = event.headers.Authorization;
    const split = authorization.split(' ');
    const jwtToken = split[1];

    const toDos = await getAllTodos(jwtToken);

    return {
      statusCode: 200,
      body: JSON.stringify({
        items: toDos
      })
    };
  }
);

handler.use(
  cors({
    credentials: true
  })
);
