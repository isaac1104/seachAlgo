import { RadioGroupItems } from 'src/types';

export const radioGroupItems: Record<string, RadioGroupItems> = {
  linear: {
    id: 1,
    label: 'Linear',
    value: 'linear',
    description:
      'Linear search sequentially checks each element of the list until a match is found or the whole list has been searched',
  },
  binary: {
    id: 2,
    label: 'Binary',
    value: 'binary',
    description:
      'Binary search finds the position of a target value within a sorted array. Itcompares the target value to the middle element of the array.',
  },
  jump: {
    id: 3,
    label: 'Jump',
    value: 'jump',
    description:
      'Jump search or block search refers to a search algorithm for ordered lists. It works by first checking all items Lₖₘ, where kin mathbb {N} and m is the block size, until an item is found that is larger than the search key.',
  },
};

export const defaultValue = {
  word: '',
  count: 0,
};
