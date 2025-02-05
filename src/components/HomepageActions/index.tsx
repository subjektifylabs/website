import { ComponentType, SVGProps } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import PluginImage from '@site/static/img/tools/plugin.svg';
import BlueprintImage from '@site/static/img/tools/blueprint.svg';
import UniverseImage from '@site/static/img/tools/universe.svg';
import ComposerImage from '@site/static/img/tools/composer.svg';

import styles from './styles.module.css';

type ActionProps = {
    title: string;
    description: string;
    link: string;
    Image: ComponentType<SVGProps<SVGSVGElement>>;
};

const Action = ({ title, description, link, Image }: ActionProps) => (
  <Link to={link} className={clsx(styles.action)}>
    <div className={clsx("card", styles.actionCard)}>
      <div className="card__header">
        <div className="avatar">
          <Image className="avatar__photo" />
          <div className="avatar__intro">
            <div className="avatar__name">{title}</div>
            <small className="avatar__subtitle">{description}</small>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

export default function HomepageActions() {

    const actions = [
        {
            title: 'Start with a Blueprint',
            description: 'Kickstart your project with ready-made templates',
            link: 'https://blueprints.subjektify.dev',
            Image: BlueprintImage,
        },
        {
            title: 'Discover Plugins',
            description: 'Extend your dApp with powerful integrations',
            link: 'https://plugins.subjektify.dev',
            Image: PluginImage,
        },
        {
            title: 'Compose a Subject',
            description: 'Design, customize, and publish your own subject',
            link: 'https://composer.subjektify.dev',
            Image: ComposerImage,
        },
        {
            title: 'Explore the Subject Universe',
            description: 'Discover a vast ecosystem of reusable subjects',
            link: 'https://universe.subjektify.dev',
            Image: UniverseImage,
        },
    ];

    return (
        <div className={clsx(styles.actions)}>
            <div className="card-demo">
                <div className="row">
                    {actions.map((action, index) => (
                        <Action key={index} {...action} />
                    ))}
                </div>
            </div>
        </div>
    );
}