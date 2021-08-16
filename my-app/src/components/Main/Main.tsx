import React, { useState } from 'react';
import { Box, useMediaQuery } from '@material-ui/core/';
import { useStyles } from './Main.Styles';
import Search from '../Search/Search';
import Menu from '../Menu/Menu';
import Found from './Found/Found';
import Like from './Like/Like';

interface IMain {}

const Main: React.FC<IMain> = (props) => {
  const [search, setSearch] = useState<string>('');
  const [menuSelector, setMenuSelector] = useState<string>('found');

  const classes = useStyles();

  const processSearch = (text: string) => {
    setSearch(text);
  };

  const switchPage = (page: string) => {
    setMenuSelector(page);
  };

  if (menuSelector === 'found') {
    return (
      <Box minHeight="500px" className={classes.mainBlock}>
        <Menu onSwitchPage={switchPage} />
        <Box py={2} width="100%">
          <Search onSearch={processSearch} />
          <Found resultsSearch={search} />
        </Box>
      </Box>
    );
  }
  return (
    <Box minHeight="500px" className={classes.mainBlock}>
      <Menu onSwitchPage={switchPage} />
      <Box py={2} width="100%">
        <Like />
      </Box>
    </Box>
  );
};

export default Main;
