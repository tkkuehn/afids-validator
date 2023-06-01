import * as React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { AfidsNav } from './AfidsNav';
import type { NavProps } from './AfidsNav';

export interface NavBarProps {
  readonly navs: readonly NavProps[];
}

export function AfidsNavBar({ navs }: NavBarProps): JSX.Element {
  return (
    <Navbar variant="dark">
      <Nav>
        {navs.map((nav) => (
          <AfidsNav key={nav.key} target={nav.target} url={nav.url} />
        ))}
      </Nav>
    </Navbar>
  );
}
