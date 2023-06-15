import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Alert from "../components/Alert";
import List from "../components/List";
import {
  setName,
  addTodo,
  editTodo,
  removeTodo,
  clearList,
  setIdEditing,
  setEditID,
  setAlert,
  removeAlert,
  setList,
} from "../redux/todoReducer";
import Navbar from "@/components/Navbar";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

const Todo = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.todo.name);
  console.log("object", name);
  const list = useSelector((state) => state.todo.list);
  const isEditing = useSelector((state) => state.todo.isEditing);
  const editID = useSelector((state) => state.todo.editID);
  const alert = useSelector((state) => state.todo.alert);

  useEffect(() => {
    const storedList = getLocalStorage();
    if (storedList.length) {
      dispatch(setList(storedList));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "bg-yellow-500", "Please enter a value");
    } else if (name && isEditing) {
      dispatch(editTodo({ id: editID, title: name }));
      dispatch(setName(""));
      dispatch(setIdEditing(false));
      showAlert(true, "bg-green-500", "Successfully edited");
    } else {
      dispatch(
        addTodo({
          id: new Date().getTime().toString(),
          title: name,
        })
      );
      showAlert(true, "bg-green-600", "Item added");
      dispatch(setName(""));
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    dispatch(
      setAlert({
        show,
        type,
        msg,
      })
    );
    // Automatically remove the alert after 2 seconds
    setTimeout(() => {
      dispatch(removeAlert());
    }, 2000);
  };

  const handleRemoveItem = (id) => {
    dispatch(removeTodo(id));
    showAlert(true, "bg-red-700", "Item removed");
  };

  const handleEditItem = (id) => {
    const editItem = list.find((item) => item.id === id);
    dispatch(setIdEditing(true));
    dispatch(setEditID(id));
    dispatch(setName(editItem.title));
  };

  const handleClearList = () => {
    dispatch(clearList());
    showAlert(true, "bg-red-700", "Empty list");
  };

  return (
    <>
      <Navbar />
      <section className="mx-auto w-[50%] bg-white p-5 shadow-lg mt-20">
        <form onSubmit={handleSubmit}>
          {alert.show && <Alert {...alert} />}
          <h2 className="text-center my-3 text-4xl mb-6 font-medium">
            Todo List
          </h2>
          <div className="mb-3 flex justify-center">
            <input
              type="text"
              className="py-2 px-2 outline-none bg-gray-200 w-full shadow border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700  focus:border-gray-600 focus:outline-none"
              value={name}
              onChange={(e) => dispatch(setName(e.target.value))}
            />
            <button
              type="submit"
              className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase  shadow-lg hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              {isEditing ? "Edit" : "Submit"}
            </button>
          </div>
        </form>

        {list.length ? (
          <div className="mt-12">
            <List
              items={list}
              removeItem={handleRemoveItem}
              editItem={handleEditItem}
            />
            <div className="mt-5 flex justify-center">
              <button
                onClick={handleClearList}
                type="button"
                className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Remove All
              </button>
            </div>
          </div>
        ) : null}
      </section>
    </>
  );
};

export default Todo;
