import React from 'react';
import { inject, observer } from 'mobx-react';
import classNames from '#utils/classNames';
import styles from './Layout.module.scss';

import Header from '#components/layout/header';

export interface LayoutProps {
  children?: React.ReactElement;
}

@inject('menuStore')
@observer
class Layout extends React.Component<LayoutProps> {
  render() {
    const { children } = this.props;

    return (
      <>
        <Header />
        <main className={classNames(styles['main'])}>{children}</main>
      </>
    );
  }
}

export default Layout;
