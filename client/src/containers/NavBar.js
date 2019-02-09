import React from "react";
import { connect } from "react-redux";
import { logout } from "../store/actions";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
const NavBar = ({ auth, logout }) => (
  <div>
    <Navbar color="dark" light expand="md">
      <NavbarBrand href="/">lastfmdash</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/register">Register</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/login">Login</NavLink>
        </NavItem>
      </Nav>
    </Navbar>

    {auth.isAuthenticated && <p>Logged in as {auth.user.username}</p>}
  </div>
);

export default connect(
  store => ({ auth: store.auth }),
  { logout }
)(NavBar);
