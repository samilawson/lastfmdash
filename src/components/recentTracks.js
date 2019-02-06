import React from 'react';
import _map from 'lodash/map';
import _isEqual from 'lodash/isEqual';
import PropTypes from 'prop-types';
import RecentTrack from './recentTrack';
import NavBar from "./navbar";
import {
    fetchRecentTracks
  } from '../actions/actioncreators';

class RecentTracks extends React.Component {
  shouldComponentUpdate(nextProps){
    return !_isEqual(nextProps.recentTracks,this.props.recentTracks);
  }
    componentWillMount() {
        fetchRecentTracks();
        
      }
      render() {

        const {
          recentTracks
        } = this.props;
    
        const RecentTrackElement = _map(recentTracks, (recentTrack, i) => (
          <RecentTrack
            key={i}
            recentTrack={recentTrack} />
        ));
    
        return (
        <div>
          <NavBar />
          {RecentTrackElement}
        </div>
        );
      }
    }
    RecentTracks.propTypes = {
        recentTracks: PropTypes.array
      };

export default RecentTracks;
