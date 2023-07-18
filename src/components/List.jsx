import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';

const List = ({ searchTerm, setSearchId }) => {
  const data = useSelector((state) => state.party);

  const filteredParties = data.filter((item) =>
    item.aliasName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {searchTerm && (
        <ul>
          {filteredParties.map((party) => (
            <div onClick={() => setSearchId(party.id)} key={party.id}>
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
