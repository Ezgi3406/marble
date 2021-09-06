import React from "react";
import Form from "react-bootstrap/Form";
import { FaSearch } from "react-icons/fa";
import "../pages/ege/search.css";

function Search() {
  return (
    <div>
    <div id="wrap">
    <form action="" autocomplete="on">
    <input style={{position: "sticky"}} id="search" name="search" type="text" placeholder="What're we looking for ?"/><input id="search_submit"  type="submit"/>
    </form>
  </div>
  </div>
  
  );
}
export default Search;
