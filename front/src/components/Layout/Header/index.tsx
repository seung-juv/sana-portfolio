import React from 'react';
import MenuButton from '#components/Layout/Header/MenuButton';
import GlobalNavigation from '#components/Layout/Header/GlobalNavigation';

class Header extends React.Component {
  render() {
    return (
      <header>
        <MenuButton />
        <GlobalNavigation />
      </header>
    );
  }
}

export default Header;
