import React from 'react';

import { Counter } from './Counter';

import './main.scss';

const getProps = (text) => ({
    valid: true,
    text: text || 'Good boy!'
});

export const Main = () => (
    <main className='main'>
        <p>Main</p>
        <Counter />
    </main>
);
