import { createSlice } from '@reduxjs/toolkit';
import { userList } from './Data';

const userSlice = createSlice({
  name: 'users',
  initialState: userList,
  reducers: {
    // action for add user
    addUser: (state, action) => {
      state.push(action.payload);
    },
    // action for update user details
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const updatingUser = state.find((user) => user.id == id);
      if (updatingUser) {
        updatingUser.name = name;
        updatingUser.email = email;
      }
    },
    // action for delete existing user
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.find((user) => user.id == id);
      if (existingUser) {
        return state.filter((user) => user.id !== id);
      }
    }
  }
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
