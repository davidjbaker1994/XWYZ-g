import React from 'react'

const Dropdown = ({ children }) => (
  <div className="dropdown">
    <span>Some Websites *</span>
    <div className="dropdown-content" role="menu">
      {children}
    </div>
  </div>
);


export default Dropdown;