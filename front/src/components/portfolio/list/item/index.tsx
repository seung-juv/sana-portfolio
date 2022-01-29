import React from 'react';
import gsap from 'gsap';
import GsapScrollTrigger from 'gsap/ScrollTrigger';
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

gsap.registerPlugin(GsapScrollTrigger);

class PortfolioListItem extends React.Component<PortflioListItemProps> {
  listItemRef = React.createRef<HTMLAnchorElement>();

  componentDidMount() {
    this.scrollTrigger();
  }

  componentWillUnmount() {
    this.scrollTrigger();
  }

  scrollTrigger() {
    console.log((this.listItemRef.current?.offsetTop ?? 0) - 25);
    GsapScrollTrigger.create({
      once: false,
      trigger: this.listItemRef.current,
      toggleClass: {
        className: styles['active'],
        targets: this.listItemRef.current,
      },
      start: (this.listItemRef.current?.offsetTop ?? 0) - window.innerHeight / 2 + 100,
      end: this.listItemRef.current?.offsetTop ?? 0,
    });
  }

  render() {
    const { id, htmlId, title, subTitle, thumbnail, startAt, endAt, url, createdAt, updatedAt, ...props } = this.props;

    return (
      <Link href={url ?? `/portfolio/${id}`}>
        <a
          ref={this.listItemRef}
          id={htmlId}
          className={classNames(styles['wrapper'])}
          style={{ backgroundImage: `url(${thumbnail.uri})` }}
          {...props}
        >
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
