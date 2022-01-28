import React from 'react';
import App from 'next/app';
import { autobind } from 'core-decorators';
import NProgress from 'nprogress';
import Head from 'next/head';
import { Provider } from 'mobx-react';
import RootStore from '#stores/index';

import 'nprogress/nprogress.css';
import '#styles/fonts.css';
import '#styles/reset.css';
import '#styles/global.css';

import Layout from '#components/Layout';

interface State {
  Store: RootStore;
}

@autobind
export default class MyApp extends App<{}, State> {
  state: State = {
    Store: new RootStore(),
  };

  componentDidMount() {
    this.props.router.events.on('routeChangeStart', this.handleRouteChange);
    this.props.router.events.on('routeChangeComplete', MyApp.handleRouteDone);
  }

  componentWillUnmount() {
    this.props.router.events.off('routeChangeStart', this.handleRouteChange);
    this.props.router.events.off('routeChangeComplete', MyApp.handleRouteDone);
  }

  handleRouteChange() {
    this.state.Store.menuStore.handleCloseMenu();
    NProgress.start();
  }

  static handleRouteDone() {
    NProgress.done();
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider {...this.state.Store}>
        <Head>
          <title>sanha&apos;s portfolio</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}
