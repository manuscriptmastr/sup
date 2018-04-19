import React from 'react';
import moment from 'moment';

let Sup = ({ sup: { author, body, time } }) =>
  <div>
    {body} - {author} @ {moment(time).fromNow()}
  </div>

export default Sup;