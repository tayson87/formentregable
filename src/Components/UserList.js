import React from 'react';
import axios from 'axios'; 

const UserList = ({ users, selectUser, deleteUser }) => {
    return (
        <ul className='user-list'>
        {
            users.map(user => (
                <li className='user-item' key = {user.id}>
                     <strong className='name'><b>{user.first_name}  {user.last_name}</b></strong>
                      <ul>
                             <li className='email'><b>Email :  {user.email}</b></li>
                             <li className='birthday'><b>Birthday:  {user.birthday}</b> </li>
                             <div className='btn_list'>
                                 <div className='edi'>
                             <i class="fas fa-pencil-alt"onClick={() => selectUser (user)}> </i>
                             </div>
                             <div className='deletes'>
                             <i class="fas fa-trash-alt"onClick={() => deleteUser(user.id)}> </i> 
                             </div>
                             </div>
                          
                      </ul>
                     </li>

             ) )
        }

             
        </ul>
    );
};

export default UserList;