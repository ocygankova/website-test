import Link from 'next/link';
import { Container } from 'components';
import { routes } from './consts';
import { IRouteLink } from 'types';
import styles from './Footer.module.scss';
import { FacebookIcon, LinkedinIcon } from 'components/icons';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.menu}>
            <p className={styles.title}>Navigate</p>

            {routes.map(({ path, name, id }: IRouteLink) => (
              <Link key={id} href={path} className={styles.route}>
                {name}
              </Link>
            ))}
          </div>

          <div className={styles.socials}>
            <a href="https://www.facebook.com" rel="noopener noreferrer">
              <FacebookIcon className={styles.icon} />
            </a>

            <a href="https://www.linkedin.com" rel="noopener noreferrer">
              <LinkedinIcon className={styles.icon} />
            </a>

            <p className={styles.copyright}>©2022 All Rights Reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
