import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from './UserReducer';

const Update = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.UserReducer);

  const existingUser = users.filter(i => i.id === Number(id));
  if(existingUser.length === 0) {
    navigate('/')
  }
  const { name, email } = existingUser.length > 0 && existingUser[0];
  const [uName, setName] = useState(name);
  const [uEmail, setEmail] = useState(email);

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(updateUser({
      id: id,
      name: uName,
      email: uEmail
    }));
    navigate('/')
  }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-secondary text-white p-5'>
        <h3>Update User</h3>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' className='form-control' placeholder='Enter name' value={uName} onChange={e => setName(e.target.value)}/>
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input type='email' name='email' className='form-control' placeholder='Enter email' value={uEmail} onChange={e => setEmail(e.target.value)}/>
          </div>
          <br />
          <button className='btn btn-info'>Update</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
