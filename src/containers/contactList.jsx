import React, { useEffect, useState } from "react";
import { ContactClass } from "../../src/models/contact.class";
import ContactComponent from "./contact";
import ContactForm from "./contactForm";

const ContactList = (props) => {
  const defaultContact1 = new ContactClass("Gio", "+53551198", true);
  const defaultContact2 = new ContactClass("Lu", "+535518965", false);
  const defaultContact3 = new ContactClass("Clau", "+53551543", true);

  const [contacts, setContacts] = useState([
    defaultContact1,
    defaultContact2,
    defaultContact3,
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Contact state has been modified");
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      console.log("Contact Component is going to unmoint ...!!!");
    };
  }, [contacts]);

  function onContact(contact) {
    const index = contacts.indexOf(contact);
    const tempContact = [...contacts];
    tempContact[index].onLine=!tempContact[index].onLine
    setContacts(tempContact);
  }

  function deleteContact(contact) {
    const index = contacts.indexOf(contact);
    const tempContact = [...contacts];
    tempContact.splice(index, 1);
    setContacts(tempContact);
  }

  function addContact(contact) {
    const tempContact = [...contacts];
    tempContact.push(contact);
    setContacts(tempContact);
  }

  const Table = () => {
    return (
      <table>
        <thead>
          <tr>
            <th scope="col" style={{"color": 'black'}}>name</th>
            <th scope="col" style={{"color": 'black'}}>Phone</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => {
            return (
              <ContactComponent
                key={index}
                on={onContact}
                remove={deleteContact}
                contact={contact}
              ></ContactComponent>
            );
          })}
        </tbody>
      </table>
    );
  };

  let contactsTable;
  if (contacts.length > 0) {
    contactsTable = <Table></Table>;
  } else {
    contactsTable = (
      <div>
        <h3> There are no Contact to show</h3>
        <h4>Please, add one</h4>
      </div>
    );
  }

  const loadingStyle = {
    color: "grey",
    fontSize: "30px",
    fontWeight: "bold",
  };
  return (
    <div>
      <div className="col-12">
        <div className="card">
          <div className="card-header p-3">
            <h5 style={{color: 'red'}}>Contacts:</h5>
          </div>
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          >
            {loading ? (
              <p style={loadingStyle}>Loading Contacts...</p>
            ) : (
              contactsTable
            )}
          </div>
        </div>
      </div>
      <ContactForm add={addContact} length={contacts.length}></ContactForm>
    </div>
  );
};

export default ContactList;
