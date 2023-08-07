import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import 'tippy.js/animations/scale.css';
import 'tippy.js/dist/tippy.css';
import GlobalStyles from '~/components/GlobalStyles/GlobalStyles';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { persistor, store } from './redux/store';
import App from '~/App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <GlobalStyles>
                    <App />
                    <ToastContainer position="top-right" autoClose={1000} />
                </GlobalStyles>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
