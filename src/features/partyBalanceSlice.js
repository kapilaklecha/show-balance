import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    balance: "11000.50",
    isDebit: "true",
    name: "Alpha Business Test 1533217732",
    id: "5b630bc5b4dbfe0014f68ab9"
  },
  {
    balance: "15000",
    isDebit: "true",
    name: "Jewel",
    id: "5b654cdf881c1d0014f4f31e"
  },
  {
    "balance": "20000",
    "isDebit": "false",
    "name": "Aakash Ganga Cosmetics",
    "id": "5b879d09d1f79c0014a7276a"
  },
  {
    "balance": "40000.00",
    "isDebit": "true",
    "name": "AGRA-A TO Z IMMITATION JEWELLERS",
    "id": "5b879d09d1f79c0014a7276b"
  },
  {
    "balance": "10000.50",
    "isDebit": "false",
    "name": "AGRA KUMAR & BROS",
    "id": "5b879d09d1f79c0014a7276c"
  }
];

const partyBalanceSlice = createSlice({
  name: 'partyBalace',
  initialState,
  reducers: {},
});

export default partyBalanceSlice.reducer;
