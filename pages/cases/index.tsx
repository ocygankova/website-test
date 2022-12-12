import { GetStaticProps, InferGetStaticPropsType } from 'next';
import {
  Container,
  IndustryList,
  PageHeading,
  PortfolioCard
} from 'components';
import { ICaseGalleryItem } from 'types';
import { caseStudies } from 'data/caseStudies';
import styles from 'styles/pages/Cases.module.scss';

function Cases({ cases }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageHeading
        title="Case Studies"
        description="Share your idea and we will set up the team that will take it off the ground"
      />

      <section>
        <Container>
          <IndustryList />

          <div className={styles.portfolio}>
            {cases.map((item: ICaseGalleryItem) => (
              <div className={styles.column} key={item.id}>
                <PortfolioCard caseItem={item} />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

export default Cases;

export const getStaticProps: GetStaticProps = () => {
  const cases: ICaseGalleryItem[] = caseStudies.map(
    ({ id, slug, title, date, thumbnail }) => ({
      id,
      slug,
      title,
      date,
      thumbnail
    })
  );

  if (cases.length) {
    return {
      props: { cases }
    };
  } else {
    return {
      notFound: true
    };
  }
};
