import React, { Component } from 'react';
import './App.css';
// import RobotsList from './Components/RobotsList';
import FriendsCard from './Components/FriendsCard';
import SearchFriend from './Components/SearchFriend';

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends:[],
      search: ''
    }
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=40').then(response => response.json())
      .then(robotsdata => {
        this.setState({friends: robotsdata.results});
      });
  }

  onSearchChange= (event) => {
    this.setState({search: event.target.value});
    console.log(this.state.search)
  }

  render() {
// we already should know how filter works .. the rerurn statement takes a condition and if its true
// it returns the array or object. So we just strip to lowercase so whatever the user types in is turned to lowercase.
    const filteredFriends = this.state.friends.filter((robo) => {
      return robo.name.first.toLowerCase().includes(this.state.search.toLowerCase());
    })

    const cardArray = filteredFriends.map((user) => {
      return <FriendsCard key={user.cell} user={user}/>
    })
    return (
      <div className="tc">
        <h1>MY JSON FRIENDS</h1>
        <SearchFriend searchChange={this.onSearchChange}/>
        <div>
          {cardArray}
        </div>
      </div>
    );
  }
}

export default App;
