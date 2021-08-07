import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import blueGrey from '@material-ui/core/colors/blueGrey';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    informEventHead: {
      marginLeft: theme.spacing(0.5),
    },
  })
);
