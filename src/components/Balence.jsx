import React from 'react';
import { useSelector } from 'react-redux';
import "./Balance.css"
import CloseIcon from '@mui/icons-material/Close';

const Balance = ({ searchId, setList }) => {
  const data = useSelector((state) => state.partyBalance);
  const data2 = useSelector((state) => state.party);
  const selectedItem = data.find((item) => item.id === searchId);
  const selectedItem2 = data2.find((item) => item.id === searchId);

  return selectedItem ? (
    <div className='bal-body'>
      <div className='bal-child'>
      <span onClick={()=> setList(true)}><CloseIcon className='close'/></span>
      <div className='name'>{selectedItem.name}</div>
      <div className='address'>{selectedItem2.address}</div>
      <div className='balance'>Current Balance: {selectedItem.balance}</div> 
      </div>
      
      </div>
  ) : (
    <p>Item not found</p>
  );
};

export default Balance;


