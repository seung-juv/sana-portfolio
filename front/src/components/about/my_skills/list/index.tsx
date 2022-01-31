import React from 'react';
import classNames from '#utils/classNames';
import styles from './List.module.scss';
import AboutMySkillListItem, { AboutMySkillListItemProps } from '#components/about/my_skills/list/Item';

export interface AboutMySkillsListProps extends React.HTMLAttributes<HTMLUListElement> {
  items: AboutMySkillListItemProps[];
}

class AboutMySkillsList extends React.Component<AboutMySkillsListProps> {
  static AboutMySkillListItem = AboutMySkillListItem;

  render() {
    const { items, ...props } = this.props;

    return (
      <ul className={classNames(styles['container'])} {...props}>
        {items.map(({ key, ...value }) => {
          return <AboutMySkillListItem key={key} {...value} />;
        })}
      </ul>
    );
  }
}

export default AboutMySkillsList;
