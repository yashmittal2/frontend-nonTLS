import React, { useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchData, fetchAllData } from "./dataActions";

const Form = () => {
  const [continent, setContinent] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object with the form data
    const formData = {
      continent,
      location,
    };

    try {
      // Dispatch the fetchData thunk action
      dispatch(fetchData(formData));

      // Navigate to the data page
      navigate("/data");
    } catch (error) {
      console.error(error);
    }

    // Reset the form inputs
    setContinent("");
    setLocation("");
  };

  const handleShowAllData = async () => {
    try {
      // Dispatch the fetchAllData thunk action
      dispatch(fetchAllData());

      // Navigate to the data page
      navigate("/data");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-field">
          <label htmlFor="continent">Continent:</label>
          <input
            type="text"
            id="continent"
            value={continent}
            onChange={(e) => setContinent(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="submit-button">
            Submit
          </button>
          <button
            type="button"
            className="show-all-button"
            onClick={handleShowAllData}
          >
            Show All Data
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
