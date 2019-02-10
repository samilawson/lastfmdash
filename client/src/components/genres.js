import React, { Component } from 'react';
import axios from 'axios'
import { constants } from "../constants/constants";
const { baseURL, apiKey, userName, limit } = constants;


class Genres extends Component {
   constructor(props){
       super(props)
       this.state = {
           genres: null
       }
   }
componentDidMount() {
    let genres = []

    let getPages = axios.create({
        baseURL,
        url: `?method=user.getrecenttracks&user=${userName}&limit=${limit}&api_key=${apiKey}&format=json`
    });
    getPages()
        .then((response) => {
            console.log(response.data.recenttracks['@attr'].totalPages)
            let totalPages = response.data.recenttracks['@attr'].totalPages
            let tracks = [];

            for(let i = 1; i <= totalPages; i++){
                let getRecentTracks = axios.create({
                    baseURL,
                    url: `?method=user.getrecenttracks&user=${userName}&limit=${limit}&api_key=${apiKey}&page=${i}&format=json`
                  });
                  getRecentTracks()
                  .then((response) => {
                     tracks.push(response.data.recenttracks.track)
                  });
            }
            tracks.forEach(el => {
                let getTopTags = axios.create({
                    baseURL,
                    url: `?method=track.gettoptags&user=${userName}&api_key=${apiKey}&artist=${el.artist['#text']}&track=${el.name}&format=json`
                })
                getTopTags()
                .then((response) => {
                    genres.push(response.data.toptags.tag[0].name)                        
                    })
                })

            let frequency = []
            for(let i = 0; i < genres.length; i++) {
                frequency[genres[i]] = (frequency[genres[i]] || 0) + 1
            }
            this.setState({
                genres: frequency
            })
            })
            
        }



render(){
    
   if(this.state.genres){
       return <p>{this.state.genres[0]}</p>
   } else {
       return <p>No data</p>
   }
   

}
}

export default Genres;