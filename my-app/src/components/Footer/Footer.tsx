import React from 'react';
import { Box, Link } from '@material-ui/core/';

import { useStyles } from './Footer.Styles';

interface IFooter {}

const Footer: React.FC<IFooter> = () => {
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
      <Link
        href="https://github.com/LexSava/test-app"
        color="inherit"
        target="_blank"
      >
        App GitHub
      </Link>
    </Box>
  );
};

export default Footer;
