import React from 'react';
import { useSelector } from 'react-redux';

const Balance = ({ itemId }) => {
  const data = useSelector((state) => state.partyBalance);
  const selectedItem = data.find((item) => item.id === itemId);

  return selectedItem ? (
    <p>Balance: {selectedItem.balance}</p>
  ) : (
    <p>Item not found</p>
  );
};

export default Balance;


