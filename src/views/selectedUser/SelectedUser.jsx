import React, { useEffect } from "react";
import styles from "./SelectedUser.module.css";
import { useDispatch, useSelector } from "react-redux";
import instance from "../../utils/axios";
import { useParams } from "react-router-dom";
import { addSelectedUser } from "../../redux/actions/userActions";

const SelectedUser = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detailedData = useSelector((state) => state.user.selected);

  const fetchUserDetail = async () => {
    try {
      const response = await instance.get(`/users/${id}`);
      dispatch(addSelectedUser(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserDetail();
  }, []);

  return (
    <div className={styles.selectedUserWrapper}>
      {Object.keys(detailedData).length === 0 ? (
        <div>Loading....</div>
      ) : (
        <div className={styles.selectedUserCard}>
          <p>
            Name: <span>{detailedData?.name}</span>
          </p>
          <p>
            UserName: <span>{detailedData?.username}</span>
          </p>
          <p>
            Email: <span>{detailedData?.email}</span>
          </p>
          <p>
            Phone: <span>{detailedData?.phone}</span>
          </p>
          <p>
            Website: <span>{detailedData?.website}</span>
          </p>
          <p>
            Address:{" "}
            <span>
              {detailedData?.address?.street}
              {detailedData?.address?.city}
            </span>
          </p>
          <p>
            Company: <span>{detailedData?.company?.name}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default SelectedUser;
