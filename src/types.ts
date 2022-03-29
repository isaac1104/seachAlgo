interface Algorithm {
  count: number;
  word: string;
}

export interface Algorithms {
  [x: string]: (target: string) => Algorithm;
}

export interface Result {
  word: string;
  count: number;
  executionTime: number;
}

export interface RadioGroupItems {
  id: number;
  label: string;
  value: string;
  description: string;
}
