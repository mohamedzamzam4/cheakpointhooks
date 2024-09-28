import React, { useState } from "react";
const Filter = (props) => {
  const [input, setInput] = useState("");

  const click = (e) => {
    const input = e.target.value;
    setInput(input);
    props.onFilterChange(input);
  };

  return (
    <div>
      <input
        className="filterinput"
        type="text"
        value={input}
        onChange={click}
        placeholder="Search by title or rating"
      />
    </div>
  );
};
export default Filter;
