import React from 'react';
import Sup from './Sup';

let SupList = ({ sups }) =>
  <div>
    {
      sups.map((sup, i) =>
        <Sup key={i} sup={sup} />
      )
    }
  </div>

export default SupList;