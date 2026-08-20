import fs from 'fs';

export function calculateSubjectAverage(subject: string): number {
  let len = 0;
  let total = 0;
  for (const name in file) {
    if (subject in file[name]) {
      len++;
      total += file[name].subject;
    }
  }
  return total / len;
}

export type Gradebook = {
  [name: string]: {
    [subject: string]: number
  }
}

const file: Gradebook = JSON.parse(fs.readFileSync("data/gradebook.json", "utf8"))

console.log(file)
