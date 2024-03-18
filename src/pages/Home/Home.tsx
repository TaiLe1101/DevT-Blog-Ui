import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import portfolioStyles from '~/layouts/PortfolioLayout/PortfolioLayout.module.scss';

import Social from './components/Social';
import Data from './components/Data';
import ScrollDown from './components/ScrollDown';

import About from '~/components/About';
import Skills from '~/components/Skills';
import Services from '~/components/Services';
import Qualification from '~/components/Qualification';
import Testimonial from '~/components/Testimonial';
import Contact from '~/components/Contact/Contact';
import Portfolio from '~/components/Portfolio';
import { ProjectModel } from '~/models/ProjectModel';
import { projectApi } from '~/api/projectApi';

const cx = classNames.bind(styles);
const cxm = classNames.bind(portfolioStyles);

document.title = 'Portfolio page';

function Home() {
    const [projects, setProjects] = useState<ProjectModel[]>([]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {
        const getProjectAPI = async () => {
            const res = await projectApi.getAll();
            if (res.statusCode === 200) {
                setProjects(res.data ? res.data : []);
                console.log(res.data);
            }
        };
        getProjectAPI();
    }, []);

    return (
        <>
            <div className={`${cx('home')} ${cxm('section')}`} id="home">
                <div
                    className={`${cx('home__container')} ${cxm(
                        'container',
                        'grid'
                    )}`}
                >
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
            <Portfolio projects={projects}></Portfolio>
            <Qualification></Qualification>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </>
    );
}

export default Home;
