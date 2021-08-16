import React from 'react';
import { Box, Avatar } from '@material-ui/core/';
import AvatarImg from '../../assets/avatar/avatar.jpg';
import { useStyles, StyledBadge } from './Header.Styles';

interface IHeader {}

const Header: React.FC<IHeader> = () => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      pl={4}
      pr={4}
      pt={1}
      pb={1}
      className={classes.backgroundBlock}
    >
      <Box display="flex" alignItems="center" className={classes.logo}>
        Seacrh IMG
      </Box>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      >
        <Avatar alt="Avatar" src={AvatarImg} />
      </StyledBadge>
    </Box>
  );
};

export default Header;
