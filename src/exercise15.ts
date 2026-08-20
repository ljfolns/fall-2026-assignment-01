import fs from 'fs';

export type ContentSummary = {
  email: string;
  postId: number,
  id: number,
  commenterEmail: string
}

export async function processCommentsPipeline(
  targetPostId: number,
  outputPath: string,
): Promise<number> {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  let cs: Pick<ContentSummary>[] = await (
    await fetch(
      `https://jsonplaceholder.typicode.com/posts/${targetPostId}/comments`,
    )
  ).json();

  cs = cs.filter((c) => {
    return !c.email.includes(".org")
  });
  cs.map((c) => {
    c.commenterEmail = c.email;
    delete c.body
  });

  await fs.promises.writeFile(outputPath, JSON.stringify(cs));

  return cs.length;
}
