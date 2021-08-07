import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const colorBtnRemoveLike = '#2f3131';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 250,
    },
    media: {
      height: 180,
    },
    btnRemovLikeColor: {
      color: colorBtnRemoveLike,
    },
    btnLikeFloat: {
      float: 'right',
    },
  })
);
