import React, { useState, useEffect } from 'react';
import Dropdown from './DropdownComponent';

const DropdownContainer = () => {
  const [dropdowns, setDropdowns] = useState([
    { isOpen: false },
    { isOpen: false },
    { isOpen: false },
  ]);

  const [containerHeight, setContainerHeight] = useState('auto');

  const toggleDropdown = (index) => {
    const updatedDropdowns = [...dropdowns];
    updatedDropdowns[index].isOpen = !updatedDropdowns[index].isOpen;
    setDropdowns(updatedDropdowns);
  };

  // Calculate container height based on open dropdowns
  useEffect(() => {
    const totalOpenDropdowns = dropdowns.filter((dropdown) => dropdown.isOpen).length;
    const newHeight = totalOpenDropdowns > 0 ? `${totalOpenDropdowns * 300}px` : 'auto'; // Adjust 300 as needed
    setContainerHeight(newHeight);
  }, [dropdowns]);

  return (
    <div style={{ height: containerHeight }}>
      {dropdowns.map((dropdown, index) => (
        <Dropdown
          key={index}
          isOpen={dropdown.isOpen}
          toggleDropdown={() => toggleDropdown(index)}
          containerHeight={containerHeight}
        />
      ))}
    </div>
  );
};

export default DropdownContainer;
