import { Fragment, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { useAppSelector } from '~/hooks';
import './index.scss';
import DefaultLayout from './layouts/DefaultLayout';
import NotFound from './pages/NotFound';
import { privateRoutes, publicRoutes } from './routes';

function App() {
    const [theme] = useState<'light' | 'dark'>('light');
    const currentUser = useAppSelector((state) => state.auth.currentUser);

    return (
        <Router>
            <div className={`App ${theme}`}>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout: any = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                    {currentUser &&
                        privateRoutes.map((route, index) => {
                            const Page = route.component;

                            let Layout: any = DefaultLayout;

                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                ></Route>
                            );
                        })}

                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
