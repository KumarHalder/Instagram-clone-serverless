//import { v4 as uuidv4 } from 'uuid'
import { TodoItem } from '../models/TodoItem'
//import {getUserId} from '../lambda/utils'
import { PostAccess } from '../dataLayer/postAccess'
//import { getUserId } from '../lambda/utils';

//import { APIGatewayProxyEvent } from 'aws-lambda'
//import { UpdateTodoRequest } from '../requests/UpdateTodoRequest'

const postAccess = new PostAccess()


export async function getAllToDos(userId:string): Promise<TodoItem[]> {
    return await postAccess.getAllToDos(userId);

}

// export async function createTodo(
//     event: APIGatewayProxyEvent
// ): Promise<TodoItem> {
//     const itemId = uuidv4()
//     const userId = "getUserId(event)"
//     const date = new Date()
//     const parseBody = JSON.parse(event.body)
//     const todoItemNew: TodoItem = {
//         todoId: itemId,
//         userId: userId,
//         createdAt: date.toISOString(),
//         name: parseBody.name
//     }
//     return await postAccess.createTodo(todoItemNew);
// }

// export async function updateTodo(event: APIGatewayProxyEvent) {
//     const todoId = event.pathParameters.todoId;
//     const userId = "getUserId(event)";
//     const updatedTodo: UpdateTodoRequest = JSON.parse(event.body);

//     return await postAccess.updateTodo(updatedTodo, userId, todoId);
// }

