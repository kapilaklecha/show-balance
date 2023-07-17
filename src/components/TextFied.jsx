import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import List from './List';
import Balance from './Balence';

const TextFieldComponent = () => {
  const [searchValue, setSearchValue] = useState('');
  const data = useSelector((state) => state.party);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleItemClick = (itemId) => {
    setSearchValue(itemId);
  };

  return (
    <div>
      <div>
        <span>
          <AccountCircleIcon />
        </span>
        <span>
          <TextField
            id="standard-basic"
            label="Search by name"
            variant="standard"
            value={searchValue}
            onChange={handleSearchChange}
            list="suggestions"
          />
          <datalist id="suggestions">
            {filteredData.map((item) => (
              <option value={item.name} key={item.id} />
            ))}
          </datalist>
        </span>
      </div>
      {searchValue && (
        <>
          <List filteredData={filteredData} onItemClick={handleItemClick} />
          <Balance itemId={searchValue} />
        </>
      )}
    </div>
  );
};

export default TextFieldComponent;
