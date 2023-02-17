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
  var videoID = url.split('?v=')[1];
  videoID = videoID.split('&')[0];
  return (
    'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' +
    videoID +
    '&key=AIzaSyDbjBadrLuZCDW5ICb7DTxc1ouqgyPGkyU'
  );
}

export function capitalize(string) {
  const words = string.split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  return words.join(' ');
}
