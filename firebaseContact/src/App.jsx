import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import {FiSearch} from "react-icons/fi";
import {collection, getDocs, onSnapshot} from "firebase/firestore"
import {AiFillPlusCircle} from "react-icons/ai";
import {db} from "./config/firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactCard from './components/ContactCard';
import { Modal } from './components/Modal';
import AddandUpdateContact from './components/AddandUpdateContact';
import useDisclosure from './hooks/useDisclosure';
import NotFoundContact from './components/NotFoundContact';

const App = () => {

  const [contacts, setContact] = useState([]);

  const {isOpen, onClose, onOpen} = useDisclosure();

  useEffect(() => {
    const getContacts = async () => {

      try{
        const contactsRef = collection(db, "contacts");
        // const contactsSnapshot = await getDocs(contactsRef);
        onSnapshot(contactsRef,(snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id:doc.id,
              ...doc.data()
            }
          });
          setContact(contactLists);
          return contactLists;

        })
      }catch(error){console.log(error)}

    }

    getContacts();
  },[]);
  
  const filterContacts = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");
    // const contactsSnapshot = await getDocs(contactsRef);
    onSnapshot(contactsRef,(snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id:doc.id,
          ...doc.data()
        }
      });

      const filterContacts = contactLists.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase()))

      setContact(filterContacts);
      return filterContacts;

    })
  }

  return (
    <>

      <div className='max-w-[370px] mx-auto px-4'>
        <Navbar/>
      
        <div className='flex gap-2'>
          <div className='flex flex-grow relative items-center'>
            <FiSearch className='text-white ml-1 text-3xl absolute'/>
            <input onChange={filterContacts} type="text" className='border border-white bg-transparent rounded-md h-10 flex-grow text-white pl-9'></input>
          </div>
          <AiFillPlusCircle onClick={onOpen} className='text-5xl cursor-pointer text-white'/>
        </div>

        <div className='mt-4 gap-3 flex flex-col'>
          {contacts.length <= 0 ? <NotFoundContact/> :contacts.map((contact) => (
            <ContactCard key={contact.id} contact = {contact}/>
          ))}
        </div>
      </div>
      <AddandUpdateContact onClose={onClose} isOpen={isOpen}/>
        <ToastContainer
          position='bottom-center'
        />
    </>
  )
}

export default App