import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { colorCoal } from '../../common/colorApp';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btmMenu: {
      color: colorCoal,
    },
  })
);
