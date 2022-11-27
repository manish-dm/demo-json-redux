import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import instance from "./utils/axios";
import { addToUserList } from "./redux/actions/userActions";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Home from "./views/home/Home";
import SelectedUser from "./views/selectedUser/SelectedUser";

function App() {
  const dispatch = useDispatch();

  const fetchAllUsers = async () => {
    try {
      const response = await instance.get("/users");
      dispatch(addToUserList(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<SelectedUser />} />
      </Routes>
    </div>
  );
}

export default App;
