import React, { useState } from 'react';
import arrow from "./dropdown_arrow.png";


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        What's a good question?
        <span className={`arrow ${isOpen ? 'open' : ''}`}></span>
      </button>
      <ul className={`dropdown-list ${isOpen ? 'open' : ''}`}>
          <li>Answer to your frequently asked question</li>
      </ul>
    </div>
  );
};

export default Dropdown;
