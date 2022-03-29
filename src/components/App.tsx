import { ChangeEvent, FormEvent, useState } from 'react';
import {
  Container,
  Radio,
  RadioGroup,
  Text,
  TextInput,
  Title,
} from '@mantine/core';

import { radioGroupItems } from 'src/constants';
import { Result } from 'src/types';
import performSearch from 'src/utils';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [radioValue, setRadioValue] = useState('linear');
  const [result, setResult] = useState<Result | null>(null);

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
    <Container size='md'>
      <Title align='center' order={1} style={{ marginBottom: 16 }}>
        🔎 SearchAlgo
      </Title>
      <form onSubmit={handleSubmit}>
        <TextInput
          value={searchValue}
          onChange={handleInputChange}
          placeholder='Search for a word'
          radius='xl'
          style={{ marginBottom: 16 }}
          required
        />
        <RadioGroup
          value={radioValue}
          onChange={handleRadioChange}
          style={{ marginBottom: 16 }}
          spacing='xs'
          size='sm'
        >
          {Object.values(radioGroupItems).map(({ id, label, value }) => (
            <Radio key={id} label={label} value={value} />
          ))}
        </RadioGroup>
      </form>
      <Text style={{ marginBottom: 16 }}>
        {radioGroupItems[radioValue].description}
      </Text>
      {result && (
        <Title order={5}>
          Result:{' '}
          <Text color='blue' inherit component='span'>
            {result.count}{' '}
          </Text>
          tries and{' '}
          <Text color='blue' inherit component='span'>
            {result.executionTime}{' '}
          </Text>
          ms
        </Title>
      )}
    </Container>
  );
};

export default App;
