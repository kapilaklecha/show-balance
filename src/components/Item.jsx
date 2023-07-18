
import React from 'react';
import "./Item.css"

const Item = ({ aliasName, name, address }) => {
 

  return (
    <div className='item-body'>
    
      <div className='item-child'>
      <div>
         <span className='alias-name'>{aliasName}</span><span className='real-name'>({name})</span>
      </div>
      <div className='address'>
        {address}
      </div>
      </div>
      </div>
  );
};

export default Item;
