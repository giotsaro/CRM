import React from 'react';

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 bg-blue-700 w-64 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out z-10`}
    >
      <div className="text-white p-4">Sidebar Content</div>
      <ul className="mt-4">
        <li className="text-white p-4 hover:bg-blue-600">
          <a href="#">Dashboard</a>
        </li>
        <li className="text-white p-4 hover:bg-blue-600">
          <a href="#">Settings</a>
        </li>
        <li className="text-white p-4 hover:bg-blue-600">
          <a href="#">Profile</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
