import React from 'react';
import classNames from '#utils/classNames';
import styles from './Home.module.scss';
import Link from 'next/link';

class Home extends React.Component {
  render() {
    return (
      <div className={classNames(styles['container'])}>
        <div className={classNames(styles['main-title-container'])}>
          <img className={classNames(styles['main-title'])} src="/assets/images/home/main_title.png" alt="SANHA!" />
          <p className={classNames(styles['main-subtitle'])}>
            수 많은 디자인 속 돋보이는 디자이너 노산하의 개인 사이트입니다.
            <br />
            통통튀는 매력있는 디자인으로 사람들의 마음을 사로잡겠습니다.
          </p>
        </div>
        <Link href="/portfolio">
          <a className={classNames(styles['view-portfolio'])}>VIEW PORTFOLIO</a>
        </Link>
      </div>
    );
  }
}

export default Home;
