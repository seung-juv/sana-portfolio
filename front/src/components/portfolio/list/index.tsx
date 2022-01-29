import React from 'react';
import styles from './List.module.scss';
import classNames from '#utils/classNames';
import PortfolioListItem, { PortflioListItemProps } from './item';

export interface PortfolioListProps extends React.HTMLAttributes<HTMLDivElement> {
  items: Array<PortflioListItemProps>;
}

class PortfolioList extends React.Component<PortfolioListProps> {
  static Item: PortfolioListItem;

  render() {
    const { items, ...props } = this.props;

    return (
      <div className={classNames(styles['container'])} {...props}>
        {items.map((value) => (
          <PortfolioListItem key={`portfolio-${value.id}`} {...value} />
        ))}
      </div>
    );
  }
}

export default PortfolioList;
