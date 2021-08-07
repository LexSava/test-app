import './LoadingScreen.scss';
import React from 'react';
import { Box } from '@material-ui/core/';

interface ILoadingScreen {}

const LoadingScreen: React.FC<ILoadingScreen> = (props) => (
  <Box mx="auto">
    <Box className="container">
      <Box className="loader">
        <Box className="loader--dot" />
        <Box className="loader--dot" />
        <Box className="loader--dot" />
        <Box className="loader--dot" />
        <Box className="loader--dot" />
        <Box className="loader--dot" />
        <Box className="loader--text" />
      </Box>
    </Box>
  </Box>
);

export default LoadingScreen;
