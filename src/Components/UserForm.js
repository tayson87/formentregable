import React, { useEffect, useState } from 'react';
import axios from 'axios'; 

const UserForm = ({getUser, userSelected, deselectUser}) => {

    const [ first_name, setFirst_name] = useState ("");
    const [last_name, setLast_name] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (userSelected ){
            setFirst_name(userSelected.first_name);
            setLast_name(userSelected.last_name);
            setEmail(userSelected.email);
            setBirthday(userSelected.birthday);
            setPassword(userSelected.password)                      
        } else{
            reset();
        }

    }, [userSelected])

    const submit = e => {
        e.preventDefault();
        const user = {
            first_name,
            last_name,
            email,
            birthday,
            password
        }

        if (userSelected){
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/` , user)
                   .then(() => getUser ());
                   deselectUser();
        } else {
            axios.post( "https://users-crud1.herokuapp.com/users/" , user)
            .then ( () =>  getUser () );
                     
        }
         reset();
       
    }

           const reset = () => {
               setFirst_name("");
               setLast_name("");
               setEmail("");
               setBirthday("");
               setPassword("")
           }



    return (
        <form className='user-form' onSubmit={submit}>

              <div className='input-container'>
                  <label className='first' htmlFor='first_name'><b>First Name</b></label>
                  <input  className='first_name' placeholder='First Name '
                   type='text'
                    id='first_name'
                    value= {first_name}
                    onChange={e => setFirst_name(e.target.value)}  > 
                                   
                 </input>
              </div>

             <div className='input-container'>
                  <label className='last' htmlFor='last_name'><b>Last Name</b></label>
                  <input className='last_name' placeholder='Last Name '
                   type='text' 
                   id='last_name'
                   value={last_name}
                   onChange={e => setLast_name(e.target.value)} >
                   </input>
             </div>

             <div className='input-container'>
                  <label className='ema' htmlFor=''><b>Email</b></label>
                  <input className='email1' placeholder='Email '
                  type='text' 
                  id='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)} >
                  </input>
             </div>

             <div className='input-container'>
                  <label className='bir' htmlFor='birthday'><b>Birthday</b></label>
                  <input className='birthday1' placeholder='Birthday '
                   type='date'
                    id='birthday'
                    value={birthday}
                    onChange={e => setBirthday(e.target.value)}>                 
                    </input>
             </div>

             <div className='input-container'>
                  <label className='pass' htmlFor='password'><b>Password</b></label>
                  <input className='password' placeholder='Password '
                   type='password'
                    id='password'
                    value={password}
                    onChange={e=> setPassword(e.target.value)}>                  
                    </input>
             </div>
             <div className='buttons'>

                  <button className='submit-btn'>Submit</button>
                  <button className='btn_cancel' type='button' onClick={deselectUser}>Cancel</button>
             </div>
             
        </form>
    );
};

export default UserForm;