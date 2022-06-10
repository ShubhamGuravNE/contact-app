import React from 'react';
import './style.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';




function App() {

  const Contacts = [
    {
      
    }
  ]
  
  return (
    <div>
      <Header/>
      <AddContact />
      {/* <ContactList /> */}
    </div>
  );
}

export default App;
