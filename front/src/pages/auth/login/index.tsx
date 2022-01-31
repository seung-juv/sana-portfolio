import React from 'react';
import { NextRouter } from 'next/router';
import { autobind } from 'core-decorators';
import { inject, observer } from 'mobx-react';
import classNames from '#utils/classNames';
import styles from './Login.module.scss';
import { postAuthLogin } from '#apis/auth';
import { setToken } from '#apis/index';
import AuthStore from '#stores/AutoStore';
import handleError from '#utils/handleError';

export interface LoginProps {
  authStore?: AuthStore;
  router: NextRouter;
}

interface State {
  loading: boolean;
}

@inject('authStore')
@observer
@autobind
class Login extends React.Component<LoginProps, State> {
  constructor(props: LoginProps) {
    super(props);

    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    const { authStore } = this.props;
    if (authStore?.isLogin) {
      const { router } = this.props;
      router.replace('/');
    }
  }

  async handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const { authStore, router } = this.props;
    const { loading } = this.state;

    if (loading) {
      return;
    }

    const { username, password } = event.target as HTMLFormElement;

    const requestBody = {
      username: username.value,
      password: password.value,
    };

    try {
      this.setState((prevState) => ({
        ...prevState,
        loading: true,
      }));

      const { data: responseData } = await postAuthLogin(requestBody);

      setToken(responseData);

      await authStore?.setProfile();

      await router.replace('/');
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
    return (
      <div className={classNames(styles['container'])}>
        <img className={classNames(styles['logo'])} src="/assets/images/logo.png" alt="SANHA!" />
        <form method="POST" className={classNames(styles['form'])} onSubmit={this.handleSubmit}>
          <label htmlFor="form-username">
            아이디
            <input type="text" id="form-username" name="username" />
          </label>
          <label htmlFor="form-username">
            비밀번호
            <input type="password" id="form-password" name="password" />
          </label>
          <button type="submit">로그인</button>
        </form>
      </div>
    );
  }
}

export default Login;
