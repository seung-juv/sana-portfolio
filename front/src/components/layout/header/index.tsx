import React from 'react';
import MenuButton from '#components/layout/header/menu_button';
import GlobalNavigation from '#components/layout/header/global_navigation';

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
