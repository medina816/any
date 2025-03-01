import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./UserDetail.css"; 

function UserDetail() {
  const { id } = useParams();
  const { users } = useSelector((state) => state.idk);

  const user = users[id];

  return (
    <div className="user-detail-container">
      <div className="user-info">
        <h1 className="user-name">{user.name.first} {user.name.last}</h1>
        <div className="user-image-container">
          <img className="user-image" src={user.picture.large} alt={user.name.first} />
        </div>
        <p className="user-gender">Gender: {user.gender}</p>
      </div>
    </div>
  );
}

export default UserDetail;
