import { Container } from 'components';
import { content } from './consts';
import styles from './Summary.module.scss';

function Summary() {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>App development:</h2>

        <div className={styles.wrapper}>
          {content.map(({ id, icon, title }) => (
            <div className={styles.item} key={id}>
              <div className={styles.icon}>{icon}</div>
              <p className={styles.text}>{title}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Summary;
