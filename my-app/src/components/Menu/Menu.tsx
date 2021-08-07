import React from 'react';
import { Box, IconButton } from '@material-ui/core/';
import CloudIcon from '@material-ui/icons/Cloud';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useStyles } from './Menu.Styles';

interface IMenu {}

const Menu: React.FC<IMenu> = () => {
  const classes = useStyles();
  const colorBorder = '#2f3131';

  return (
    <Box border={2} borderLeft={0} borderColor={colorBorder} py={2} px={1}>
      <Box mx="auto">
        <IconButton color="primary" aria-label="Home page">
          <CloudIcon fontSize="large" />
        </IconButton>
      </Box>
      <Box mx="auto" mt={2}>
        <IconButton color="primary" aria-label="Home page">
          <ThumbUpAltIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Menu;
