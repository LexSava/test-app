import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  IconButton,
} from '@material-ui/core/';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useStyles } from './Like.Styles';
import Store from '../../../store/Store';
import { IBodyImg } from '../../../common/interfaces';

interface ILike {}

const Like: React.FC<ILike> = (props) => {
  // eslint-disable-next-line
  const [cards, setCards] = useState<any>([]);

  const [savedCards, setSavedСards] = useState<Array<IBodyImg>>([]);
  const [deletCard, setDeletCard] = useState<string>('');
  const classes = useStyles();

  const removeSavedСards = (id: string) => {
    setDeletCard(id);
    Store.removedLikedImages(id);
  };

  useEffect(() => {
    setSavedСards(Store.likeImages);
  }, [deletCard]);

  useEffect(() => {
    setCards(
      savedCards.map((img: IBodyImg) => {
        const srcPath = `https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`;
        return (
          <Box key={img.id} mb={2}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={srcPath}
                  title="Contemplative Reptile"
                />
              </CardActionArea>
              <CardActions className={classes.btnLikeFloat}>
                <IconButton
                  onClick={() => {
                    removeSavedСards(img.id);
                  }}
                >
                  <DeleteForeverIcon
                    fontSize="large"
                    className={classes.btnRemovLikeColor}
                  />
                </IconButton>
              </CardActions>
            </Card>
          </Box>
        );
      })
    );
  }, [savedCards]);

  return (
    <Box pt={2}>
      <Box display="flex" flexWrap="wrap" justifyContent="space-around" mt={2}>
        {cards}
      </Box>
    </Box>
  );
};

export default Like;
