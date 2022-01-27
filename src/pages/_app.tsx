import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { Provider } from 'mobx-react';
import RootStore from '#stores/index';

import '#styles/fonts.css';
import '#styles/reset.css';
import '#styles/global.css';

import Layout from '#components/Layout';

interface State {
  Store: RootStore;
}

export default class MyApp extends App<{}, State> {
  state: State = {
    Store: new RootStore(),
  };

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
