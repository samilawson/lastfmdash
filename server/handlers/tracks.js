import axios from 'axios';
import {
  constants
} from '../constants/constants';
const {
    baseURL,
    apiKey,
    userName, 
    limit
  } = constants;

exports.getTracks = async(req,res,next) => {
    try{
        let getRecentTracks = axios.create({
            baseURL,
            url: `?method=user.getrecenttracks&user=${userName}&limit=${limit}&api_key=${apiKey}&format=json`
          });
          getRecentTracks()
          .then((response) => {
            this.setState({tracks: response.data.recentTracks})
            console.log(response.data.recenttracks.track[0].artist['#text'])
          });
    } catch (err) {
        err.status = 400
        next(err)
    }
}