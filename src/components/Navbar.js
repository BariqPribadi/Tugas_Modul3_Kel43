import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav class="navbar fixed-bottom navbar-light bg-transparent">
        <ul className="navbar-nav align-items-center">
          <li>
            <Link to="/" className="nav-link">
              <button type="button" class="btn btn-outline-info">
                Menu Utama
              </button>
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <button type="button" class="btn btn-outline-info">
            Keranjang
          </button>
        </Link>
      </nav>
    );
  }
}
