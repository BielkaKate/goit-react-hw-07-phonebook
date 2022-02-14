import { createSlice } from "@reduxjs/toolkit";

import { fetchContacts, addNewContact, removeContact } from "./asyncThunks";

const startContacts = JSON.parse(localStorage.getItem("contacts")) ?? [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: startContacts,
    filter: "",
    loader: false,
  },
  reducers: {
    // addContact: ({ items }, { payload }) => {
    //   localStorage.setItem("contacts", JSON.stringify([...items, payload]));
    //   items.push(payload);
    // },
    // deleteContact: ({ items }, { payload }) => {
    //   const newItems = items.filter((el) => el.id !== payload);
    //   localStorage.setItem("contacts", JSON.stringify(newItems));
    //   items = newItems;
    // },
    changeFilter: (state, { payload }) => {
      return {
        ...state,
        filter: payload,
      };
    },
  },
  extraReducers: {
    [fetchContacts.pending]: (state, action) => {
      state.loader = true;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.loader = false;
    },
    [fetchContacts.rejected]: (state, { payload }) => payload,

    [addNewContact.fulfilled]: ({ items }, { payload }) => {
      items.push(payload);
    },

    [addNewContact.rejected]: (state, { payload }) => payload,

    [removeContact.pending]: (state, action) => {
      state.loader = true;
    },

    [removeContact.fulfilled]: (state, { payload }) => {
      const newItems = state.items.filter((el) => el.id !== payload.id);
      return {
        ...state,
        items: newItems,
        loader: false,
      };
    },

    [removeContact.rejected]: (state, { payload }) => payload,
  },
});

const contactsReducer = contactsSlice.reducer;

export const { addContact, deleteContact, changeFilter } =
  contactsSlice.actions;

export default contactsReducer;
