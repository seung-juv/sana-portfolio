import React from 'react';
import classNames from '#utils/classNames';
import styles from './Contact.module.scss';

class Contact extends React.Component {
  render() {
    return (
      <div className={classNames(styles['container'])}>
        <picture>
          <source media="(max-width: 716px)" srcSet="/assets/images/contact/contact_mobile.png" />
          <img src="/assets/images/contact/contact_pc.png" alt="contact" />
        </picture>
      </div>
    );
  }
}

export default Contact;
