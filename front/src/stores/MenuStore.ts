import { action, makeObservable, observable } from 'mobx';

export default class MenuStore {
  @observable
  isMenuOpen: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action.bound
  handleOpenMenu() {
    this.isMenuOpen = true;
  }

  @action.bound
  handleCloseMenu() {
    this.isMenuOpen = false;
  }

  @action.bound
  handleToggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
