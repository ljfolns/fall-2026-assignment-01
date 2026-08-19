export function transcribeDNA(dna: string): string {
  let out: string = "";
  for (let i: number = 0; i < dna.length; i++) {
    switch (dna.charAt(i)) {
      case "A": out += "U"; break;
      case "T": out += "A"; break;
      case "C": out += "G"; break;
      case "G": out += "C"; break;
      default: throw Error();
    }
  }
  return out;
}
