import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const backgroun = '#f8f1e5';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backgroundBlock: {
      backgroundColor: backgroun,
    },
  })
);
