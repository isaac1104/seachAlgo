import words from 'an-array-of-english-words';

import { defaultValue } from 'src/constants';
import { Algorithms, Result } from 'src/types';

const algorithms: Algorithms = {
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

    return defaultValue;
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

    return defaultValue;
  },
  jump: (target: string) => {
    let length = words.length;
    let step = Math.floor(Math.sqrt(length));
    let blockStart = 0;
    let currentStep = step;
    let count = 0;

    while (words[Math.min(currentStep, length) - 1] < target) {
      count++;
      blockStart = currentStep;
      currentStep += step;

      if (blockStart >= length) {
        return defaultValue;
      }
    }

    while (words[blockStart] < target) {
      count++;
      blockStart++;

      if (blockStart === Math.min(currentStep, length)) {
        return defaultValue;
      }
    }

    if (words[blockStart] === target) {
      return {
        word: target,
        count: count,
      };
    } else {
      return {
        word: '',
        count: 0,
      };
    }
  },
};

const performSearch = (target: string, algorithm: string): Result => {
  const startTime = performance.now();
  const result = algorithms[algorithm](target);
  const endTime = performance.now();
  return {
    ...result,
    executionTime: endTime - startTime,
  };
};

export default performSearch;
