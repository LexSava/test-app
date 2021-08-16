import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { colorBone, colorSunlight } from '../../common/colorApp';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backgroundBlock: {
      backgroundColor: colorSunlight,
    },
    logo: {
      fontSize: theme.spacing(3),
      color: colorBone,
      fontFamily: 'Righteous',
    },
  })
);
