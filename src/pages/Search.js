import React from "react";
import Form from "react-bootstrap/Form";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div >
      <Form  >
        <div style={{
      display: "grid",
      "grid-template-columns": "1fr 1fr",
      "margin-top": "200px",
      "margin-bottom": "300px",
      "margin-left": "400px",
      "margin-right": "150px",
      
    }}>
          <Form.Control placeholder="Search" />
          <button
            type="button"
            className="btn signin-btn"
            style={{ margin: "0px" }}
          >
            <svg width="15px" height="15px">
              <FaSearch />
            </svg>
          </button>
          {/* @media screen and (max-width: 600px) {
  .topnav .search-container {
    float: none;
  }
  .topnav a, .topnav input[type=text], .topnav .search-container button {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  .topnav input[type=text] {
    border: 1px solid #ccc;  
  }
} */}
        </div>
      </Form>
    </div>
  );
}
export default Search;
