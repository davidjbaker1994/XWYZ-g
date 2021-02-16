import React from 'react'

const pfcarrot = `^`;

const Dropdown = ({ddIcon, children }) => (
  <div className="dropdown">
    Some Websites
    <button id="dd-btn">
      {pfcarrot || ddIcon}
    </button>
    <div className="dropdown-content" role="menu">
      {children}
    </div>
  </div>
);


export default Dropdown;