import React from 'react';
import classNames from 'classnames';
import styles from './index.less';
import Link from 'umi/link';
import { ConversionPath } from '@/components/utils'

const GlobalFooter = ({ className, links, copyright }) => {
  const clsString = classNames(styles.globalFooter, className);
  return (
    <footer className={clsString}>
      {links && (
        <div className={styles.links}>
          {links.map(link => (
            ConversionPath(link.href)
              ?
              <Link
                to={`${link.href}`}
                key={link.key}
              >
                {link.title}
              </Link>
              :
              <a
                key={link.key}
                title={link.key}
                target={link.blankTarget ? '_blank' : '_self'}
                href={link.href}
              >
                {link.title}
              </a>
          )
          )}
        </div>
      )}
      {copyright && <div className={styles.copyright}>{copyright}</div>}
    </footer>
  );
};

export default GlobalFooter;
