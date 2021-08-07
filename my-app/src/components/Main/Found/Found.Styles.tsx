import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const backgroun = '#f8f1e5';
const colorBtnRemoveLike = '#f9ba32';
const colorBtnLike = '#2f3131';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 250,
    },
    media: {
      height: 180,
    },
    btnLikeColor: {
      color: colorBtnLike,
    },
    btnRemovLikeColor: {
      color: colorBtnRemoveLike,
    },
    btnLikeFloat: {
      float: 'right',
    },
  })
);
