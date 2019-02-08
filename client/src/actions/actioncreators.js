
import axios from 'axios';
import {
  apiConstants
} from '../../../server/constants/constants';
const {
  baseURL,
  apiKey,
  userName
} = apiConstants;

export function fetchUser() {
    let getUserInfo = axios.create({
      baseURL,
      url: `?method=user.getinfo&user=${userName}&api_key=${apiKey}&format=json`
    });
    getUserInfo()
    .then((response) => {
      if (response.status === 200 && response != null) {
        var data = response.data
        console.log(data.user.playcount)
        return data
      } else {
        throw new Error('Empty data')
      }      
    });
  }
  /*
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
      console.log(response.data.recenttracks.track[0].artist['#text'])
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
           // this.state = {totalPages: response.data.recenttracks['@attr'].totalPages}
        })
    
    }    
*/