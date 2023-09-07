// import { useState } from 'react'
import './App.css'
import ContactList from './component/ContactList';
import ContactRow from './component/ContactRow';

// const [contacts, setContacts] = useState(dummyContacts)

function App() {
  return (
    <>
    <div className="table-container">
      <ContactList />
    </div>

 
    </>
  );
}


export default App
