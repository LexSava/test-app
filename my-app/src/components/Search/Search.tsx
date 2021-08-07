import React, { useState, useEffect } from 'react';
import { Box, TextField } from '@material-ui/core';
import Store from '../../store/Store';

interface ISearch {
  onSearch(text: string): void;
}

const Search: React.FC<ISearch> = (props) => {
  const [inputText, setInputText] = useState<string>(Store.search);
  const [startSearch, setStartSearch] = useState<string>('img');

  const changeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      Store.getSearchQuery(inputText);
      setStartSearch(inputText);
      event.preventDefault();
    }
  };

  useEffect(() => {
    props.onSearch(startSearch);
  });

  return (
    <Box mx="auto" width="80%">
      <TextField
        autoFocus
        fullWidth={true}
        id="outlined-search"
        label="Search images"
        type="search"
        variant="outlined"
        size="small"
        onInput={changeHandle}
        onKeyPress={keyPressHandler}
      />
    </Box>
  );
};

export default Search;
