import React, { Component } from 'react';
import SupList from './SupList';
import { fetchSups } from './lib/api';
import { filterBy } from './lib/search';

class UserSupsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sups: []
    }
  }

  async fetchData() {
    let { userId } = this.props.match.params;
    let newSups = await fetchSups();
    let filteredSups = filterBy({ userId })(newSups);
    this.setState({
      sups: filteredSups
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    let prevUserId = prevProps.match.params.userId;
    let currUserId = this.props.match.params.userId;
    if (prevUserId !== currUserId) {
      this.setState({ sups: [] });
      this.fetchData();
    }
  }

  render() {
    let { sups } = this.state;
    let { userId } = this.props.match.params;
    return (
      <div>
        <h1>User {userId}'s Sups</h1>
        <SupList sups={sups}/>
      </div>
    );
  }
}

export default UserSupsScreen;