import React from 'react';
import { autobind } from 'core-decorators';
import styles from './Item.module.scss';
import classNames from '#utils/classNames';

export interface AboutMySkillListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  key: any;
  name: string;
  percent: string;
}

interface AboutMySkillListItemState {
  active: boolean;
}

@autobind
class AboutMySkillListItem extends React.Component<AboutMySkillListItemProps, AboutMySkillListItemState> {
  constructor(props: AboutMySkillListItemProps) {
    super(props);
    this.state = {
      active: false,
    };
  }

  handleToggleActive() {
    this.setState((prevState) => ({
      active: !prevState.active,
    }));
  }

  render() {
    const { name, percent, ...props } = this.props;
    const { active } = this.state;

    return (
      <li
        className={classNames(styles['container'], active ? styles['active'] : name.length > 3 && styles['small-text'])}
        {...props}
      >
        <button type="button" onClick={this.handleToggleActive}>
          {active ? percent : name}
        </button>
      </li>
    );
  }
}

export default AboutMySkillListItem;
