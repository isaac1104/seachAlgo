import { ChangeEvent, FormEvent, useState } from 'react';
import { Button, Radio, RadioGroup, TextInput } from '@mantine/core';

import { algorithms } from 'src/constants';
import { ResultState } from 'src/types';
import performSearch from 'src/utils';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [radioValue, setRadioValue] = useState('linear');
  const [result, setResult] = useState<ResultState | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleRadioChange = (value: string) => {
    setResult(null);
    setRadioValue(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lowerCasedValue = searchValue.toLowerCase();
    const result = performSearch(lowerCasedValue.toLowerCase(), radioValue);
    setResult(result);
  };

  return (
    <div>
      <h1>SearchAlgo</h1>
      <form onSubmit={handleSubmit}>
        <TextInput
          value={searchValue}
          onChange={handleInputChange}
          placeholder='Search for a word'
          required
        />
        <RadioGroup value={radioValue} onChange={handleRadioChange}>
          {algorithms.map(({ id, label, value }) => (
            <Radio key={id} label={label} value={value} />
          ))}
        </RadioGroup>
        <Button type='submit'>Search</Button>
      </form>
      {result && (
        <div>
          <h3>
            {radioValue} algorithm took {result?.count} tries and{' '}
            {result?.executionTime}ms to find {result?.word}
          </h3>
        </div>
      )}
    </div>
  );
};

export default App;
