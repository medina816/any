import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/idk/Idk";
import { Link } from "react-router-dom";
import "./contacts.css"; 

function Contact() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.idk);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="contact-container">
      {users.map((item, index) => (
        <div className="contact-card" key={index}>
          <h2 className="gender">{item.gender}</h2>
          <Link to={`/user/${index}`} className="image-link">
            <img className="user-image" src={item.picture.medium} alt={item.name.first} />
          </Link>
          <p className="user-name">{item.name.first} {item.name.last}</p>
        </div>
      ))}
    </div>
  );
}

export default Contact;
