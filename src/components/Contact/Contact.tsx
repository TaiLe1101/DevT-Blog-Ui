import classNames from 'classnames/bind';

import styles from './Contact.module.scss';
import portfolioStyles from '~/layouts/PortfolioLayout/PortfolioLayout.module.scss';

const cx = classNames.bind(styles);
const cxm = classNames.bind(portfolioStyles);

interface PropsTypeContact {}

function Contact({}: PropsTypeContact) {
  return (
    <div className={`${cx('contact')} ${cxm('section')}`} id="contact">
      <h2 className={`${cxm('section__title')}`}>Contact</h2>
      <span className={`${cxm('section__subtitle')}`}>Call me</span>
    </div>
  );
}

export default Contact;
