export function getInventoryValue(
  inventory: Array<[string, number, number]>,
): number {
  return inventory.filter((item: [string, number, number]): boolean => {
    if (typeof item == 'string') return false;
    if (typeof item == 'undefined') return false;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return item.at(1) > 5;
  }).reduce((acc: number, curr: [string, number, number]): number => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return acc + curr.at(1) * curr.at(2);
  }, 0);
}
