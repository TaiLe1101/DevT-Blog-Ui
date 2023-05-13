import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '~/App';
import GlobalStyles from '~/components/GlobalStyles/GlobalStyles';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <App />
        </GlobalStyles>
    </React.StrictMode>
);
