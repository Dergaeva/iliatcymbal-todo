import React from 'react';

import { Header } from './header';
import { Main } from './main';
import { Footer } from './footer';

import { Error } from './Error';

import './app.scss';

export const App = (
    <div>
        <Header />

        <Error
            text="This is an error!"
            color="green"
        />

        <br />
        <Error />
        <Main />
        <Footer />
    </div>
);