import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AfidsNavBar } from './AfidsNavBar';
import type { NavProps } from './AfidsNav';
import { Row } from 'react-bootstrap';
import afidsBanner from '../../public/afids_banner.png';

interface HeaderProps {
  readonly isLoggedIn: boolean;
}

const staticNavItems: NavProps[] = [
  {
    key: 'About',
    target: '_self',
    url: '/'
  },
  {
    key: 'Protocol',
    target: '_blank',
    url: 'https://afids.github.io/afids-protocol/'
  },
  {
    key: 'Validator',
    target: '_self',
    url: '/app.html'
  },
  {
    key: 'Contact',
    target: '_self',
    url: '/contact.html'
  }
];

function AfidsHeader({ isLoggedIn }: HeaderProps): JSX.Element {
  // Default navigation bar
  const logInOutNav = isLoggedIn
      ? { key: 'Logout', target: '_self', url: '/logout.html' }
      : { key: 'Login', target: '_self', url: '/login.html' },
    navData = [...staticNavItems, logInOutNav];

  return (
    <>
      <Row>
        <img
          alt="Afids banner"
          className="mx-auto"
          id="afids-banner"
          src={afidsBanner}
        />
      </Row>

      <div className="justify-content-center">
        <AfidsNavBar navs={navData} />
      </div>

      <hr className="nav-hr" />
    </>
  );
}

// Need to pass currentUser from backend
function renderHeader(isLoggedIn: boolean): void {
  ReactDOM.render(
    React.createElement(AfidsHeader, { isLoggedIn }),
    document.getElementById('react-navbar')
  );
}

export default renderHeader;
