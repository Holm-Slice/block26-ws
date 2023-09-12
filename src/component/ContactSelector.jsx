// import React from "react"; 
// import { useState, useEffect } from 'react'
// import ContactRow from "./ContactRow";


// export default function SelectedContact() { 
// const [selectedContactId, setSelectedContactId] = useState(null)
//   console.log("Contacts: ", contacts)
// useEffect(() => {
//     async function fetchContacts(){
// // this will be the selector component
//     }
//     fetchContacts()
// }, []);
//   return ( 
//         <table>
//           <thead>
//             <tr>
//               <th colSpan="3">Contact List</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Name</td>
//               <td>Email</td>
//               <td>Phone</td>
//             </tr>
//             {
//             contacts.map(contact => {
//             return <ContactSelector contact={contact} setSelectedContactId={setSelectedContactId} key={contact.id} />
//             })
//              }
//           </tbody>
//         </table>
//     );  
// }