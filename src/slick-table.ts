export interface TableHeader<T> {
  text: string;
  value: (val: T) => string | number;
}
export interface TableHeader<T> {
  text: string;
  value: (val: T) => string;
}

export interface TableConfig<T> {
  headers: Array<TableHeader<T>>;
  items: T[];
}

export function createTable<T>(items: T[], headers: Array<TableHeader<T>>): TableConfig<T> {
  return { headers, items };
}
