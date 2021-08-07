import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  IconButton,
  ButtonGroup,
  Button,
} from '@material-ui/core/';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useStyles } from './Found.Styles';
import Store from '../../../store/Store';
import { Api } from '../../../api/flickr';
import { IBodyImg } from '../../../common/interfaces';

interface IFound {
  resultsSearch: string;
}

const Found: React.FC<IFound> = (props) => {
  const [search, setSearch] = useState<string>('');
  const [page, setPage] = useState<string>('1');
  const [allPages, setAllPages] = useState<string>('1');

  const [allImagesPage, setAllImagesPage] = useState<Array<IBodyImg>>([]);
  // eslint-disable-next-line
  const [cards, setCards] = useState<any>([]);
  const [likedImg, setLikedImg] = useState<Array<IBodyImg>>([]);

  const classes = useStyles();

  const getSavedСards = (elem: IBodyImg) => {
    Store.getLikeImages(elem);
    setLikedImg(Store.likeImages);
  };

  const removeSavedСards = (id: string) => {
    Store.removedLikedImages(id);
    setLikedImg(Store.likeImages);
  };

  const backPage = () => {
    let back = +page;
    if (back > 1) {
      back -= 1;
      setPage(String(back));
    }
  };

  const forwardPage = () => {
    let forward = +page;
    if (forward < +allPages) {
      forward += 1;
      setPage(String(forward));
    }
  };

  useEffect(() => {
    if (search.length !== 0) {
      const getOnePageImages = Api.getImages(search, page);
      getOnePageImages.then((response) => {
        setAllPages(response.pages);

        setAllImagesPage(response.photo.map((item: IBodyImg) => item));
        Store.getpageWithImages(response.photo.map((item: IBodyImg) => item));
      });
    }
  }, [search, page]);

  useEffect(() => {
    setSearch(props.resultsSearch);
  }, [props.resultsSearch]);

  useEffect(() => {
    setLikedImg(Store.likeImages);
  }, []);

  useEffect(() => {
    setPage('1');
  }, [search]);

  useEffect(() => {
    setCards(
      Store.pageWithImages.map((img: IBodyImg) => {
        const srcPath = `https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`;
        let stateButton: boolean = false;
        const disableButtons = (imgage: IBodyImg) => {
          const disable = likedImg.some((i: IBodyImg) => i.id === imgage.id);
          stateButton = disable;
        };
        disableButtons(img);
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
                {stateButton ? (
                  <IconButton
                    onClick={() => {
                      removeSavedСards(img.id);
                    }}
                  >
                    <ThumbUpAltIcon
                      fontSize="large"
                      className={classes.btnRemovLikeColor}
                    />
                  </IconButton>
                ) : (
                  <IconButton
                    onClick={() => {
                      getSavedСards(img);
                    }}
                  >
                    <ThumbUpAltOutlinedIcon
                      fontSize="large"
                      className={classes.btnLikeColor}
                    />
                  </IconButton>
                )}
              </CardActions>
            </Card>
          </Box>
        );
      })
    );
  }, [allImagesPage, likedImg]);

  return (
    <Box pt={2}>
      <Box textAlign="right" mx="auto" width="80%">
        <ButtonGroup aria-label="outlined secondary button group">
          <Button onClick={() => backPage()}>One</Button>
          <Button disabled style={{ color: '#2f3131' }}>
            {page} of {allPages}
          </Button>
          <Button onClick={() => forwardPage()}>Three</Button>
        </ButtonGroup>
      </Box>
      <Box display="flex" flexWrap="wrap" justifyContent="space-around" mt={2}>
        {cards}
      </Box>
    </Box>
  );
};

export default Found;
