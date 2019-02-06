import React, { Component } from 'react';
import {
    fetchTotalPages
  } from '../actions/actioncreators';
  import NavBar from '../containers/NavBar';


class Genres extends Component {
   
componentWillMount() {
    fetchTotalPages(200);
}


render(){
    
   return (
       <div>
           <NavBar />
           <div>Content</div>
           
       </div>
   )
}
}
export default Genres;