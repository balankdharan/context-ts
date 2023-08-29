// src/ComponentA.tsx
import React, { useState } from "react";
import { useHeadingContext } from "../context/HeadingContext";
import { Link } from "react-router-dom";
import "../App.css";
const Home: React.FC = () => {
  const { data, dispatch } = useHeadingContext();
  const [name, setName] = useState("");

  const changeText = () => {
    dispatch({ type: "HEADING_1", payload: name });
    setName("");
  };
  const handleChange = (e: any) => {
    setName(e.target.value);
  };
  return (
    <div className="centered-container">
      <h1>
        Context Data in <span className="badge bg-primary ">Home</span>
      </h1>

      <div className="centered-div">
        <h4 className=" badge bg-success p-2">{data}</h4>
        <br />
        <br />
        <div className="mb-3">
          <label className="form-label">Enter text to change the heading</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            onChange={handleChange}
            style={{ width: "70%", margin: "auto" }}
            value={name}
            // placeholder="name@example.com"
          />
        </div>
        <div>
          <button onClick={changeText} className="btn btn-primary">
            click me to change text
          </button>
        </div>
        <nav className="nav justify-content-center">
          <Link className="nav-link" to="/page1">
            Go to Page 1
          </Link>
          <Link className="nav-link" to="/page2">
            Go to Page 2
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Home;
