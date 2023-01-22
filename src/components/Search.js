import React from "react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navig = useNavigate();

  const [input, setInput] = useState("");
  
  const submitHandler = (e) => {
    e.preventDefault();
    navig('/searched/' + input);
  }

  return (
    <Styledform onSubmit={submitHandler}>
      <div
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
          flexDirection: "row-reverse",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <FaSearch />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </Styledform>
  );
}

const Styledform = styled.form`
margin:1rem 20rem;
div{
  position:relative;
  width:100%;
}
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg{
    position: absolute;
    top: 50%;
    left : 0%;
    transform: translate(100% , -50%);
    color : white;
  }
`;

export default Search;