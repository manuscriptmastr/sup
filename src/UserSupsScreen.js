import React, { Component } from 'react';
import SupList from './SupList';
import { connect } from 'react-redux';
import { fetchSups } from './lib/api';
import { filterBy } from './lib/search';
import { updateSups } from './lib/actions/sups';

let UserSupsScreenDumb = ({ sups, userId }) =>
  <div>
    <h1>User {userId}'s Sups</h1>
    <SupList sups={sups}/>
  </div>

class FetchSups extends Component {

  async fetchData() {
    let { userId } = this.props.match.params;
    let newSups = await fetchSups();
    let filteredSups = filterBy({ userId })(newSups);
    this.props.dispatch(updateSups(filteredSups));
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate() {
    this.fetchData();
  }

  render() {
    let { userId } = this.props.match.params;
    return <UserSupsScreenDumb {...this.props} userId={userId}/>
  }
}

let UserSupsScreen = connect(
  ({ sups }) => ({ sups }),
  (dispatch) => ({ dispatch })
)(FetchSups);

export default UserSupsScreen;