import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface footerProps {
  readonly icon: Readonly<IconDefinition>;
  readonly key: string;
  readonly url: string;
}

export function FooterIcon({ icon, key, url }: footerProps): JSX.Element {
  return (
    <a href={url} key={key} rel="noreferrer" target="_blank">
      <FontAwesomeIcon icon={icon} />
    </a>
  );
}
