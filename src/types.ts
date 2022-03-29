interface Algorithm {
  count: number;
  word: string;
}

export interface AlgorithmsState {
  [x: string]: (target: string) => Algorithm;
};

export interface ResultState {
  word: string;
  count: number;
  executionTime: number;
};
