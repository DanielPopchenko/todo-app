import React from 'react';
import { IoMdSchool } from 'react-icons/io';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-list_item">
          <a href="#!">Collections</a>
        </li>
        <li className="sidebar-list_item">
          <a href="#!">Dashboard</a>
        </li>

        <li className="sidebar-list_item">
          <a href="#!">Home</a>
        </li>
      </ul>
    </div>
  );
};

export { Sidebar };
