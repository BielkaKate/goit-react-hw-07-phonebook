import { http } from "./http-common";

export const getContacts = () => {
  return http.get("/contacts");
};

export const addContact = (data) => {
  return http.post("/contacts", data);
};

export const deleteContact = (id) => {
  return http.delete(`/contacts/${id}`);
};
