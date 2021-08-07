import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { colorBone } from '../../common/colorApp';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backgroundBlock: {
      backgroundColor: colorBone,
    },
  })
);
