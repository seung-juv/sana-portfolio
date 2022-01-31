import React from 'react';
import moment from 'moment';
import { NextPageContext } from 'next';
import { autobind } from 'core-decorators';
import { NextRouter } from 'next/router';
import classNames from '#utils/classNames';
import styles from './Create.module.scss';
import handleError from '#utils/handleError';
import { createPortfolio, CreatePortfolioDto, IPortfolio, getPortfolio, updatePortfolio } from '#apis/portfolios';
import uploadFiles from '#utils/uploadFiles';

export interface PortfolioCreateProps {
  router: NextRouter;
}

interface State {
  portfolio: IPortfolio | null;
  loading: boolean;
}

@autobind
class PortfolioCreate extends React.Component<PortfolioCreateProps, State> {
  static async getInitialProps(ctx: NextPageContext) {
    const props = {
      portfolio: null,
    } as { portfolio: null | IPortfolio };

    const { id } = ctx.query;

    if (typeof id === 'string') {
      const { data: responseData } = await getPortfolio(id);

      if (responseData) {
        props.portfolio = responseData;
      }
    }

    return props;
  }

  constructor(props: PortfolioCreateProps) {
    super(props);

    this.state = {
      portfolio: null,
      loading: false,
    };
  }

  async componentDidMount() {
    const { router } = this.props;
    const { id } = router.query;

    if (id) {
      try {
        const { data: responseData } = await getPortfolio(String(id));
        this.setState((prevState) => ({
          ...prevState,
          portfolio: responseData,
          loading: false,
        }));
      } catch (error) {
        handleError(error);
        await router.replace('/portfolio');
      }
    }
  }

  async handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const { router } = this.props;
    const { id } = router.query;
    const { loading } = this.state;

    if (loading) {
      return;
    }

    const {
      title,
      category,
      thumbnail,
      description,
      startAt,
      endAt,
      size,
      program,
      etc,
      contents,
      youtubeId,
      redirectUrl,
      image,
    } = event.target as HTMLFormElement;

    try {
      this.setState((prevState) => ({
        ...prevState,
        loading: true,
      }));

      const requestBody = {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        title: title.value,
        category: category.value,
        thumbnail: thumbnail.files[0],
        description: description.value,
        startAt: startAt.value,
        endAt: endAt.value,
        size: size.value,
        program: program.value,
        etc: etc.value,
        contents: contents.value,
        youtubeId: youtubeId.value,
        redirectUrl: redirectUrl.value,
        image: image.files[0],
        isActive: true,
      } as CreatePortfolioDto;

      if (thumbnail.files[0]) {
        const { data: responseData } = await uploadFiles(thumbnail.files[0]);
        requestBody.thumbnail = responseData;
      }
      if (image.files[0]) {
        const { data: responseData } = await uploadFiles(image.files[0]);
        requestBody.image = responseData;
      }

      if (typeof id === 'string') {
        await updatePortfolio(id, requestBody);
        alert('글 수정되었습니다.');
        await router.push(`/portfolio/${id}`);
      } else {
        await createPortfolio(requestBody);
        alert('글 등록 완료 되었습니다.');
        await router.push(`/portfolio`);
      }
    } catch (error) {
      handleError(error);
    } finally {
      this.setState((prevState) => ({
        ...prevState,
        loading: false,
      }));
    }
  }

  render() {
    const { portfolio } = this.state;

    return (
      <form method="POST" className={classNames(styles['container'])} onSubmit={this.handleSubmit}>
        <label htmlFor="form-title">
          제목
          <input type="text" id="form-title" name="title" defaultValue={portfolio?.title} />
        </label>
        <label htmlFor="form-category">
          카테고리
          <input type="text" id="form-category" name="category" defaultValue={portfolio?.category} />
        </label>
        <label htmlFor="form-thumbnail">
          썸네일
          <input type="file" id="form-thumbnail" name="thumbnail" accept="image/*" />
        </label>
        <label htmlFor="form-description">
          설명
          <input type="text" id="form-description" name="description" defaultValue={portfolio?.description} />
        </label>
        <label htmlFor="form-start-at">
          제작 시작기간
          <input
            type="date"
            id="form-start-at"
            name="startAt"
            defaultValue={moment(portfolio?.startAt).format('YYYY-MM-DD')}
          />
        </label>
        <label htmlFor="form-end-at">
          제작 끝
          <input
            type="date"
            id="form-end-at"
            name="endAt"
            defaultValue={moment(portfolio?.endAt).format('YYYY-MM-DD')}
          />
        </label>
        <label htmlFor="form-size">
          사이즈
          <input type="text" id="form-size" name="size" defaultValue={portfolio?.size} />
        </label>
        <label htmlFor="form-program">
          프로그램
          <input type="text" id="form-program" name="program" defaultValue={portfolio?.program} />
        </label>
        <label htmlFor="form-etc">
          기타사항
          <input type="text" id="form-etc" name="etc" defaultValue={portfolio?.etc} />
        </label>
        <label htmlFor="form-contents">
          내용
          <textarea id="form-contents" name="contents" defaultValue={portfolio?.contents} />
        </label>
        <label htmlFor="form-youtube-url">
          유튜브 ID
          <input type="text" id="form-youtube-url" name="youtubeId" defaultValue={portfolio?.youtubeId} />
        </label>
        <label htmlFor="form-redirect-url">
          이동 페이지
          <input type="text" id="form-redirect-url" name="redirectUrl" defaultValue={portfolio?.redirectUrl} />
        </label>
        <label htmlFor="form-image">
          이미지
          <input type="file" id="form-image" name="image" accept="image/*" />
        </label>
        <button type="submit">{portfolio ? '글수정' : '글등록'}</button>
      </form>
    );
  }
}

export default PortfolioCreate;
