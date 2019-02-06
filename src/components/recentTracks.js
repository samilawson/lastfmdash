import React from 'react';
import _map from 'lodash/map';
import PropTypes from 'prop-types';
import RecentTrack from './recentTrack.js';

import {
    fetchRecentTracks
  } from '../actions/actioncreators';

class RecentTracks extends React.Component {
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
          {RecentTrackElement}
        </div>
        );
      }
    }
    RecentTracks.propTypes = {
        recentTracks: PropTypes.array
      };

export default RecentTracks;
