import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { colorCoal } from '../../common/colorApp';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btmMenu: {
      color: colorCoal,
    },
    menuBlock: {
      display: 'block',
      [theme.breakpoints.down('xs')]: {
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: 0,
      },
    },
    btmMenuBox: {
      [theme.breakpoints.down('xs')]: {
        margin: 0,
      },
    },
  })
);
