import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import OverviewHero from '@site/src/components/OverviewHero';
import Heading from '@theme/Heading';

import PluginImage from '@site/static/img/tools/plugin.svg';
import BlueprintImage from '@site/static/img/tools/blueprint.svg';
import UniverseImage from '@site/static/img/tools/universe.svg';
import ComposerImage from '@site/static/img/tools/composer.svg';

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

function HomepageActions() {
  return (
    <div className={clsx(styles.actions)}>
      <div className="card-demo">
        <div className="row">
          <Link to='https://blueprints.subjektify.dev' className={clsx(styles.action)}>
          <div className={clsx("card margin-right--sm", styles.actionCard)}>
            <div className="card__header">
              <div className="avatar">
                <BlueprintImage
                  className="avatar__photo"
                />
                <div className="avatar__intro">
                  <div className="avatar__name">Start with a Blueprint</div>
                  <small className="avatar__subtitle">
                    Kickstart your project with ready-made templates
                  </small>
                </div>
              </div>
            </div>
          </div>
          </Link>
          <Link to='https://plugins.subjektify.dev' className={clsx(styles.action)}>
          <div className={clsx("card", styles.actionCard)}>
            <div className="card__header">
              <div className="avatar">
                <PluginImage
                  className="avatar__photo"
                />
                <div className="avatar__intro">
                  <div className="avatar__name">Discover Plugins</div>
                  <small className="avatar__subtitle">
                    Extend functionality with powerful integrations
                  </small>
                </div>
              </div>
            </div>
          </div>
          </Link>
          <Link to='https://composer.subjektify.dev' className={clsx(styles.action)}>
          <div className={clsx("card margin-right--sm", styles.actionCard)}>
            <div className="card__header">
              <div className="avatar">
                <ComposerImage
                  className="avatar__photo"
                />
                <div className="avatar__intro">
                  <div className="avatar__name">Compose a Subject</div>
                  <small className="avatar__subtitle">
                    Design, customize, and publish your own subject
                  </small>
                </div>
              </div>
            </div>
          </div>
          </Link>
          <Link to='https://universe.subjektify.dev' className={clsx(styles.action)}>
            <div className={clsx("card margin-right--sm", styles.actionCard)}>
              <div className="card__header">
                <div className="avatar">
                  <UniverseImage
                    className="avatar__photo"
                  />
                  <div className="avatar__intro">
                    <div className="avatar__name">Explore the Subject Universe</div>
                    <small className="avatar__subtitle">
                      Discover a vast ecosystem of reusable subjects
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
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
