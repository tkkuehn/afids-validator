import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FooterIcon } from './FooterIcon';
import { Row } from 'react-bootstrap';
import type { footerProps } from './FooterIcon';

function Footer(): JSX.Element {
  const curYear: number = new Date().getFullYear(),
    footerData: readonly footerProps[] = [
      {
        icon: faTwitter,
        key: 'Twitter',
        url: 'https://twitter.com/afids_project'
      },
      {
        icon: faGithub,
        key: 'Github',
        url: 'https://github.com/afids'
      }
    ],
    startYear = 2018;

  return (
    <footer>
      <div className="flex">
        {footerData.map((foot) => (
          <FooterIcon icon={foot.icon} key={foot.key} url={foot.url} />
        ))}
      </div>
      <Row>{`${startYear} - ${curYear} Anatomical Fiducials Validator`}</Row>
    </footer>
  );
}

function renderFooter(): void {
  ReactDOM.render(<Footer />, document.getElementById('react-footer'));
}

export default renderFooter;
