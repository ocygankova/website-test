import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { ICaseDetailsItem, ICaseGalleryItem } from 'types';
import { caseStudies } from 'data/caseStudies';

function CaseDetails({
  caseItem
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>{caseItem.summary.description}</div>;
}

export default CaseDetails;

export const getStaticPaths: GetStaticPaths = () => {
  if (caseStudies.length) {
    const paths = caseStudies.map(({ slug }: ICaseGalleryItem) => ({
      params: { slug: slug }
    }));

    return { paths, fallback: false };
  } else {
    return { paths: [], fallback: false };
  }
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const item = caseStudies.find((item) => item.slug === params!.slug);

  if (item) {
    const caseItem: ICaseDetailsItem = (({
      id,
      images,
      summary,
      tech_stack
    }) => ({
      id,
      images,
      summary,
      tech_stack
    }))(item);

    return {
      props: { caseItem }
    };
  } else {
    return {
      notFound: true
    };
  }
};
