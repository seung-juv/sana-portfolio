import React from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { isMobile } from 'react-device-detect';
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

gsap.registerPlugin(ScrollTrigger);

class PortfolioListItem extends React.Component<PortflioListItemProps> {
  listItemRef = React.createRef<HTMLAnchorElement>();

  componentDidMount() {
    this.scrollTrigger();
  }

  componentWillUnmount() {
    this.scrollTrigger();
  }

  scrollTrigger() {
    if (isMobile) {
      ScrollTrigger.create({
        once: false,
        trigger: this.listItemRef.current,
        toggleClass: {
          className: styles['active'],
          targets: this.listItemRef.current,
        },
        start: (this.listItemRef.current?.offsetTop ?? 0) - window.innerHeight / 2 + 50,
        end: this.listItemRef.current?.offsetTop ?? 0,
      });
    }
  }

  render() {
    const { id, htmlId, title, description, thumbnail, startAt, endAt, redirectUrl, ...props } = this.props;

    return (
      <Link href={redirectUrl || `/portfolio/${id}`}>
        <a
          ref={this.listItemRef}
          id={htmlId}
          className={classNames(styles['wrapper'])}
          style={{ backgroundImage: `url(${thumbnail})` }}
          {...props}
        >
          <div className={classNames(styles['container'])}>
            <b className={classNames(styles['title'])}>{title}</b>
            <p className={classNames(styles['contents'])}>
              {startAt === endAt
                ? moment(startAt).format('YYYY.MM')
                : `${moment(startAt).format('YYYY.MM')} ~ ${moment(endAt).format('YYYY.MM')}`}
              <br />
              {description}
            </p>
          </div>
        </a>
      </Link>
    );
  }
}

export default PortfolioListItem;
