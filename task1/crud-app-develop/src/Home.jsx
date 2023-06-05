import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from './UserReducer';

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.UserReducer);

  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };
  return (
    <div className='container'>
      <h2>User Data</h2>
      <Link to={'/create'} className='btn btn-success my-3'>
        Add User
      </Link>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'>
                  Edit
                </Link>
                <button className='btn btn-sm btn-danger ms-2' onClick={() => handleDelete(user.id)}>
                  Delete
                </button>
              </td>{' '}
            </tr>
          ))
        : (
          <div>No Data found</div>
        )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
