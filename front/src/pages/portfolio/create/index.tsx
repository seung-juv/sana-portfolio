import React from 'react';
import { autobind } from 'core-decorators';
import { NextRouter } from 'next/router';
import classNames from '#utils/classNames';
import styles from './Create.module.scss';
import handleError from '#utils/handleError';
import { createPortfolios, CreatePortfolioDto } from '#apis/portfolios';
import uploadFiles from '#utils/uploadFiles';

export interface PortfolioCreateProps {
  router: NextRouter;
}

interface State {
  loading: boolean;
}

@autobind
class PortfolioCreate extends React.Component<PortfolioCreateProps, State> {
  constructor(props: PortfolioCreateProps) {
    super(props);

    this.state = {
      loading: false,
    };
  }

  async handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const { router } = this.props;
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
      youtubeUrl,
      redirectUrl,
      image,
    } = event.target as HTMLFormElement;

    try {
      this.setState((prevState) => ({
        ...prevState,
        loading: true,
      }));

      const { data: thumbnailData } = await uploadFiles(thumbnail.files[0]);
      const { data: imageData } = await uploadFiles(image.files[0]);

      const requestBody = {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        title: title.value,
        category: category.value,
        thumbnail: thumbnailData,
        description: description.value,
        startAt: startAt.value,
        endAt: endAt.value,
        size: size.value,
        program: program.value,
        etc: etc.value,
        contents: contents.value,
        youtubeUrl: youtubeUrl.value,
        redirectUrl: redirectUrl.value,
        image: imageData,
        isActive: true,
      } as CreatePortfolioDto;

      await createPortfolios(requestBody);

      alert('글 등록 완료 되었습니다.');

      await router.push('/portfolios');
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
    return (
      <form method="POST" className={classNames(styles['container'])} onSubmit={this.handleSubmit}>
        <label htmlFor="form-title">
          제목
          <input type="text" id="form-title" name="title" />
        </label>
        <label htmlFor="form-category">
          카테고리
          <input type="text" id="form-category" name="category" />
        </label>
        <label htmlFor="form-thumbnail">
          썸네일
          <input type="file" id="form-thumbnail" name="thumbnail" accept="image/*" />
        </label>
        <label htmlFor="form-description">
          설명
          <input type="text" id="form-description" name="description" />
        </label>
        <label htmlFor="form-start-at">
          제작 시작기간
          <input type="date" id="form-start-at" name="startAt" />
        </label>
        <label htmlFor="form-end-at">
          제작 끝
          <input type="date" id="form-end-at" name="endAt" />
        </label>
        <label htmlFor="form-size">
          사이즈
          <input type="text" id="form-size" name="size" />
        </label>
        <label htmlFor="form-program">
          프로그램
          <input type="text" id="form-program" name="program" />
        </label>
        <label htmlFor="form-etc">
          기타사항
          <input type="text" id="form-etc" name="etc" />
        </label>
        <label htmlFor="form-contents">
          내용
          <textarea id="form-contents" name="contents" />
        </label>
        <label htmlFor="form-youtube-url">
          유튜브
          <input type="text" id="form-youtube-url" name="youtubeUrl" />
        </label>
        <label htmlFor="form-redirect-url">
          이동 페이지
          <input type="text" id="form-redirect-url" name="redirectUrl" />
        </label>
        <label htmlFor="form-image">
          이미지
          <input type="file" id="form-image" name="image" accept="image/*" />
        </label>
        <button type="submit">글등록</button>
      </form>
    );
  }
}

export default PortfolioCreate;
