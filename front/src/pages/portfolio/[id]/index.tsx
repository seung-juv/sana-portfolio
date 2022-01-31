import React from 'react';
import Link from 'next/link';
import { inject, observer } from 'mobx-react';
import moment from 'moment';
import { NextPageContext } from 'next';
import classNames from '#utils/classNames';
import styles from './Detail.module.scss';
import { getPortfolio, IPortfolio } from '#apis/portfolios';
import AuthStore from '#stores/AutoStore';

export interface PortfolioDetailsProps {
  portfolio: IPortfolio;
  authStore?: AuthStore;
}

@inject('authStore')
@observer
class PortfolioDetails extends React.Component<PortfolioDetailsProps> {
  static async getInitialProps(ctx: NextPageContext) {
    const props = {
      portfolio: null,
    } as { portfolio: null | IPortfolio };

    const { id } = ctx.query;

    const { data: responseData } = await getPortfolio(String(id));

    if (responseData) {
      props.portfolio = responseData;
    }

    return props;
  }

  render() {
    const { portfolio, authStore } = this.props;
    const { id, category, title, startAt, endAt, size, program, etc, contents, image, youtubeId } = portfolio;
    const { isLogin } = authStore ?? {};

    return (
      <div className={classNames(styles['container'])}>
        <span className={classNames(styles['category'])}>{category}</span>
        <h3 className={classNames(styles['title'])}>{title}</h3>
        {isLogin && (
          <div className={classNames(styles['tools'])}>
            <Link href={`/portfolio/update/${id}`}>
              <a className={classNames(styles['link-update'])}>수정</a>
            </Link>
          </div>
        )}
        <div className={classNames(styles['info-container'])}>
          <div className={classNames(styles['info'])}>
            <dl>
              <dt>제작기간</dt>
              <dd>
                {startAt === endAt
                  ? moment(startAt).format('YYYY. MM.')
                  : `${moment(startAt).format('YYYY. MM.')} ~ ${moment(endAt).format('YYYY. MM.')}`}
              </dd>
            </dl>
            <dl>
              <dt>사이즈</dt>
              <dd>{size}</dd>
            </dl>
            <dl>
              <dt>프로그램</dt>
              <dd>{program}</dd>
            </dl>
            <dl>
              <dt>기타사항</dt>
              <dd>{etc}</dd>
            </dl>
          </div>
          <pre className={classNames(styles['contents'])}>{contents}</pre>
        </div>
        <div className={classNames(styles['image-container'])}>
          {youtubeId && (
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
          {image && <img src={image.uri} alt={title} />}
        </div>
      </div>
    );
  }
}

export default PortfolioDetails;
