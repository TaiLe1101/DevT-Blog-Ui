import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import GlobalStyles from '~/components/GlobalStyles/GlobalStyles';
import 'tippy.js/dist/tippy.css';

import App from '~/App';
import { store } from './redux/store';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalStyles>
                <App />
            </GlobalStyles>
        </Provider>
    </React.StrictMode>
);
