import * as AWS from 'aws-sdk';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { TodoItem } from '../models/TodoItem';

export class TodoAccess {
  constructor(
    private readonly docClient: DocumentClient = new AWS.DynamoDB.DocumentClient(),
    private readonly todoTable = process.env.TODO_TABLE
  ) {}

  async getAllTodos(): Promise<TodoItem[]> {
    console.log('Getting all todo');

    const params = {
      TableName: this.todoTable,
      KeyConditionExpression: '#userId = :userId',
      ExpressionAttributeNames: {
        '#userId': 'userId'
      },
      ExpressionAttributeValues: {
        ':userId': '1'
      }
    };

    const result = await this.docClient.query(params).promise();
    console.log(result);
    const items = result.Items;

    return items as TodoItem[];
  }

  async createTodo(todoItem: TodoItem): Promise<TodoItem> {
    console.log('Creating new todo');

    const params = {
      TableName: this.todoTable,
      Item: todoItem
    };

    const result = await this.docClient.put(params).promise();
    console.log(result);

    return todoItem as TodoItem;
  }
}
