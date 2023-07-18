import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';
import "./List.css"

const List = ({ searchTerm, setSearchId, setList }) => {
  const data = useSelector((state) => state.party);

  const filteredParties = data.filter((item) =>
    item.aliasName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='list-parent'>
      {searchTerm && (
        <ul>
          {filteredParties.map((party) => (
             <div onClick={() => {
              setSearchId(party.id);
              setList(false);
            }} key={party.id}  className='list-item'>
              <Item
                aliasName={party.aliasName}
                name={party.name}
                address={party.address}
              />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;
