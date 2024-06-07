interface CsvJsonRecord {
  [key: string]: any;
}

type CsvJson = CsvJsonRecord[];

type CsvArray = any[][];

export type { CsvJson, CsvArray };
