export type RemoteUser = {
  id: number,
  name: string,
  email: string
}

export async function fetchUserEmails(): Promise<string[]> {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const users: RemoteUser[] = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
  return users.map((user) => user.email);
}
