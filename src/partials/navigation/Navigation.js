import { NavLink } from 'react-router-dom';

import './navigation.scss';

const items = [
  { label: 'Home', id: 'asfd445asdf' },
  { label: 'Tasks', id: 'dfsdf54d5sfd' }
];

export const Navigation = () => {
  return (
    <nav className='main-nav'>
      <ul>
        {
          items.map((item, index) => (
              <li
                key={item.id}
                className='item'
              >
                <NavLink
                  activeClassName="active"
                  to={`/${item.label.toLowerCase()}`}
                >
                  {item.label}
                </NavLink>
              </li>
            )
          )
        }
      </ul>
    </nav>
  );
};
