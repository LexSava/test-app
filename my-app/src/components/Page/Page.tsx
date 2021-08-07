import React from 'react';
import { Box } from '@material-ui/core';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

interface IPage {}

const Page: React.FC<IPage> = (props) => (
  <Box maxWidth="1920px" mx="auto">
    <Header />
    <Main />
    <Footer />
  </Box>
);
export default Page;
