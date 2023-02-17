import { getEmbedURL, getYTImgUrl } from '../utils/helpers';
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
import { useState } from 'react';

export const ContentCard = (props) => {
  const { type, src, category } = props;

  const [modalOpen, setModalOpen] = useState(false);

  const handleClose = () => {
    setModalOpen(false);
  };

  const formattedCategoryString = category.charAt(0).toUpperCase() + category.slice(1);

  let title;
  let imgUrl;
  let description;

  switch (type) {
    case 'video':
      imgUrl = getYTImgUrl(src);
      title = 'Youtube Video';
      description = 'Pulled video description';
      break;
    case 'article':
      imgUrl =
        'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1397192575/092b69a23aac314913f8227500830d42.png';
      title = 'PetMd Article';
      description = 'Pulled article summary maybe?';
      break;
  }

  const card = (
    <Card sx={{ minWidth: '15rem', maxWidth: '15rem' }}>
      <CardActionArea onClick={() => setModalOpen(true)}>
        <CardMedia sx={{ height: '10rem' }} image={imgUrl} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Short description
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
