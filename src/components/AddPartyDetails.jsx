import React, { useState } from 'react';
import Button from '@mui/material/Button';

import TextField from './SearchInput';
import SearchInput from './SearchInput';
const AddPartyDetails = ({searchValue, setSearchValue}) => {
  const [showInput, setShowInput] = useState(false);

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
