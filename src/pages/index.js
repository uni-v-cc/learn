import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The central repository for all your VRChat Creator Companion needs!">
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        {siteConfig.tagline.split("\n").map((str, idx) => (<p className="hero__subtitle" key={idx}>{str}</p>))}
        <div className={styles.buttons} style={{ gap: "5em", display: "flex", flexDirection: "row" }}>
        <HeaderButton to="/docs/user/intro" label="Want to get started with avatar creation?" title="Visit User Guide" />
        <HeaderButton to="/docs/creator/intro" label="Want to upload your avatars/prefabs to the platform?" title="Visit Creator Guide" />
        </div>
      </div>
    </header >
  );
}

function HeaderButton({ to, label, title }) {
  return <div style={{ gap: "0.5em", display: "flex", flexDirection: "column" }}>
    <p style={{ fontSize: "1.5em", margin: 0 }}>{label}</p>
    <Link className="button button--secondary button--lg" to={to}>{title}</Link>
  </div>;
}