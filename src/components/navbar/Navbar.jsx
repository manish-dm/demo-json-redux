import React from "react";
import styles from "./Navbar.module.css";
import { FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.logo} onClick={() => navigate("/")}>
        Redux-JSON
      </div>
      <div>
        <FiUser />
      </div>
    </div>
  );
};

export default Navbar;
