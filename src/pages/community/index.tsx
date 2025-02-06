import type { ReactNode } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function CommunityCard() {
    return (
        <div className="card-demo">
            <div className="card">
                <div className="card__header">
                    <Heading as="h1" className="hero__title">
                        Participate in Subjektify
                    </Heading>
                </div>
                <div className="card__body">
                    <p>
                        Connect with a vibrant network of developers, innovators, and enthusiasts shaping the future of decentralized applications.
                    </p>
                </div>
                <div className="card__footer">
                    <button className="button button--lg button--primary text--center button--block">Let's get started</button>
                </div>
            </div>
        </div>
    );
}

function CommunityHeader() {
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <div className="row">
                    <div className="col col--4">
                        <CommunityCard />
                    </div>
                    <div className="col col--8 text--center">
                        <img
                            className={clsx(styles.heroImage)}
                            src="/img/hero-community.png"
                            alt="Learn"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default function Community(): ReactNode {
    return (
        <Layout
            title="Community"
            description="Connect, collaborate, and grow with the Subjektify community—a vibrant network of developers, enthusiasts, and innovators.">
            <CommunityHeader />
            <main>
            </main>
        </Layout>
    );
}
