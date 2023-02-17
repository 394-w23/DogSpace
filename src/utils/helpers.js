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
