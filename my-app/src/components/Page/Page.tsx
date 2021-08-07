import React from 'react';
import { Box } from '@material-ui/core';
import { useStyles } from './Page.Style';
import Header from '../Header/Header';
import Main from '../Main/Main';

interface IPage {}

const Page: React.FC<IPage> = (props) => {
  const classes = useStyles();

  return (
    <Box width="100%">
      <Header />
      <Main />
    </Box>
  );
};

export default Page;
