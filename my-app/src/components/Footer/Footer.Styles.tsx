import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const backgroun = '#f9ba32';
const colorText = '#2f3131';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backgroundBlock: {
      backgroundColor: backgroun,
    },
    informEventHead: {
      marginLeft: theme.spacing(0.5),
    },
    logo: {
      fontSize: theme.spacing(3),
      color: colorText,
      fontFamily: 'Righteous',
    },
  })
);
