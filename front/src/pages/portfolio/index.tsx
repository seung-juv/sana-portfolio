import React from 'react';
import usePagination from '#hooks/usePagination';
import styles from './Portfolio.module.scss';
import classNames from '#utils/classNames';
import PortfolioList from '#components/portfolio/list';
import { getPortfolios, IPortfolio } from '#apis/portfolios';

function Portfolio(): React.ReactElement {
  const { data, loadData, clear } = usePagination<IPortfolio>(getPortfolios);

  async function init() {
    clear();
    await loadData();
  }

  React.useEffect(() => {
    init();
  }, []);

  return (
    <div className={classNames(styles['container'])}>
      <h2 className={classNames(styles['title'])}>SANHA&apos;S PORTFOLIO !</h2>
      <p className={classNames(styles['sub-title'])}>
        2017 - 2020 포트폴리오. 여러가지 다채로운 디자인을 확인해주세요!
        <br />
        웹디자인/편집/기획/영상/UI/UX 까지 실무 및 개인 작업 모음입니다. 감사합니다.
      </p>
      <PortfolioList items={data} />
    </div>
  );
}

export default Portfolio;
