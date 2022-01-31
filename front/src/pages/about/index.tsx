import React from 'react';
import Head from 'next/head';
import { isMobile } from 'react-device-detect';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Mousewheel, A11y } from 'swiper';
import 'swiper/css';

import classNames from '#utils/classNames';
import styles from './About.module.scss';
import AboutMySkillsList from '#components/about/my_skills/list';

SwiperCore.use([Mousewheel, A11y]);

class About extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>sanha&apos;s portfolio | about</title>
        </Head>
        {isMobile ? (
          <img src="/assets/images/about/about_mobile.png" style={{ width: '100%' }} alt="about" />
        ) : (
          <Swiper
            direction="vertical"
            slidesPerView={1}
            className={classNames(styles['container'])}
            centeredSlides
            mousewheel
            allowTouchMove={false}
          >
            <SwiperSlide>
              <section className={classNames(styles['section-1'])}>
                <img
                  src="/assets/images/about/about_profile.png"
                  alt="profile"
                  className={classNames(styles['square'])}
                />
                <p className={classNames(styles['square'])}>
                  HELLO!
                  <br />
                  I&apos;M SANHA
                </p>
                <img
                  src="/assets/images/about/about_square_3.png"
                  alt="square"
                  className={classNames(styles['square'])}
                />
                <img
                  src="/assets/images/about/about_square_2.png"
                  alt="square"
                  className={classNames(styles['square'])}
                />
                <img
                  src="/assets/images/about/about_square_4.png"
                  alt="square"
                  className={classNames(styles['square'])}
                />
                <img
                  src="/assets/images/about/about_square_2.png"
                  alt="square"
                  className={classNames(styles['square'])}
                />
                <img
                  src="/assets/images/about/about_square_1.png"
                  alt="square"
                  className={classNames(styles['square'])}
                />

                <p className={classNames(styles['top-right-square'])}>
                  WEB
                  <br />
                  DESIGNER
                </p>
                <img
                  src="/assets/images/about/about_square_6.png"
                  alt="square"
                  className={classNames(styles['top-right-square'])}
                />
                <img
                  src="/assets/images/about/about_square_7.png"
                  alt="square"
                  className={classNames(styles['top-right-square'])}
                />

                <p className={classNames(styles['bottom-right-square'])}>
                  LET ME
                  <br />
                  INTRODUCE MY
                  <br />
                  SELF?
                </p>
                <img
                  src="/assets/images/about/about_square_10.png"
                  alt="square"
                  className={classNames(styles['bottom-right-square'])}
                />
                <img
                  src="/assets/images/about/about_square_8.png"
                  alt="square"
                  className={classNames(styles['bottom-right-square'])}
                />
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section className={classNames(styles['section-2'])}>
                <article className={classNames(styles['nice-to-meet-you'])}>
                  <div className={classNames(styles['inner'])}>
                    <h3 className={classNames(styles['title'])}>NICE TO MEET YOU!</h3>
                    <p className={classNames(styles['text'])}>
                      가치있게 여기는 일에는 매우 헌신적이며,
                      <br />
                      방향과 속도를 빠르게 조정하는 적응력을 가지고 있습니다.
                      <br />
                      <br />
                      안주하지 않고 끝없이 발전하고
                      <br />
                      창의적인 생각을 이미지로 표현해야 하는 디자인은
                      <br />
                      매우 가치 있는 일이라고 생각합니다.
                      <br />
                      <br />
                      예쁘기만 한 디자인이 아닌 사용자의 편리함까지
                      <br />
                      생각하여 융통성 있는 디자인을 위해 끝없이
                      <br />
                      노력하는 열정을 가지고 있습니다.
                      <br />
                      <br />
                      반갑습니다! 당신과 일하고 싶은 돋보이는
                      <br />
                      웹디자이너 노산하입니다.
                    </p>
                  </div>
                </article>
                <article className={classNames(styles['my-skills'])}>
                  <div className={classNames(styles['inner'])}>
                    <h3 className={classNames(styles['title'])}>MY SKILLS</h3>
                    <AboutMySkillsList
                      items={[
                        { key: 'skill-AI', name: 'AI', percent: '98%' },
                        { key: 'skill-PR', name: 'PR', percent: '82%' },
                        { key: 'skill-PS', name: 'PS', percent: '80%' },
                        { key: 'skill-HTML CSS', name: 'HTML CSS', percent: '80%' },
                        { key: 'skill-JS', name: 'JS', percent: '20%' },
                        { key: 'skill-XD', name: 'XD', percent: '65%' },
                      ]}
                    />
                  </div>
                </article>
              </section>
            </SwiperSlide>
          </Swiper>
        )}
      </>
    );
  }
}

export default About;
