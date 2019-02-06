import api from '../../services/api'
import {addError, removeError} from './error'


export const setTracks = tracks => ({
    type: SET_TRACKS,
    tracks
})

export const getTracks = () => {
    
}