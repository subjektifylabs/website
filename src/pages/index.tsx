import type { ReactNode } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import HomepageActions from '@site/src/components/HomepageActions';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import OverviewHero from '@site/src/components/OverviewHero';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Designed for Developers.<br />Built for the Future.
        </Heading>
        <p className="hero__subtitle">
          Build, customize, and scale decentralized applications with ease.
        </p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Home"
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageActions />
        <OverviewHero />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
