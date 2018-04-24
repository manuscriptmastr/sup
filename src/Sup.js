import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { removeSup } from './lib/actions/sups';

let SupDumb = ({ sup , remove }) => {
  let { author, body, time } = sup;
  return (
    <div>
      {body} - {author} @ {moment(time).fromNow()}
      <button onClick={() => remove(sup)} >Delete</button>
    </div>
  );
}

let Sup = connect(
  null,
  (dispatch) => ({
    remove: (sup) => dispatch(removeSup(sup))
  })
)(SupDumb);

export default Sup;