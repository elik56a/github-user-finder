import React, { Component } from 'react';
import UserForm from './components/UserForm';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    username: null,
    repos: null,
    img: null,
    userUrl: null
  }

  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    if (user) {
      axios.get(`https://api.github.com/users/${user}`)
        .then((res) => {
          const username = res.data.login;
          const repos = res.data.public_repos;
          const img = res.data.avatar_url;
          const userUrl = res.data.html_url;
          this.setState({ username, repos, img, userUrl });
        })
    }
    else return;
  }
  render() {
    return (
      <div className="App">
        <header>Welcome To The GitHub User Finder</header>

        {this.state.username ?
          <div className="showUser">
            <h3>UserName: {this.state.username}</h3>
            <img src={this.state.img} alt="" width='150' height='150' /> <br />
            <a href={this.state.userUrl}>Github profile</a>
            <p>Number of repos: {this.state.repos}</p>
          </div>
          : <p>Please enter a username.</p>}

        <UserForm getUser={this.getUser} />

      </div>
    );
  }
}

export default App;
