interface CsvJsonRecord {
  [key: string]: any;
}

type MatchArray = Array<RegExp|string>;
type CsvJson = CsvJsonRecord[];
type CsvArray = any[][];

export type { CsvJson, CsvArray, MatchArray };
