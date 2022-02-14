import { getContacts, addContact, deleteContact } from "../api/requests";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
  "contacts / getContactsList",
  async (_, { rejectWithValue }) => {
    try {
      const result = await getContacts();
      return result.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const addNewContact = createAsyncThunk(
  "contacts / addNewContact",
  async (contactData, { rejectWithValue }) => {
    try {
      const result = await addContact(contactData);
      return result.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const removeContact = createAsyncThunk(
  "contacts / removeContact",
  async (id, { rejectWithValue }) => {
    try {
      const result = await deleteContact(id);
      return result.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
