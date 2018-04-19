import React from 'react';
import Sup from './Sup';

let SupList = ({ sups }) =>
  <div>
    {
      !sups.length ?
      <h1>Loading...</h1>
      :
      sups.map((sup, i) =>
        <Sup key={i} sup={sup} />
      )
    }
  </div>

export default SupList;