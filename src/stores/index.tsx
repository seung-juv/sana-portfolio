import MenuStore from './MenuStore';

export default class RootStore {
  constructor() {
    this.menuStore = new MenuStore();
  }

  menuStore: MenuStore;
}
