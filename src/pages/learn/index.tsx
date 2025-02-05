import type { ReactNode } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function LearnCard() {
    return (
        <div className="card-demo">
            <div className="card">
                <div className="card__header">
                    <Heading as="h1" className="hero__title">
                        Learn about Subjektify
                    </Heading>
                </div>
                <div className="card__body">
                    <p>
                        Your educational guide to the next-generation decentralized development environment. Discover how Subjektify streamlines building, deploying, and scaling secure dApps using powerful tools and modular templates.
                    </p>
                </div>
                <div className="card__footer">
                    <button className="button button--lg button--primary text--center button--block">Let's get started</button>
                </div>
            </div>
        </div>
    );
}

function LearnHeader() {
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <div className="row">
                    <div className="col col--4">
                        <LearnCard />
                    </div>
                    <div className="col col--8 text--center">
                        <img
                            className={clsx(styles.heroImage)}
                            src="/img/hero-learn.png"
                            alt="Learn"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default function Learn(): ReactNode {
    return (
        <Layout
            title="Learn"
            description="Explore Subjektify, the modular, decentralized development platform for building secure, scalable dApps.">
            <LearnHeader />
            <main>
            </main>
        </Layout>
    );
}
