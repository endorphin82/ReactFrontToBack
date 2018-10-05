import axios from 'axios';

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  GET_CONTACTS} from "./types";

export const getContacts = () => async dispatch => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');

  dispatch ({
    type: GET_CONTACTS,
    payload: res.data
  });
};

export const deleteContact = id => {
  return {
    type: DELETE_CONTACT,
    payload: id
  };
};

export const addContact = contact => {
  return {
    type: ADD_CONTACT,
    payload: contact
  };
};

