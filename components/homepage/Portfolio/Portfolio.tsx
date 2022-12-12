import { Container, IndustryList, PortfolioCard } from 'components';
import { ICaseGalleryItem } from 'types';
import styles from './Portfolio.module.scss';

interface Props {
  cases: ICaseGalleryItem[];
}

function Portfolio({ cases }: Props) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.badge}>Showcase</div>

        <h3 className={styles.title}>Built from scratch...</h3>
        <h2 className={styles.title}>Our Portfolio</h2>
        <p className={styles.description}>
          No stress, only profit and making money for your business. Book a call
          and your case will be here too.
        </p>

        <IndustryList style={{ fontWeight: 400, fontSize: '1rem' }} />

        <div className={styles.portfolio}>
          {cases.map((item: ICaseGalleryItem) => (
            <div className={styles.column} key={item.id}>
              <PortfolioCard caseItem={item} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Portfolio;
