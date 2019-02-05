import React, { Component } from 'react';
import {
    fetchTotalPages
  } from '../actions/actioncreators';


class Genres extends Component {
   
componentWillMount() {
    fetchTotalPages(200);
}


render(){
    
   return (
       <div>
           {this.state.totalPages}
       </div>
   )
}
}
export default Genres;