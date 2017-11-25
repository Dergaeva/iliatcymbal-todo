import React from 'react';
import './navigation.scss';

const items = [
    { label: 'Home', id: 'asfd445asdf' },
    { label: 'Contacts', id: 'dfsdf54d5sfd'}
    ];

export const Navigation = () => {
    return (
        <nav className='main-nav'>
            <ul>
                {
                    items.map((item, index) => (
                        <li key={item.id}>
                            <a href={`/${item.label.toLowerCase()}`}>{item.label}</a>
                        </li>
                      )
                    )
                }
            </ul>
        </nav>
    );
};
