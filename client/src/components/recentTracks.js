import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'

import { getTracks } from '../store/actions'

class RecentTracks extends Component {
  
    componentDidMount() {
      const { getTracks } = this.props
        getTracks();
        
      }
      render() {

        const {
          auth, getTracks
        } = this.props;
    
        const tracks = this.props.tracks.map(track =>
          <li>{track.title}</li>)
          
        return (
        <Fragment>
          {auth.isAuthenticated && (
            <div>
              <button onClick={getTracks}>Get RecentTracks</button>
            </div>
          )}
          <ul>{tracks}</ul>
        </Fragment>
        );
      }
    }
    

export default connect(
  store => ({
    auth: store.auth,
    tracks: store.tracks
  }),
  { getTracks}
)(RecentTracks)
