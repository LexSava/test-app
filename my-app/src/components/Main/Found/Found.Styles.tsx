import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { colorCoal, colorSunlight } from '../../../common/colorApp';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 250,
    },
    media: {
      height: 180,
    },
    btnLikeColor: {
      color: colorCoal,
    },
    btnRemovLikeColor: {
      color: colorSunlight,
    },
    btnLikeFloat: {
      float: 'right',
    },
  })
);
