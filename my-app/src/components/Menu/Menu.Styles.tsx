import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const colorBtnMenu = '#2f3131';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btmMenu: {
      color: colorBtnMenu,
    },
  })
);
