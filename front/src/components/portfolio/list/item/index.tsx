import React from 'react';
import Link from 'next/link';
import moment from 'moment';
import styles from './Item.module.scss';
import classNames from '#utils/classNames';
import { IPortfolio } from '#apis/portfolios';

export interface PortflioListItemProps
  extends Omit<React.HTMLAttributes<HTMLAnchorElement>, 'id' | 'title'>,
    IPortfolio {
  htmlId?: string;
}

class PortfolioListItem extends React.Component<PortflioListItemProps> {
  render() {
    const { id, htmlId, title, subTitle, thumbnail, startAt, endAt, url, createdAt, updatedAt, ...props } = this.props;

    return (
      <Link href={url ?? `/portfolio/${id}`}>
        <a id={htmlId} className={styles['wrapper']} style={{ backgroundImage: `url(${thumbnail.uri})` }} {...props}>
          <div className={classNames(styles['container'])}>
            <b className={classNames(styles['title'])}>{title}</b>
            <p className={classNames(styles['contents'])}>
              {startAt === endAt
                ? moment(startAt).format('YYYY.MM')
                : `${moment(startAt).format('YYYY.MM')} ~ ${moment(endAt).format('YYYY.MM')}`}
              <br />
              {subTitle}
            </p>
          </div>
        </a>
      </Link>
    );
  }
}

export default PortfolioListItem;
