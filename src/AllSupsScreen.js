import React, { Component } from 'react';
import SupList from './SupList';
import { fetchSups } from './lib/api';
import { connect } from 'react-redux';
import { updateSups } from './lib/actions/sups';

let AllSupsScreenDumb = ({ sups }) =>
  <div>
    <h1>All Sups</h1>
    <SupList sups={sups}/>
  </div>

class FetchSups extends Component {

  async fetchData() {
    let newSups = await fetchSups();
    this.props.dispatch(updateSups(newSups));
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