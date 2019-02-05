import dispatcher from '../dispatcher/dispatcher';
import actionTypes from '../constants/actiontypes';

import axios from 'axios';
import {
  apiConstants
} from '../constants/apiConstants';
const {
  baseURL,
  apiKey,
  userName
} = apiConstants;

export function fetchUser() {
    let getUserInfo = axios.create({
      baseURL,
      url: `?format=json&method=user.getinfo&user=${userName}&api_key=${apiKey}`
    });
    getUserInfo()
    .then((response) => {
      dispatcher.dispatch({
        type: actionTypes.userRetrieved,
        user: response.data.user
      });
    });
  }
  
  export function fetchRecentTracks(limit) {
    let getRecentTracks = axios.create({
      baseURL,
      url: `?method=user.getrecenttracks&user=${userName}&limit=${limit}&api_key=${apiKey}&format=json`
    });
    getRecentTracks()
    .then((response) => {
      dispatcher.dispatch({
        type: actionTypes.recentTracksRetreived,
        recentTracks: response.data.recenttracks.track
      });
    });
  }

export function fetchTotalPages(limit) {
    let getPages = axios.create({
        baseURL,
        url: `?method=user.getrecenttracks&user=${userName}&limit=${limit}&api_key=${apiKey}&format=json`
    });
    getPages()
        .then((response) => {
            console.log(response.data.recenttracks['@attr'].totalPages)
            this.state = {totalPages: response.data.recenttracks['@attr'].totalPages}
        })
    
    }    
