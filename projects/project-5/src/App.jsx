import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useState, useEffect } from 'react';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from './config/firebase';
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";
import AddandUpdate from "./components/AddandUpdateContact";
import useDisclouse from "./hooks/useDisclouse";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const {isOpen, onClose, onOpen } = useDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsList = contactsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContacts(contactsList);
      } catch (error) {
        console.error("Error fetching contacts:", error);
        // Optionally, set an error state to show a message to the user
      }
    };
    getContacts();
  }, []);
  const filterContacts = (e) =>{
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");
        onSnapshot(contactsRef, (snapshot)=>{
          const contactLists = snapshot.docs.map((doc) =>{
            return {
              id: doc.id,
              ...doc.data()
            };
          });
          const filteredContacts = contactLists.filter((contact) => {
            return contact.name.toLowerCase().includes(value.toLowerCase());
          });
          setContacts(filteredContacts);
          return contactLists;
        })
  }

  return (
    <>
      <div className="mx-auto max-w-[370px]">
        <Navbar />
        <div className="flex gap-1 p-2">
          <div className="flex relative items-center flex-grow">
            <FiSearch className="text-white text-3xl absolute ml-1" />
            <input 
              onChange={filterContacts}
              type="text"
              className="h-10 border bg-transparent border-white rounded-md text-white pl-9 flex-grow"
              placeholder="Search..."
            />
          </div>
          <AiFillPlusCircle onClick={onOpen} className="text-white text-5xl cursor-pointer" />
        </div>
        <div className="mt-2 gap-3 flex flex-col">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
        <h2 className="text-lg text-center"><AddandUpdate isOpen={isOpen} onClose={onClose}/></h2>
        <ToastContainer position="bottom-center" />
    </>
  );
}
