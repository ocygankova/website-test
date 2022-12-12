import { GetStaticProps, InferGetStaticPropsType } from 'next';
import {
  Achievements,
  Description,
  Hero,
  Portfolio,
  Summary
} from 'components';
import { ICaseGalleryItem } from 'types';
import { caseStudies } from 'data/caseStudies';
import styles from 'styles/pages/Home.module.scss';

function Home({ cases }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Hero />

      <div className={styles.overlay}>
        <Summary />
        <Description />
        <Achievements />
        <Portfolio cases={cases} />
      </div>
    </>
  );
}

export default Home;

export const getStaticProps: GetStaticProps = () => {
  const cases: ICaseGalleryItem[] = caseStudies
    .slice(0, 6)
    .map(({ id, slug, title, date, thumbnail }) => ({
      id,
      slug,
      title,
      date,
      thumbnail
    }));

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
