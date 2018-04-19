import React, { Component } from 'react';
import SupList from './SupList';
import { fetchSups } from './lib/api';

class AllSupsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sups: []
    }
  }

  async fetchData() {
    let newSups = await fetchSups();
    this.setState({
      sups: newSups
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    let { sups } = this.state;
    return (
      <div>
        <h1>All Sups</h1>
        <SupList sups={sups}/>
      </div>
    );
  }
}

export default AllSupsScreen;