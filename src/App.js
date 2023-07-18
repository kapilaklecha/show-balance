
import List from "./components/List"
import { useState } from "react"
import Balance from "./components/Balence"
import AddPartyDetails from "./components/AddPartyDetails"

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [searchId, setSearchId] = useState('')
  const [showList, setList] = useState(true)
  const [showInput, setShowInput] = useState(false);

  return (
    <>
    <div className="list-container">
    {showList && (
      <AddPartyDetails
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        showInput={showInput}
        setShowInput={setShowInput}
      />
    )}

    {showList && (
      <List searchTerm={searchValue} setSearchId={setSearchId} setList={setList}/>
    )}
</div>
    {!showList && (
      <Balance searchId={searchId} setList={setList}/>
    )}
  </>
   
     
  )
}

export default App
