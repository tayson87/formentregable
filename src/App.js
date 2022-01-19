import './App.css';
import axios from 'axios'; 
import { useState, useEffect }from 'react';
import UserList from './Components/UserList';
import UserForm from './Components/UserForm';


function App() {

const [ users, setUsers] = useState ([]);
const [userSelected, setUserSelected ] = useState ( null );


useEffect (() => {

       axios.get( "https://users-crud1.herokuapp.com/users")
               .then(res =>  setUsers (res.data)); 

}, []);

   const getUser = () => {
    axios.get( "https://users-crud1.herokuapp.com/users")
    .then(res =>  setUsers (res.data)); 
   }

       const selectUser  = user  => setUserSelected( user ); 
       const deselectUser =  () =>setUserSelected(null); 


       const deleteUser = id => {
         axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
               .then(() => getUser());
       }
     

  return (
    <div className="App">
      <UserForm getUser={getUser} userSelected={userSelected} deselectUser={deselectUser}  />
      <UserList users={users} selectUser={selectUser} deleteUser={deleteUser} />
      
      
    </div>
  );
}

export default App;
