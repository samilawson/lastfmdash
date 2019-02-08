import React from "react";
import axios from "axios";
import { constants } from "../constants/constants";
const { baseURL, apiKey, userName } = constants;

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
  }
  componentDidMount() {
    let getUserInfo = axios.create({
      baseURL,
      url: `?method=user.getinfo&user=${userName}&api_key=${apiKey}&format=json`
    });
    getUserInfo().then(response => {
      let data = response.data;
      console.log(data.user.playcount); //logs second, displays correct
      this.setState(state => ({
        user: data
      }));
    });
  }

  render() {
    console.log(this.state); //logs first and third, doesn't work of course on first but does on third
   return (<p>{this.state.user.length ? this.state.user.user.playcount : 'loading'}</p>)

   
  }
}

export default User;
