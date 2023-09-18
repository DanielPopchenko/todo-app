import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RiDashboardFill } from 'react-icons/ri';
import { PiFoldersBold } from 'react-icons/pi';
import user from '../../../public/user.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-nav">
        <div className="left-nav">
          <RxHamburgerMenu fontSize={30} fill="#b1b1b4" cursor="pointer" />

          <RiDashboardFill fontSize={30} fill="#b1b1b4" cursor="pointer" />
          <span>Dashboard</span>

          <PiFoldersBold fontSize={30} fill="#b1b1b4" cursor="pointer" />
          <span>Collections</span>
        </div>

        <div className="right-nav">
          <div className="user-logo"></div>
        </div>
      </div>
    </header>
  );
};

export { Header };
