import { CSSProperties } from 'react';
import { industries } from './consts';
import styles from './IndustryList.module.scss';

interface Props {
  style?: CSSProperties;
}

function IndustryList({ style }: Props) {
  return (
    <div className={styles.wrapper}>
      {industries.map((item, index) => (
        <span className={styles.item} style={{ ...style }} key={index}>
          {item}
        </span>
      ))}
    </div>
  );
}

export default IndustryList;
