import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  list: [],
  isEditing: false,
  editID: null,
  alert: {
    show: false,
    type: "",
    msg: "",
  },
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setList: (state, action) => {
      state.list = action.payload;
    },
    addTodo: (state, action) => {
      state.list.push(action.payload);
    },
    editTodo: (state, action) => {
      const { id, title } = action.payload;
      const todo = state.list.find((item) => item.id === id);
      if (todo) {
        todo.title = title;
      }
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      state.list = state.list.filter((item) => item.id !== id);
    },
    clearList: (state) => {
      state.list = [];
    },
    setIdEditing: (state, action) => {
      state.isEditing = action.payload;
    },
    setEditID: (state, action) => {
      state.editID = action.payload;
    },
    setAlert: (state, action) => {
      state.alert = action.payload;
    },
    removeAlert: (state) => {
      state.alert = {
        show: false,
        type: "",
        msg: "",
      };
    },
  },
});

export const {
  setName,
  setList,
  addTodo,
  editTodo,
  removeTodo,
  clearList,
  setIdEditing,
  setEditID,
  setAlert,
  removeAlert,
} = todoSlice.actions;

export default todoSlice.reducer;
