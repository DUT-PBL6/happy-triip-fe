export function getKeyFromEnumValue<T>(enumObject: T, value: string): string {
  return Object.keys(enumObject).find((key) => enumObject[key] === value);
}
