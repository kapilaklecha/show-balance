import React, { useState } from 'react';
import Button from '@mui/material/Button';
import SearchInput from './SearchInput';
const AddPartyDetails = ({searchValue, setSearchValue, showInput,setShowInput }) => {
  

  return (
    <div>
      {showInput ? (
        <SearchInput searchValue={searchValue} setSearchValue={setSearchValue}/>
      ) : (
        <Button
        variant="text"
        color="primary"
        onClick={() => setShowInput(true)}
      >
        +add Party Details
      </Button>) 
      }
    </div>
  );
};

export default AddPartyDetails;
