import axios from 'axios';

export const searchYouTubeAPI = (search) => {
  const options = {
    method: 'GET',
    url: 'https://youtube-search-and-download.p.rapidapi.com/search',
    params: {
      query: search,
      gl: 'BR',
      type: 'v',
      sort: 'r',
    },
    headers: {
      'X-RapidAPI-Key': 'd60316fd33mshdfafffb8d6d0080p1829dbjsn043b13b4d914',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    },
  };

  const result = axios.request(options).then((response) => response.data)
    .catch((error) => {
      console.error(error);
    });

  return result;
};

export const searchItunesAPI = (search) => {
  const options = {
    method: 'GET',
    url: 'https://itunes.apple.com/search',
    params: {
      term: search,
      entity: 'song',
    },
  };

  const result = axios.request(options).then((response) => response.data)
    .catch((error) => {
      console.error(error);
    });

  return result;
};
