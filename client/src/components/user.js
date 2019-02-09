import React from "react";
import axios from "axios";
import { constants } from "../constants/constants";
import styled from "styled-components";
const { baseURL, apiKey, userName } = constants;

const UserLink = styled.a`
  display: inline-block;
  margin: 5px auto;
  background-color: rgba(255, 255, 255, 1);
`;

const UserInfo = styled.ul`
  margin: 0 auto;
  padding: 1rem 0.7rem 0.7rem 0;
  text-align: right;
  color: darkGrey;
`;

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
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
      this.setState({
        user: data.user
      });
    });
  }

  render() {
    console.log(this.state); //logs first and third, doesn't work of course on first but does on third
    if(this.state.user){
      return (<UserLink
      href={this.state.user.url} target="_blank">
      <div>
        <img
          src={this.state.user.image['3']['#text']}
          alt={this.state.user.name} />
      </div>
      <UserInfo>
        <li>{this.state.user.name}</li>
        <li>{this.state.user.playcount}</li>
      </UserInfo>
      </UserLink> )
    } else {
      return <p>No data</p>
    }
   
  }
}

export default User;
