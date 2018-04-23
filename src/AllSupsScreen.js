import React, { Component } from 'react';
import SupList from './SupList';
import { fetchSups } from './lib/api';
import { connect } from 'react-redux';

let AllSupsScreenDumb = ({ sups }) =>
  <div>
    <h1>All Sups</h1>
    <SupList sups={sups}/>
  </div>

class FetchSups extends Component {
  constructor(props) {
    super(props);
  }

  async fetchData() {
    let newSups = await fetchSups();
    this.props.dispatch({ type: 'UPDATE_SUPS', sups: newSups });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return <AllSupsScreenDumb {...this.props}/>
  }
}

let AllSupsScreen = connect(
  ({ sups }) => ({ sups }),
  (dispatch) => ({ dispatch })
)(FetchSups);

export default AllSupsScreen;