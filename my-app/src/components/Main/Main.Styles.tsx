import { red } from '@material-ui/core/colors';
import {
  makeStyles,
  createStyles,
  Theme,
  createTheme,
} from '@material-ui/core/styles';
import { colorBone } from '../../common/colorApp';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainBlock: {
      display: 'flex',
      backgroundColor: colorBone,
      [theme.breakpoints.down('xs')]: {
        display: 'block',
      },
    },
  })
);
