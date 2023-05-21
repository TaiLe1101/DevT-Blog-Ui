import { Fragment, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { publicRoutes, privateRoutes } from './routes';
import DefaultLayout from './layouts/DefaultLayout';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import NotFound from './pages/NotFound';
import './index.scss';

function App() {
    const [theme] = useState<'light' | 'dark'>('light');
    const currentUser = useSelector(
        (state: RootState) => state.auth.login.data
    );

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
