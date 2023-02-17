import { getEmbedURL, getYTDataUrl, getYTImgUrl } from '../utils/helpers';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Modal,
  Paper,
  Chip,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';

export const ContentCard = (props) => {
  const { type, src, category } = props;

  const [modalOpen, setModalOpen] = useState(false);
  const [vidData, setVidData] = useState(undefined);

  console.log(vidData);
  const handleClose = () => {
    setModalOpen(false);
  };

  const formattedCategoryString = category.charAt(0).toUpperCase() + category.slice(1);

  useEffect(() => {
    fetch(getYTDataUrl(src))
      .then((response) => response.json())
      .then((data) => setVidData(data));
  }, [src]);

  const imgUrl = getYTImgUrl(src);
  const title = vidData ? vidData.items[0].snippet.title : 'Loading';
  const description = '';
  const channel = vidData ? vidData.items[0].snippet.channelTitle : '';

  const card = (
    <Card sx={{ minWidth: '15rem', maxWidth: '15rem', paddingBottom: 0 }}>
      <CardActionArea onClick={() => setModalOpen(true)}>
        <CardMedia sx={{ height: '10rem' }} image={imgUrl} title={title} />
        <CardContent>
          <Typography
            sx={{ maxHeight: '3em', overflow: 'hidden' }}
            gutterBottom
            variant="h6"
            component="div">
            {title}
          </Typography>
          <Typography
            sx={{ maxHeight: '1.5em', overflow: 'hidden' }}
            variant="body2"
            color="text.secondary">
            {channel}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );

  const modal = (
    <Modal open={modalOpen} onClose={handleClose}>
      <Paper className="modal">
        <div className="modal-header">
          <Typography variant="h5">{title}</Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <Chip style={{ margin: 8 }} label={formattedCategoryString} color="primary" />
        <div className="video-responsive">
          <iframe
            width="426.5"
            height="240"
            src={getEmbedURL(src)}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
        <Typography>{description}</Typography>
      </Paper>
    </Modal>
  );

  return (
    <>
      {card}
      {modal}
    </>
  );
};
