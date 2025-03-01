import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countryFetch } from "../../redux/user/userSlice";
import './about.css'
import { Link } from "react-router-dom";

function About() {
  const dispatch = useDispatch();
  const { country, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(countryFetch());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="about">

      <div className="aboutin">
        {
        country.map((item, index) => (
          <div className="inside" key={index}>
            <img src={item.flags?.png} alt={item.name?.common}  />
            <h2>
            {item.name?.common}
            </h2>
          </div>
        ))
        }
      </div>
    </div>
  );
}

export default About;
