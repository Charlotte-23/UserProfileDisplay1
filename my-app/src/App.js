import React, { Component } from 'react'
import axios from 'axios';
import './App.css';

export class App extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    if (this.state.persons.length == 0) {
      return (
        <div>
          <div class="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
          </div>
        </div>
      );
    }

    return (
      <div className="container">
        {this.state.persons.map((user) => (
          <div className="userBlock">
            <div className="row">
              <div className="col-auto">
                <img
                  src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
                  alt="Avatar picture"
                />
              </div>
              <ul className="col">
                <li>
                  <h1 className="name">{user.name}</h1>
                </li>
                <li>
                  <strong>Email: </strong> {user.email}
                </li>
                <li>
                  <strong>Phone: </strong> {user.phone}
                </li>
                <li>
                  <strong>Address: </strong>
                  {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
                </li>
                <li>
                  <strong>Website: </strong> {user.website}
                </li>
                <li>
                  <strong>Company Name: </strong> {user.company.name}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default App