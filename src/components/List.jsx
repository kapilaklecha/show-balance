
import React from 'react';
import Item from './Item'; // Make sure to provide the correct path to the Item component

const List = ({ filteredData, onItemClick }) => {
  const handleItemClick = (itemId) => {
    onItemClick(itemId);
  };

  return (
    <ul>
      {filteredData.map((item) => (
        <Item
          key={item.id}
          aliasName={item.aliasName}
          name={item.name}
          address={item.address}
          onItemClick={() => handleItemClick(item.id)}
        />
      ))}
    </ul>
  );
};

export default List;

