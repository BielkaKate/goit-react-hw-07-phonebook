import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts, removeContact } from "../../redux/asyncThunks";
// import { deleteContact } from "../../redux/contacts";

import s from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  const { items, filter, loader } = useSelector((state) => state.contacts);

  const contacts = items.filter((el) =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );

  return loader ? (
    <p>Loading..</p>
  ) : (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.listItem} key={id}>
          <span>
            {name}: {number}
          </span>
          <button
            className={s.deleteButton}
            onClick={() => dispatch(removeContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
