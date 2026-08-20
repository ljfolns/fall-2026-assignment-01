export type TodoItem = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
};

export async function fetchTodoSafe(todoId: number): Promise<TodoItem | null> {
  try {
    const req = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    );
    if (req.status < 200 || req.status > 299) return null;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return await req.json();
  } catch {
    return null;
  }
}
