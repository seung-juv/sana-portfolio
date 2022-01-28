import React from 'react';
import Head from 'next/head';
import classNames from '#utils/classNames';
import styles from './About.module.scss';

class About extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>sanha&apos;s portfolio | about</title>
        </Head>
        <div className={classNames(styles.container)}>
          <section className={classNames(styles['section-1'])}>
            <img src="/assets/images/about/about_profile.png" alt="profile" className={classNames(styles['square'])} />
            <p className={classNames(styles['square'])}>
              HELLO!
              <br />
              I&apos;M SANHA
            </p>
            <img src="/assets/images/about/about_square_3.png" alt="square" className={classNames(styles['square'])} />
            <img src="/assets/images/about/about_square_2.png" alt="square" className={classNames(styles['square'])} />
            <img src="/assets/images/about/about_square_4.png" alt="square" className={classNames(styles['square'])} />
            <img src="/assets/images/about/about_square_2.png" alt="square" className={classNames(styles['square'])} />
            <img src="/assets/images/about/about_square_1.png" alt="square" className={classNames(styles['square'])} />

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
        </div>
      </>
    );
  }
}

export default About;
