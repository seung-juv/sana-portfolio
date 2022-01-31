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
        image1: image1.files[0],
        image2: image2.files[0],
        image3: image3.files[0],
        image4: image4.files[0],
        image5: image5.files[0],
        image6: image6.files[0],
        image7: image7.files[0],
        image8: image8.files[0],
        image9: image9.files[0],
        image10: image10.files[0],
        isActive: true,
      } as CreatePortfolioDto;

      if (thumbnail.files[0]) {
        const { data: responseData } = await uploadFiles(thumbnail.files[0]);
        requestBody.thumbnail = responseData;
      }
      if (image1.files[0]) {
        const { data: responseData } = await uploadFiles(image1.files[0]);
        requestBody.image1 = responseData;
      }
      if (image2.files[0]) {
        const { data: responseData } = await uploadFiles(image2.files[0]);
        requestBody.image2 = responseData;
      }
      if (image3.files[0]) {
        const { data: responseData } = await uploadFiles(image3.files[0]);
        requestBody.image3 = responseData;
      }
      if (image4.files[0]) {
        const { data: responseData } = await uploadFiles(image4.files[0]);
        requestBody.image4 = responseData;
      }
      if (image5.files[0]) {
        const { data: responseData } = await uploadFiles(image5.files[0]);
        requestBody.image5 = responseData;
      }
      if (image6.files[0]) {
        const { data: responseData } = await uploadFiles(image6.files[0]);
        requestBody.image6 = responseData;
      }
      if (image7.files[0]) {
        const { data: responseData } = await uploadFiles(image7.files[0]);
        requestBody.image7 = responseData;
      }
      if (image8.files[0]) {
        const { data: responseData } = await uploadFiles(image8.files[0]);
        requestBody.image8 = responseData;
      }
      if (image9.files[0]) {
        const { data: responseData } = await uploadFiles(image9.files[0]);
        requestBody.image9 = responseData;
      }
      if (image10.files[0]) {
        const { data: responseData } = await uploadFiles(image10.files[0]);
        requestBody.image10 = responseData;
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
        <label htmlFor="form-image-1">
          이미지1
          <input type="file" id="form-image-1" name="image1" accept="image/*" />
        </label>
        <label htmlFor="form-image-2">
          이미지2
          <input type="file" id="form-image-2" name="image2" accept="image/*" />
        </label>
        <label htmlFor="form-image-3">
          이미지3
          <input type="file" id="form-image-3" name="image3" accept="image/*" />
        </label>
        <label htmlFor="form-image-4">
          이미지4
          <input type="file" id="form-image-4" name="image4" accept="image/*" />
        </label>
        <label htmlFor="form-image-5">
          이미지5
          <input type="file" id="form-image-5" name="image5" accept="image/*" />
        </label>
        <label htmlFor="form-image-6">
          이미지6
          <input type="file" id="form-image-6" name="image6" accept="image/*" />
        </label>
        <label htmlFor="form-image-7">
          이미지7
          <input type="file" id="form-image-7" name="image7" accept="image/*" />
        </label>
        <label htmlFor="form-image-8">
          이미지8
          <input type="file" id="form-image-8" name="image8" accept="image/*" />
        </label>
        <label htmlFor="form-image-9">
          이미지9
          <input type="file" id="form-image-9" name="image9" accept="image/*" />
        </label>
        <label htmlFor="form-image-10">
          이미지10
          <input type="file" id="form-image-10" name="image10" accept="image/*" />
        </label>
        <button type="submit">{portfolio ? '글수정' : '글등록'}</button>
      </form>
    );
  }
}

export default PortfolioCreate;
