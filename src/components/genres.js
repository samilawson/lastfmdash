import React, { Component } from 'react';
import {
    fetchTotalPages
  } from '../actions/actioncreators';
  import NavBar from './navbar';


class Genres extends Component {
   
componentWillMount() {
    fetchTotalPages(200);
}


render(){
    
   return (
       <div>
           <NavBar />
           <div>Content</div>
           {this.state.totalPages}
       </div>
   )
}
}
export default Genres;