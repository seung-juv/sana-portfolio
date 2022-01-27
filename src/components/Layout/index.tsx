import React from 'react';
import { inject, observer } from 'mobx-react';
import MenuStore from '#stores/MenuStore';

import Header from '#components/Layout/Header';

export interface LayoutProps {
  children: React.ReactElement;
  menuStore?: MenuStore;
}

@inject('menuStore')
@observer
class Layout extends React.Component<LayoutProps> {
  render() {
    const { children } = this.props;

    return (
      <>
        <Header />
        <main>{children}</main>
      </>
    );
  }
}

export default Layout;
