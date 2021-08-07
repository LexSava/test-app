import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@material-ui/core/';
import CloudIcon from '@material-ui/icons/Cloud';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useStyles } from './Menu.Styles';

interface IMenu {
  onSwitchPage(text: string): void;
}

const Menu: React.FC<IMenu> = (props) => {
  const [section, setSection] = useState<string>('found');

  const classes = useStyles();
  const colorBorder = '#2f3131';

  const switchSection = (toggle: string) => {
    setSection(toggle);
  };

  useEffect(() => {
    props.onSwitchPage(section);
    console.log(section);
  }, [section]);

  return (
    <Box border={2} borderLeft={0} borderColor={colorBorder} py={2} px={1}>
      <Box mx="auto">
        <IconButton
          color="primary"
          aria-label="Home page"
          onClick={() => switchSection('found')}
        >
          <CloudIcon fontSize="large" />
        </IconButton>
      </Box>
      <Box mx="auto" mt={2}>
        <IconButton
          color="primary"
          aria-label="Home page"
          onClick={() => switchSection('liked')}
        >
          <ThumbUpAltIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Menu;
