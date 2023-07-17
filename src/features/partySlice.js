import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    aliasName: "Alpha Business",
    primaryContactId: "5b630bc5b4dbfe0014f68aba",
    gstBusinessType: "regular",
    address: "Gautam Tower, Near 'B' Cabin, off Gokhale Road, Thane",
    city: "Thane",
    state: "MH",
    pincode: "400601",
    country: "India",
    gstin: "26CVBPT2222T1Z5",
    name: "Alpha Business Test 1533217732",
    industry: "IT",
    pancard: "CVBPT2222T",
    id: "5b630bc5b4dbfe0014f68ab9"
  },
  {
    aliasName: "Jewl",
    primaryContactId: "5b654cdf881c1d0014f4f31f",
    gstBusinessType: "Regular GST Business",
    address: "Shop 123",
    city: "Mumbai",
    state: "MH",
    pincode: "400012",
    country: "India",
    gstin: "AJ122458493",
    name: "Jewel",
    industry: "",
    pancard: "",
    id: "5b654cdf881c1d0014f4f31e"
  },
  {
    "aliasName": "Aakash",
    "primaryContactId": "5b879d5dd1f79c0014a7353d",
    "gstBusinessType": "Regular GST Business",
    "address": "36,Swami Dayanand Marg, 36,Swami Dayanand Marg, SHRI GANGANAGAR [ RAJ ]-335001",
    "state": "RJ",
    "pincode": "335001",
    "country": "India",
    "name": "Aakash Ganga Cosmetics",
    "id": "5b879d09d1f79c0014a7276a"
  },
  {
    "aliasName": "AGRA-A TO Z",
    "primaryContactId": "5b879d14d1f79c0014a72cb9",
    "gstBusinessType": "Regular GST Business",
    "address": "16/18,Satya Narayan Market, 16/18,Satya Narayan Market, Luhar Gali, Agra",
    "state": "UP",
    "pincode": "0",
    "country": "India",
    "name": "AGRA-A TO Z IMMITATION JEWELLERS",
    "id": "5b879d09d1f79c0014a7276b"
  },
  {
    "aliasName": "Raj",
    "primaryContactId": "5b879d10d1f79c0014a72a38",
    "gstBusinessType": "Regular GST Business",
    "address": "Lohar Gali, Lohar Gali, 31/103,Vivek Complex, AGRA",
    "state": "UP",
    "pincode": "0",
    "country": "India",
    "name": "AGRA KUMAR & BROS",
    "id": "5b879d09d1f79c0014a7276c"
  }
];

const partySlice = createSlice({
  name: 'party',
  initialState,
  reducers: {},
});

export default partySlice.reducer;