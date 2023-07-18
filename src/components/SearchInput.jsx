
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./SearchInput.css"

const SearchInput = ({ searchValue, setSearchValue }) => {

 

  return (
    
      <div className='search-body'>
        <span>
          <AccountCircleIcon className='icon'/>
        </span>
        <span>
          <TextField
            id="standard-basic"
            label="Search by name"
            variant="standard"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            list="suggestions"
          />
          </span>
    </div>
  );
};

export default SearchInput;
