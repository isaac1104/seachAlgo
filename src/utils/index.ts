import words from 'an-array-of-english-words';

import { AlgorithmsState, ResultState } from 'src/types';

const algorithms: AlgorithmsState = {
  linear: (target: string) => {
    let count = 0;

    for (let i = 0; i < words.length; i++) {
      if (words[i] === target) {
        return {
          count,
          word: target,
        };
      } else {
        count++;
      }
    }

    return {
      word: '',
      count: 0,
    };
  },
  binary: (target: string) => {
    let start = 0;
    let end = words.length - 1;
    let count = 0;

    while (start <= end) {
      let middle = Math.floor((start + end) / 2);
      count++;

      if (words[middle] === target) {
        return {
          count,
          word: target,
        };
      } else if (words[middle] < target) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }

    return {
      word: '',
      count: 0,
    };
  },
};

const performSearch = (target: string, algorithm: string): ResultState => {
  const startTime = performance.now();
  const result = algorithms[algorithm](target);
  const endTime = performance.now();
  return {
    ...result,
    executionTime: endTime - startTime,
  };
};

export default performSearch;
