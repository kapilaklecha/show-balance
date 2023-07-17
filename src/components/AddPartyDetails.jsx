import React, { useState } from 'react';
import Button from '@mui/material/Button';

import TextFied from './TextFied';

const AddPartyDetails = ({ handleAddParty }) => {
  const [showInput, setShowInput] = useState(false);

  return (
    <div>
      {showInput ? (
        <TextFied/>
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
