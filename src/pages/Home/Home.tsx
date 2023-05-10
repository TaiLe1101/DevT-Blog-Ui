import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import portfolioStyles from '~/layouts/PortfolioLayout/PortfolioLayout.module.scss';

import Social from './components/Social';
import Data from './components/Data';
import ScrollDown from './components/ScrollDown';
import About from '../About';
import Skills from '../Skills/Skills';
import Services from '../Services/Services';
import Qualification from '../Qualification/Qualification';

const cx = classNames.bind(styles);
const cxm = classNames.bind(portfolioStyles);

document.title = 'Portfolio page';

function Home() {
  return (
    <>
      <div className={`${cx('home')} ${cxm('section')}`} id="home">
        <div className={`${cx('home__container')} ${cxm('container', 'grid')}`}>
          <div className={`${cx('home__content')} ${cxm('grid')}`}>
            <Social></Social>
            <div className={cx('home__img')}></div>
            <Data></Data>
          </div>
          <ScrollDown></ScrollDown>
        </div>
      </div>
      <About></About>
      <Skills></Skills>
      <Services></Services>
      <Qualification></Qualification>
    </>
  );
}

export default Home;
