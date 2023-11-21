import React from 'react';
import { Link } from 'react-router-dom';

function ItemsDetails() {
  return (
    <div>
      ItemsDetails
      <br />
      <br />
      <br />
      <Link to="item1">Item1</Link>
      <br />
      <Link to="item2">Item2</Link>
      <br />
      <Link to="item3">Item3</Link>
    </div>
  );
}

export default ItemsDetails;
