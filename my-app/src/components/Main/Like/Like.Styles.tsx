import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { colorCoal } from '../../../common/colorApp';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 220,
    },
    media: {
      height: 180,
    },
    btnRemovLikeColor: {
      color: colorCoal,
    },
    btnLikeFloat: {
      float: 'right',
    },
  })
);
