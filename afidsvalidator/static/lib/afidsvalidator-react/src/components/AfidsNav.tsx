import * as React from 'react';
import { Nav } from 'react-bootstrap';

export interface NavProps {
  readonly key: string;
  readonly url: string;
  readonly target: string;
}

export function AfidsNav({ key, url, target }: NavProps): JSX.Element {
  return (
    <Nav.Link href={url} key={key} target={target}>
      {key}
    </Nav.Link>
  );
}

export default AfidsNav;
