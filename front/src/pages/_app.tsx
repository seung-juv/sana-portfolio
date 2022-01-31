import React from 'react';
import App from 'next/app';
import { autobind } from 'core-decorators';
import NProgress from 'nprogress';
import Head from 'next/head';
import { Provider } from 'mobx-react';
import { setToken, TOKEN_STORE_KEY } from '#apis/index';
import RootStore from '#stores/index';

import 'nprogress/nprogress.css';
import '#styles/fonts.css';
import '#styles/reset.css';
import '#styles/global.css';

import Layout from '#components/layout';
import handleError from '#utils/handleError';

interface State {
  Store: RootStore;
  loading: boolean;
}

@autobind
export default class MyApp extends App<{}, State> {
  state: State = {
    Store: new RootStore(),
    loading: true,
  };

  componentDidMount() {
    this.props.router.events.on('routeChangeStart', this.handleRouteChange);
    this.props.router.events.on('routeChangeComplete', MyApp.handleRouteDone);

    this.init();
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

  async init() {
    try {
      const token = window.localStorage.getItem(TOKEN_STORE_KEY);
      if (token) {
        setToken(JSON.parse(token));
        await this.state.Store.authStore.setProfile();
      }
    } catch (error) {
      handleError(error);
    } finally {
      this.setState((prevState) => ({
        ...prevState,
        loading: false,
      }));
    }
  }

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <Provider {...this.state.Store}>
        <Head>
          <title>sanha&apos;s portfolio</title>
        </Head>
        {!this.state.loading && (
          <Layout>
            <Component router={router} {...pageProps} />
          </Layout>
        )}
      </Provider>
    );
  }
}
