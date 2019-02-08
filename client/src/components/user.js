import React from "react";
import styled from "styled-components";
import moment from "moment";
import { fetchUser } from "../actions/actioncreators";

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
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }
  componentWillMount() {
    fetchUser().then(response => {
      console.log('Data fetched', response)
      this.setState({
        data: response
      })
    })
  }

  render() {
    

    const registeredElement = moment
      .unix(this.state.data.user.registered["#text"])
      .format("MM/DD/YYYY");

    return (
      <UserLink href={this.state.data.user.url} target="_blank">
        <div>
          <img src={this.state.data.user.image["3"]["#text"]} alt={this.state.data.user.name} />
        </div>
        <UserInfo>
          <li>{this.state.data.user.name}</li>
          <li>{this.state.data.user.playcount}</li>
          <li>{registeredElement}</li>
        </UserInfo>
      </UserLink>
    );
  }
}


export default User;
