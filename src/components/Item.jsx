
import React from 'react';

const Item = ({ aliasName, name, address, onItemClick }) => {
  const handleClick = () => {
    onItemClick(); // Call the onItemClick function passed from the parent component
  };

  return (
    <li onClick={handleClick}>
      <div>
        <strong>Alias Name:</strong> {aliasName}
      </div>
      <div>
        <strong>Name:</strong> {name}
      </div>
      <div>
        <strong>Address:</strong> {address}
      </div>
    </li>
  );
};

export default Item;
