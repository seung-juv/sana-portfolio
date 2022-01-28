import React from 'react';
import gsap from 'gsap';
import { inject, observer } from 'mobx-react';
import MenuStore from '#stores/MenuStore';
import classNames from '#utils/classNames';

import styles from './MenuButton.module.scss';

export interface MenuProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  menuStore?: MenuStore;
}

@inject('menuStore')
@observer
class Menu extends React.Component<MenuProps> {
  timeline1 = gsap.timeline();

  timeline2 = gsap.timeline();

  timeline3 = gsap.timeline();

  menuSpan1Ref = React.createRef<HTMLSpanElement>();

  menuSpan2Ref = React.createRef<HTMLSpanElement>();

  menuSpan3Ref = React.createRef<HTMLSpanElement>();

  componentDidMount() {
    const { menuStore } = this.props;
    const { isMenuOpen } = menuStore ?? {};

    this.handleMenuAnimation(Boolean(isMenuOpen));
  }

  componentDidUpdate() {
    const { menuStore } = this.props;
    const { isMenuOpen } = menuStore ?? {};

    this.handleMenuAnimation(Boolean(isMenuOpen));
  }

  handleMenuAnimation(isMenuOpen: boolean) {
    if (isMenuOpen) {
      this.timeline1
        .clear()
        .to(this.menuSpan1Ref.current, {
          duration: 0.1,
          translateY: (this.menuSpan1Ref.current?.clientHeight ?? 0) * 2,
        })
        .to(this.menuSpan1Ref.current, {
          delay: 0.15,
          duration: 0.1,
          rotate: 45,
        });
      this.timeline2.clear().to(this.menuSpan2Ref.current, {
        duration: 0.1,
        scale: 0,
      });
      this.timeline3
        .clear()
        .to(this.menuSpan3Ref.current, {
          duration: 0.1,
          translateY: -(this.menuSpan3Ref.current?.clientHeight ?? 0) * 2,
        })
        .to(this.menuSpan3Ref.current, {
          delay: 0.15,
          duration: 0.1,
          rotate: -45,
        });
    } else {
      this.timeline1
        .clear()
        .to(this.menuSpan1Ref.current, {
          duration: 0.1,
          rotate: 0,
        })
        .to(this.menuSpan1Ref.current, {
          delay: 0.15,
          duration: 0.1,
          translateY: 0,
        });
      this.timeline2.clear().delay(0.15).to(this.menuSpan2Ref.current, {
        duration: 0.1,
        scale: 1,
      });
      this.timeline3
        .clear()
        .to(this.menuSpan3Ref.current, {
          duration: 0.1,
          rotate: 0,
        })
        .to(this.menuSpan3Ref.current, {
          delay: 0.15,
          duration: 0.1,
          translateY: 0,
        });
    }
  }

  render() {
    const { menuStore, ...props } = this.props;
    const { isMenuOpen, handleToggleMenu } = menuStore ?? {};

    return (
      <button
        type="button"
        onClick={handleToggleMenu}
        className={classNames(styles.menu, isMenuOpen && styles.active)}
        {...props}
      >
        <span ref={this.menuSpan1Ref} />
        <span ref={this.menuSpan2Ref} />
        <span ref={this.menuSpan3Ref} />
      </button>
    );
  }
}

export default Menu;
