import axios from 'axios';

export const searchYouTubeAPI = (search) => {
  const options = {
    method: 'GET',
    url: 'https://youtube-search-and-download.p.rapidapi.com/search',
    params: {
      query: `${search} official audio`,
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

export const createNewUserAccount = (loginInfo) => {
  const options = {
    method: 'POST',
    url: 'https://zapa-music-app.pandlr.com/users/register',
    data: loginInfo,
  };

  const result = axios.request(options).then((response) => response.data);

  return result;
};

export const loginUser = (loginInfo) => {
  const options = {
    method: 'POST',
    url: 'https://zapa-music-app.pandlr.com/users/login',
    data: loginInfo,
  };

  const result = axios.request(options).then((response) => response.data);

  return result;
};

export const addSongToPlaylist = (songInfo) => {
  const userId = localStorage.getItem('reduxStore') ? JSON.parse(localStorage.getItem('reduxStore')).simpleLogin.id : null;
  const options = {
    method: 'POST',
    url: `https://zapa-music-app.pandlr.com/users/playlists/${userId}`,
    data: songInfo,
  };

  const result = axios.request(options).then((response) => response.data);

  return result;
};

export const getUserPlayListByUserByUserId = () => {
  const userId = localStorage.getItem('reduxStore') ? JSON.parse(localStorage.getItem('reduxStore')).simpleLogin.id : null;
  const options = {
    method: 'GET',
    url: `https://zapa-music-app.pandlr.com/users/playlists/${userId}`,
  };

  const result = axios.request(options).then((response) => response.data);

  return result;
};

export const createNewNote = (noteInfo) => {
  const userId = localStorage.getItem('reduxStore') ? JSON.parse(localStorage.getItem('reduxStore')).simpleLogin.id : null;
  const options = {
    method: 'POST',
    url: `https://zapa-music-app.pandlr.com/users/notes/${userId}`,
    data: noteInfo,
  };

  const result = axios.request(options).then((response) => response.data);

  return result;
};

export const getNotesByUserId = () => {
  const userId = localStorage.getItem('reduxStore') ? JSON.parse(localStorage.getItem('reduxStore')).simpleLogin.id : null;
  const options = {
    method: 'GET',
    url: `https://zapa-music-app.pandlr.com/users/notes/${userId}`,
  };

  const result = axios.request(options).then((response) => response.data);

  return result;
};

export const deleteNoteByNoteId = (noteId) => {
  const options = {
    method: 'DELETE',
    url: `https://zapa-music-app.pandlr.com/users/notes/${noteId}`,
  };

  const result = axios.request(options).then((response) => response.data);

  return result;
};
