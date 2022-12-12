import Link from 'next/link';
import { Container } from 'components';
import { content } from './consts';
import styles from './Description.module.scss';

function Description() {
  return (
    <section className={styles.section}>
      <Container>
        <h1 className={styles.title}>Enterprise Level Web and Mobile Apps</h1>

        <div className={styles.wrapper}>
          {content.map(({ description, title, id, icon }) => (
            <div key={id} className={styles.column}>
              <div className={styles.card}>
                <div className={styles.icon}>{icon}</div>
                <h4 className={styles.cardTitle}>{title}</h4>
                <p className={styles.text}>{description}</p>
                <Link className={styles.link} href="/about">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Description;
