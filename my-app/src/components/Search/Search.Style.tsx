import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    informEventHead: {
      marginLeft: theme.spacing(0.5),
    },
  })
);
