import AuthStore from '#stores/AutoStore';
import MenuStore from '#stores/MenuStore';

export default class RootStore {
  constructor() {
    this.authStore = new AuthStore();
    this.menuStore = new MenuStore();
  }

  authStore: AuthStore;

  menuStore: MenuStore;
}
