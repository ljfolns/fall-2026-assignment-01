import fs from 'fs';

export async function logStatusToFile(
  filePath: string,
  statusMessage: string,
): Promise<void> {
  await fs.promises.appendFile(
    filePath,
    statusMessage + new Date(Date.now()).toISOString() + "\n"
  );
}
