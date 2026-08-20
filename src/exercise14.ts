export type PostItem = {
  id: number,
  title: string,
  body: string
};

export async function fetchPostBatch(postIds: number[]): Promise<PostItem[]> {
  const promises: Promise<Response>[] = postIds.map((id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  });
  const done: Response[] = await Promise.all(promises);

  const mapped: Promise<PostItem>[] = done.map(async (map: Response): Promise<PostItem> => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return await map.json();
  });

  // i think this is overengineered
  return await Promise.all(mapped);
}
