export type AlgorithmsState = {
  [x: string]: (target: string) => ResultState | null;
};

export type ResultState = {
  word: string;
  count: number;
  executionTime: number;
};
