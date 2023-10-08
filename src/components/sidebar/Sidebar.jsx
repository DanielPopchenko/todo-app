import React from 'react';

import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <Link className="sidebar-list_item">Home</Link>
      </ul>
    </div>
  );
};

export { Sidebar };
