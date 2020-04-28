/**
 * Fields in a request to create a single TODO item.
 */
export interface CreateTodoRequest {
    postId:string,
    userId:string,
    name: string,
    url:string
    
  }
  