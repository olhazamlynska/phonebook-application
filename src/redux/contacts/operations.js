import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// GET /contacts

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// POST ​/contacts
//  { "name": "Jacob Mercer", "number": "761-23-96"}

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', data);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// DELETE /contacts​/{contactId}
//
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// PATCH ​/contacts​/{contactId}
export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ contactId, values }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${contactId}`, values);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
