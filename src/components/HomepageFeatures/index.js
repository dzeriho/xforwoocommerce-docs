import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'XforWooCommerce Docs',
    link: '',
    description: (
      <>
        Choose XforWooCommerce item to start &rarr;
      </>
    ),
  },
  {
    title: 'Product Filter',
    link: '/product-filter',
    description: (
      <>
        Best and the fastest product filters for any WooCommerce shop. Demos include Fashion/Clothing, Electronics/Technics Store, Car Parts Finder, Green/Healthy Shop and many more!
      </>
    ),
  },
];

function Feature({link, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="padding-horiz--md">
        {link && <h3><Link to={'/docs/category'+link}>{title}</Link></h3>}
        {link === '' && <h3>{title}</h3>}
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
