import { action, makeObservable, observable } from 'mobx';
import { getProfile } from '#apis/profile';
import { IUser } from '#apis/users';

export default class AuthStore {
  @observable
  profile: IUser | null = null;

  @observable
  isLogin: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action.bound
  async setProfile() {
    const { data: responseData } = await getProfile();
    this.profile = responseData;
    this.isLogin = true;
  }
}
