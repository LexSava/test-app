import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core/';
import { useStyles } from './Like.Styles';

interface ILike {}

const Like: React.FC<ILike> = (props) => {
  const classes = useStyles();

  return <Box>Liked</Box>;
};

export default Like;
