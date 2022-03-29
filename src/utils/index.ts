import words from 'an-array-of-english-words';

import { AlgorithmsState, ResultState } from 'src/types';

const algorithms: AlgorithmsState = {
  linear: (target: string) => {
    const resultObj: ResultState = { word: '', count: 0, executionTime: 0 };
    let count = 0;

    const startTime = performance.now();

    for (let i = 0; i < words.length; i++) {
      if (words[i] === target) {
        const endTime = performance.now();

        return {
          ...resultObj,
          count,
          word: target,
          executionTime: (endTime - startTime),
        };
      } else {
        count++;
      }
    }

    return null;
  },
  binary: (target: string) => {
    const resultObj: ResultState = { word: '', count: 0, executionTime: 0 };

    let start = 0;
    let end = words.length - 1;
    let count = 0;

    const startTime = performance.now();

    while (start <= end) {
      let middle = Math.floor((start + end) / 2);
      count++;

      if (words[middle] === target) {
        const endTime = performance.now();

        return {
          ...resultObj,
          count,
          word: target,
          executionTime: (endTime - startTime),
        };
      } else if (words[middle] < target) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }

    return null;
  },
};

const performSearch = (target: string, algorithm: string) => {
  return algorithms[algorithm](target);
};

export default performSearch;
