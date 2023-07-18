
import React from 'react';

const Item = ({ aliasName, name, address }) => {
 

  return (
    <div>
      <div>
         {aliasName}
      </div>
      <div>
        {name}
      </div>
      <div>
        {address}
      </div>
      </div>
  );
};

export default Item;
