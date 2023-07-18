import SearchInput from "./components/SearchInput"
import List from "./components/List"
import { useState } from "react"
import Balance from "./components/Balence"
import AddPartyDetails from "./components/AddPartyDetails"

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [searchId, setSearchId] = useState('')
  const [showList, setList] = useState(true)

  return (
    <>
    <AddPartyDetails
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    />

      <List searchTerm={searchValue} setSearchId={setSearchId} />
      <Balance searchId={searchId}/>
    </>
     
  )
}

export default App
