import React from 'react';
import { Box, Avatar } from '@material-ui/core/';
import AvatarImg from '../../assets/avatar/avatar.jpg';
import { useStyles, StyledBadge } from './Main.Styles';
import Search from '../Search/Search';

interface IMain {}

const Main: React.FC<IMain> = () => {
  const classes = useStyles();

  return (
    <Box>
      <Search />
    </Box>
  );
};

export default Main;
