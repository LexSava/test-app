import React from 'react';
import { Box } from '@material-ui/core/';
import { useStyles } from './Main.Styles';
import Search from '../Search/Search';
import Menu from '../Menu/Menu';

interface IMain {}

const Main: React.FC<IMain> = () => {
  const classes = useStyles();

  return (
    <Box display="flex" minHeight="500px" className={classes.backgroundBlock}>
      <Menu />
      <Box py={2} width="100%">
        <Search />
      </Box>
    </Box>
  );
};

export default Main;
