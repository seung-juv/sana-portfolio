import React from 'react';
import Link from 'next/link';
import { inject, observer } from 'mobx-react';
import moment from 'moment';
import { NextPageContext } from 'next';
import { NextRouter } from 'next/router';
import classNames from '#utils/classNames';
import styles from './Detail.module.scss';
import { getServerPortfolio, IPortfolio } from '#apis/portfolios';
import AuthStore from '#stores/AutoStore';
import { api } from '#apis/index';

export interface PortfolioDetailsProps {
  portfolio: IPortfolio;
  authStore?: AuthStore;
  router: NextRouter;
}

@inject('authStore')
@observer
class PortfolioDetails extends React.Component<PortfolioDetailsProps> {
  static async getInitialProps(ctx: NextPageContext) {
    const props = {
      portfolio: null,
    } as { portfolio: null | IPortfolio };

    const { id } = ctx.query;

    const { data: responseData } = await getServerPortfolio(String(id));

    if (responseData) {
      props.portfolio = responseData;
    }

    return props;
  }

  render() {
    const { portfolio, authStore, router } = this.props;
    const {
      id,
      category,
      title,
      startAt,
      endAt,
      size,
      program,
      etc,
      contents,
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
      youtubeId,
    } = portfolio;
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
            <button
              type="button"
              className={classNames(styles['button-delete'])}
              onClick={(event) => {
                event.preventDefault();
                api.delete(`/api/portfolios/${id}`).then(() => {
                  alert('포트폴리오가 삭제되었습니다.');
                  router.push('/portfolio');
                });
              }}
            >
              삭제
            </button>
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
          {image1 && <img src={image1} alt={title} />}
          {image2 && <img src={image2} alt={title} />}
          {image3 && <img src={image3} alt={title} />}
          {image4 && <img src={image4} alt={title} />}
          {image5 && <img src={image5} alt={title} />}
          {image6 && <img src={image6} alt={title} />}
          {image7 && <img src={image7} alt={title} />}
          {image8 && <img src={image8} alt={title} />}
          {image9 && <img src={image9} alt={title} />}
          {image10 && <img src={image10} alt={title} />}
        </div>
      </div>
    );
  }
}

export default PortfolioDetails;
