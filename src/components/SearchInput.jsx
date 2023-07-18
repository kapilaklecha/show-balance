
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const SearchInput = ({ searchValue, setSearchValue }) => {

 

  return (
    
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
            onChange={(e) => setSearchValue(e.target.value)}
            list="suggestions"
          />
          </span>
    </div>
  );
};

export default SearchInput;
