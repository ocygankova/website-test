import Image from 'next/image';
import Link from 'next/link';
import { ICaseGalleryItem } from 'types';
import variables from 'styles/variables.module.scss';
import styles from './PortfolioCard.module.scss';

interface Props {
  caseItem: ICaseGalleryItem;
}

function PortfolioCard({ caseItem }: Props) {
  const { title, date, thumbnail, slug } = caseItem;

  return (
    <Link className={styles.link} href={`/cases/${slug}`}>
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <Image
            className={styles.image}
            src={thumbnail}
            alt={title}
            fill
            sizes={`(max-width: ${variables.widthXs}) 100vw, (max-width: ${variables.widthMd}) 50vw, 30vw`}
          />
        </div>

        <h2 className={styles.title}>{title}</h2>

        <div className={styles.bottom}>
          <p className={styles.readMore}>View case study</p>
          <p className={styles.date}>{date}</p>
        </div>
      </div>
    </Link>
  );
}

export default PortfolioCard;
