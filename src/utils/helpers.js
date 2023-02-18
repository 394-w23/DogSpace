import { firebaseConfig } from './firebase';

const BASE_EMBED_URL = 'https://www.youtube.com/embed/';
//https://www.youtube.com/watch?v=1ln5lpH5Nf0
export function getEmbedURL(url) {
  var videoID = url.split('?v=')[1];
  videoID = videoID.split('&')[0];
  return BASE_EMBED_URL + videoID;
}

export function getYTImgUrl(url) {
  var videoID = url.split('?v=')[1];
  videoID = videoID.split('&')[0];
  return 'https://img.youtube.com/vi/' + videoID + '/mqdefault.jpg';
}

export function getYTDataUrl(url) {
  const { apiKey } = firebaseConfig;

  var videoID = url.split('?v=')[1];
  videoID = videoID.split('&')[0];
  return (
    'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + videoID + '&key=' + apiKey
  );
}

export function capitalize(string) {
  const words = string.split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  return words.join(' ');
}

// %20 = space char
export const fetchVids = (query) => {
  const formattedQuery = query.replace(' ', '%20');
  const { apiKey } = firebaseConfig;
  const maxResults = 4;
  const url = `https://content-youtube.googleapis.com/youtube/v3/search?maxResults=${maxResults}&q=${formattedQuery}&part=snippet&key=${apiKey}`;
  return fetch(url);
};
