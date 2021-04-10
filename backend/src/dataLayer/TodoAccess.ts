import * as AWS from 'aws-sdk'
import { DocumentClient } from 'aws-sdk/clients/dynamodb'
import { TodoItem } from '../models/TodoItem'

export class TodoAccess {
  constructor(
    private readonly docClient: DocumentClient = new AWS.DynamoDB.DocumentClient(),
    private readonly todoTable = process.env.TODO_TABLE
  ) {}

  async createTodo(todoItem: TodoItem): Promise<TodoItem> {
    console.log('Creating new todo')

    const params = {
      TableName: this.todoTable,
      Item: todoItem
    }

    const result = await this.docClient.put(params).promise()
    console.log(result)

    return todoItem as TodoItem
  }
}
