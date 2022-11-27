import React from "react";
import styles from "./Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { deleteUser } from "../../redux/actions/userActions";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.user.userList);

  const handleNavigation = (id) => {
    navigate(`/${id}`);
  };

  const onDeleteHandler = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      console.log(response);
      if (response.status === 200) {
        dispatch(deleteUser(id));
        alert("User Deleted!!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles["home-wrapper"]}>
      <div className={styles.userListContainer}>
        {userList.map((data) => {
          return (
            <div
              className={styles.singleUserCSS}
              key={data.id}
              onClick={() => handleNavigation(data.id)}
            >
              <p>{data.name}</p>
              <p>{data.email}</p>
              <button onClick={(e) => onDeleteHandler(e, data.id)}>
                <AiOutlineDelete />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
